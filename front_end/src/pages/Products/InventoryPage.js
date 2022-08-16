import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Grid,
  TextField,
} from "@mui/material";
import { Container } from "@mui/system";
import { useReducer, useEffect, useState } from "react";
import InventoryTable from "../../Components/InventoryTable";
import LoadingSpinner from "../../UI/LoadingSpinner";
import useHTTP from "../../hooks/use-http";

const CardTitle = <Typography variant="h5">Product Inventory</Typography>;

const FilterQueryComponent = (props) => {
  return (
    <Grid container paddingBottom={2} spacing={2}>
      <Grid item>
        <TextField
          id="productId"
          label="Product ID"
          value={props.queryState.id}
          type="search"
          onChange={(e) => {
            props.dispatchQuery({ type: "id", value: e.target.value });
          }}
        />
      </Grid>
      <Grid item>
        <TextField
          id="productName"
          label="Product Name"
          value={props.queryState.name}
          type="search"
          onChange={(e) => {
            props.dispatchQuery({ type: "name", value: e.target.value });
          }}
        />
      </Grid>
    </Grid>
  );
};

const InventoryPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredRows, setFilteredRows] = useState([]);
  const {isLoading, error, sendRequest: fetchProducts} = useHTTP();

  useEffect(() => {
    const transformProducts = productsObj => {
      const loadedProducts = [];
  
      for (const productKey in productsObj) {
        console.log(productsObj[productKey]);
        loadedProducts.push(productsObj[productKey]);
      }
  
      setProducts(loadedProducts);
    };

    fetchProducts({url: 'https://chace-test-default-rtdb.firebaseio.com/products.json'}, transformProducts);
  }, [fetchProducts]);

  useEffect(() => {
    setFilteredRows(products);
  }, [products, setFilteredRows]);

  const initialQueryState = {
    id: "",
    name: "",
  };
  const queryReducer = (state, action) => {
    switch (action.type) {
      case "id":
        return { ...state, id: action.value };
      case "name":
        return { ...state, name: action.value };
      default:
        return state;
    }
  };
  const [queryState, dispatchQuery] = useReducer(
    queryReducer,
    initialQueryState
  );

  useEffect(() => {
    const updatedRows = products.filter((row) => {
      return (
        (queryState.id.trim().length === 0 ||
          row.productId.includes(queryState.id)) &&
        (queryState.name.trim().length === 0 ||
          row.productName.toLowerCase().includes(queryState.name.toLowerCase()))
      );
    });
    setFilteredRows(updatedRows);
  }, [products, queryState]);

  return (
    <Container fluid="true" sx={{ padding: "50px" }}>
      { isLoading && <LoadingSpinner /> }
      <Card>
        <CardHeader title={CardTitle} />
        <CardContent>
          <FilterQueryComponent
            queryState={queryState}
            dispatchQuery={dispatchQuery}
          />
          <InventoryTable rows={filteredRows}/>
        </CardContent>
      </Card>
    </Container>
  );
};

export default InventoryPage;
