import {
  Card,
  CardHeader,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Typography
} from "@mui/material";

const CardTitle = <Typography variant="p">Order Details</Typography>;

const OrderDetailSummary = (props) => {
  return (
    <Card>
      <CardHeader title={CardTitle} />
      <CardContent>
        <List dense={true}>
          <ListItem>
            <ListItemText primary={`Order ID: ${props.orderId}`}></ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText
              primary={`Supplier: ${props.supplierName}`}
            ></ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText
              primary={`Order Created: ${props.dateCreated}`}
            ></ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText
              primary={`Status: ${props.status} (Arrival Date: ${props.orderArrivalDate})`}
            ></ListItemText>
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
};

export default OrderDetailSummary;
