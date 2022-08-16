import { Grid } from "@mui/material";
import { useState, useEffect } from "react";
import { useParams } from'react-router-dom';
import useHTTP from "../../hooks/use-http";
import ProductDetailsOrders from "../../Components/ProductDetailsOrders";
import ProductDetailSummary from "../../Components/ProductDetailSummary";
import ProductHistoryLineChart from "../../Components/ProductHistoryLineChart";
import LoadingSpinner from "../../UI/LoadingSpinner";

const ProductDetails = () => {
  const productOrders = [
    {
      orderId: "O20132",
      supplierName: "Company X",
      orderCreated: "2022-07-21",
      orderStatus: "In Progress",
      orderArrivalDate: "2022-07-23",
      orderAmount: Math.floor(Math.random() * 100) + 1,
    },
    {
      orderId: "O20114",
      supplierName: "Company X",
      orderCreated: "2022-07-25",
      orderStatus: "In Progress",
      orderArrivalDate: "2022-07-27",
      orderAmount: Math.floor(Math.random() * 100) + 1,
    },
    {
      orderId: "O77261",
      supplierName: "Company X",
      orderCreated: "2022-07-29",
      orderStatus: "In Progress",
      orderArrivalDate: "2022-07-31",
      orderAmount: Math.floor(Math.random() * 100) + 1,
    },
    {
      orderId: "O20133",
      supplierName: "Company X",
      orderCreated: "2022-08-02",
      orderStatus: "In Progress",
      orderArrivalDate: "2022-08-04",
      orderAmount: Math.floor(Math.random() * 100) + 1,
    },
    {
      orderId: "O20115",
      supplierName: "Company X",
      orderCreated: "2022-08-06",
      orderStatus: "In Progress",
      orderArrivalDate: "2022-08-08",
      orderAmount: Math.floor(Math.random() * 100) + 1,
    },
    {
      orderId: "O77262",
      supplierName: "Company X",
      orderCreated: "2022-08-10",
      orderStatus: "In Progress",
      orderArrivalDate: "2022-08-12",
      orderAmount: Math.floor(Math.random() * 100) + 1,
    },
    {
      orderId: "O20134",
      supplierName: "Company X",
      orderCreated: "2022-08-14",
      orderStatus: "In Progress",
      orderArrivalDate: "2022-08-16",
      orderAmount: Math.floor(Math.random() * 100) + 1,
    },
    {
      orderId: "O20116",
      supplierName: "Company X",
      orderCreated: "2022-08-18",
      orderStatus: "In Progress",
      orderArrivalDate: "2022-08-20",
      orderAmount: Math.floor(Math.random() * 100) + 1,
    },
    {
      orderId: "O77263",
      supplierName: "Company X",
      orderCreated: "2022-08-22",
      orderStatus: "In Progress",
      orderArrivalDate: "2022-08-24",
      orderAmount: Math.floor(Math.random() * 100) + 1,
    },
  ];
  
  const [productDetails, setProductDetails] = useState(null);
  const {isLoading, error, sendRequest: fetchProducts} = useHTTP();
  const params = useParams();

  useEffect(() => {
    const transformProducts = productsObj => {
      for (const productKey in productsObj) {
        if (productsObj[productKey].productId === params.productId){
          setProductDetails(productsObj[productKey]);
          break;
        }
      }
    };

    fetchProducts({url: 'https://chace-test-default-rtdb.firebaseio.com/products.json'}, transformProducts);
  }, [params.productId, fetchProducts]);
  
  const productHistory = productOrders.map(product => (
    {orderCreated: product.orderCreated,
      orderArrival: product.orderArrivalDate,
      orderAmount: product.orderAmount}
  ));

  return (
    <Grid
      container
      justifyContent="center"
      spacing={5}
      alignItems="center"
      sx={{ padding: "50px" }}
    >
      { isLoading && <LoadingSpinner /> }
      <Grid item align="center" xs={6} sm={6} md={6} lg={6} xl={6}>
        <ProductDetailSummary {...productDetails} />
      </Grid>
      <Grid item align="center" xs={6} sm={6} md={6} lg={6} xl={6}>
        <ProductDetailsOrders productOrders={productOrders} />
      </Grid>
      <Grid item align="center" xs={12} sm={12} md={12} lg={12} xl={12}>
        <ProductHistoryLineChart productHistory={productHistory} />
      </Grid>
    </Grid>
  );
};

export default ProductDetails;
