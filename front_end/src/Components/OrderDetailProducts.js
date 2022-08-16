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

const CardTitle = <Typography variant="p">Product Details</Typography>;

const products = [
  {
    quantity: Math.floor(Math.random() * 20) + 1,
    productId: 0,
    name: "Product A",
  },
  {
    quantity: Math.floor(Math.random() * 20) + 1,
    productId: 1,
    name: "Product B",
  },
  {
    quantity: Math.floor(Math.random() * 20) + 1,
    productId: 2,
    name: "Product C",
  },
  {
    quantity: Math.floor(Math.random() * 20) + 1,
    productId: 3,
    name: "Product D",
  },
  {
    quantity: Math.floor(Math.random() * 20) + 1,
    productId: 4,
    name: "Product E",
  },
  {
    quantity: Math.floor(Math.random() * 20) + 1,
    productId: 5,
    name: "Product F",
  },
  {
    quantity: Math.floor(Math.random() * 20) + 1,
    productId: 6,
    name: "Product G",
  },
  {
    quantity: Math.floor(Math.random() * 20) + 1,
    productId: 7,
    name: "Product H",
  },
  {
    quantity: Math.floor(Math.random() * 20) + 1,
    productId: 8,
    name: "Product I",
  },
  {
    quantity: Math.floor(Math.random() * 20) + 1,
    productId: 9,
    name: "Product J",
  },
  {
    quantity: Math.floor(Math.random() * 20) + 1,
    productId: 10,
    name: "Product K",
  },
  {
    quantity: Math.floor(Math.random() * 20) + 1,
    productId: 11,
    name: "Product L",
  },
  {
    quantity: Math.floor(Math.random() * 20) + 1,
    productId: 12,
    name: "Product M",
  },
];

const OrderDetailProducts = () => {
  return (
    <Card>
      <CardHeader title={CardTitle} />
      <CardContent>
        <Divider variant="middle" />
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell align="left" width="20%">Quantity</TableCell>
              <TableCell align="left">Product Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => {
              return (
                <TableRow
                  hover
                  role="checkbox"
                  tabIndex={-1}
                  key={product.productId}
                >
                  <TableCell key="0" align="left" width="20%">
                    {product.quantity}
                  </TableCell>
                  <TableCell key="1" align="left">
                    {product.name}
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

export default OrderDetailProducts;
