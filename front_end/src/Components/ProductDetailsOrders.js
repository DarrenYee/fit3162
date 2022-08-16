import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Divider,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import { Link } from "react-router-dom";

const CardTitle = <Typography variant="p">Product Orders</Typography>;

const ProductDetailsOrders = (props) => {
  return (
    <Card>
      <CardHeader title={CardTitle} />
      <CardContent>
        <Divider variant="middle" />
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell align="left" width="20%">
                  Order ID
                </TableCell>
                <TableCell align="left">Supplier Name</TableCell>
                <TableCell align="left">Order Created</TableCell>
                <TableCell align="left">Order Status</TableCell>
                <TableCell align="left">Arrival Date</TableCell>
                <TableCell align="left">Amount</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.productOrders.map((order) => {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={order.orderId}
                  >
                    <TableCell key="0" align="left" width="20%">
                      <Link to={`/orders/${order.orderId}`}>{order.orderId}</Link>
                    </TableCell>
                    <TableCell key="1" align="left">
                      {order.supplierName}
                    </TableCell>
                    <TableCell key="2" align="left">
                      {order.orderCreated}
                    </TableCell>
                    <TableCell key="3" align="left">
                      {order.orderStatus}
                    </TableCell>
                    <TableCell key="4" align="left">
                      {order.orderArrivalDate}
                    </TableCell>
                    <TableCell key="5" align="left">
                      {order.orderAmount}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};

export default ProductDetailsOrders;
