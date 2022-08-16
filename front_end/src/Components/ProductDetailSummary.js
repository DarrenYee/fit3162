import {
  Card,
  CardHeader,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Typography
} from "@mui/material";

const CardTitle = <Typography variant="p">Product Details</Typography>;

const ProductDetailSummary = (props) => {
  return (
    <Card sx={{minHeight: 525}}>
      <CardHeader title={CardTitle} />
      <CardContent>
        <List>
          <ListItem>
            <ListItemText primary={`Product ID: ${props.productId}`}></ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText
              primary={`Product Name: ${props.productName}`}
            ></ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText
              primary={`Current Stock: ${props.productQuantity}`}
            ></ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText
              primary={`Stock On Order: ${props.productQuantityOnOrder}`}
            ></ListItemText>
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
};

export default ProductDetailSummary;
