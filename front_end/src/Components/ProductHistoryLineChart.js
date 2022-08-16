import { Card, CardHeader, CardContent, Typography } from "@mui/material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";

function totalAmountCounsumed(data) {
  return data.reduce((total, cur) => {
    return total + cur.orderAmount;
  }, 0);
}

function calculateAmountConsumedPerDay(data) {
  const end_date = new Date(data[data.length - 1].orderArrival);
  const start_date = new Date(data[0].orderArrival);

  const dateRange = Math.ceil(
    (end_date.getTime() - start_date.getTime()) / (1000 * 3600 * 24)
  );

  const totalOrdered = totalAmountCounsumed(data);

  return totalOrdered / dateRange;
}

function calculateRemainingDays(data, avgConsumptionPerDay) {
  return Math.floor(data[data.length - 1].orderAmount / avgConsumptionPerDay);
}

function calculateAverageDeliveryTime(data) {
  return Math.floor(
    data.reduce(
      (total, cur) =>
        total +
        (new Date(cur.orderArrival).getTime() -
          new Date(cur.orderCreated).getTime()) /
          (1000 * 3600 * 24),
      0
    ) / data.length
  );
}



const CardTitle = <Typography variant="p">Product Stock History</Typography>;

const ProductHistoryLineChart = (props) => {
  const avgConsumptionPerDay = calculateAmountConsumedPerDay(props.productHistory);
  const daysOfStock = calculateRemainingDays(props.productHistory, avgConsumptionPerDay);
  const avgDelivery = calculateAverageDeliveryTime(props.productHistory);
  const avgTotalOrder = totalAmountCounsumed(props.productHistory) / props.productHistory.length;

  console.log("Days of Stock ", daysOfStock);
  console.log("Avg Delivery Time ", avgDelivery);
  const remDays = daysOfStock - avgDelivery > 0 ? daysOfStock - avgDelivery : 0;

  const deadline = new Date(props.productHistory[props.productHistory.length - 1].orderArrival);
  deadline.setDate(deadline.getDate() + remDays);
  console.log("Deadline", deadline.toISOString().slice(0, 10));

  const productHistory = [...props.productHistory];
  const deadlineData = {
      orderCreated: '2022-08-20',
      orderArrival: deadline.toISOString().slice(0, 10),
      orderAmount: Math.floor(avgConsumptionPerDay * remDays)
  };
  
  

  const deadlineArrivalDate = new Date(deadline.toISOString().slice(0, 10));
  deadlineArrivalDate.setDate(deadlineArrivalDate.getDate() + avgDelivery);
  console.log("Deadline Arrival", deadlineArrivalDate.toISOString().slice(0, 10));

  const deadlineArrivalData = {
    orderCreated: '2022-08-20',
    orderArrival: deadlineArrivalDate.toISOString().slice(0, 10),
    orderAmount: 0
  }

  productHistory[productHistory.length - 1].orderAmount = productHistory[productHistory.length - 1].orderAmount;

  if (deadline > deadlineArrivalDate) {
    productHistory.push(deadlineArrivalData);
    if (remDays !== 0) {
      productHistory.push(deadlineData);
    }
    
  } else {
    if (remDays !== 0) {
      productHistory.push(deadlineData);
    }
    productHistory.push(deadlineArrivalData);
  }
  
  
  console.log(productHistory);

  return (
    <Card width={1000} height={600}>
      <CardHeader title={CardTitle} />
      <CardContent width="100%" height="100%">
        <ResponsiveContainer width="95%" height={800}>
          <LineChart
            data={productHistory}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="orderArrival" />
            <YAxis />
            <Tooltip />
            <Legend />
            <ReferenceLine
              x={deadline.toISOString().slice(0, 10)}
              stroke="red"
              label="Deadline"
            />
            <ReferenceLine
              x={deadlineArrivalDate.toISOString().slice(0, 10)}
              stroke="red"
              label="Arrival"
            />
            <ReferenceLine
              x="2022-08-24"
              stroke="green"
              label="Today"
            />
            <ReferenceLine
              y={avgTotalOrder}
              stroke="blue"
              label="Avg Quantity"
            />
            <Line
              type="monotone"
              dataKey="orderAmount"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            {/* <Line
              type="monotone"
              dataKey="predAmount"
              stroke="red"
              strokeDasharray="5 5"
            /> */}
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default ProductHistoryLineChart;
