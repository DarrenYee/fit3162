import { Card, CardHeader, CardContent, Typography } from "@mui/material";
import { Cell, Legend, Pie, PieChart } from "recharts";

const StockBreakdown = (props) => {
    const CardTitle = <Typography variant="p">Current Stock Breakdown</Typography>;

    const colours = ["#8884d8", "#82ca9d", "#FFBB28", "#FF8042", "#AF19FF"];

    return(
        <Card sx={{ height: 400}}>
            <CardHeader title={CardTitle}/>
            <CardContent>
                <PieChart width={400} height={300}>
                    <Pie data={props.data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100}>
                        {props.data.map((entry, index) => {return <Cell key={`cell-${index}`} fill={colours[index]}/>;})}
                    </Pie>
                    <Legend/>
                </PieChart>
            </CardContent>
        </Card>
    );
}

export default StockBreakdown;