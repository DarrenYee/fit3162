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
import SupplierTable from "../../Components/SupplierTable";
import LoadingSpinner from "../../UI/LoadingSpinner";
import useHTTP from "../../hooks/use-http";

const CardTitle = <Typography variant="h5">Suppliers</Typography>;

const FilterQueryComponent = (props) => {
  return (
    <Grid container paddingBottom={2} spacing={2}>
      <Grid item>
        <TextField
          id="supplierId"
          label="Supplier ID"
          value={props.queryState.id}
          type="search"
          onChange={(e) => {
            props.dispatchQuery({ type: "id", value: e.target.value });
          }}
        />
      </Grid>
      <Grid item>
        <TextField
          id="supplierName"
          label="Supplier Name"
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

const SuppliersPage = () => {
  const [suppliers, setSuppliers] = useState([]);
  const [filteredRows, setFilteredRows] = useState([]);
  const { isLoading, error, sendRequest: fetchSuppliers } = useHTTP();

  useEffect(() => {
    const transformSuppliers = (suppliersObj) => {
      const loadedSuppliers = [];

      for (const supplierKey in suppliersObj) {
        loadedSuppliers.push(suppliersObj[supplierKey]);
      }

      setSuppliers(loadedSuppliers);
    };

    fetchSuppliers(
      { url: "https://chace-test-default-rtdb.firebaseio.com/suppliers.json" },
      transformSuppliers
    );
  }, [fetchSuppliers]);

  useEffect(() => {
    setFilteredRows(suppliers);
  }, [suppliers, setFilteredRows]);

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
    const updatedRows = suppliers.filter((row) => {
      return (
        (queryState.id.trim().length === 0 ||
          row.supplierId.includes(queryState.id)) &&
        (queryState.name.trim().length === 0 ||
          row.supplierName
            .toLowerCase()
            .includes(queryState.name.toLowerCase()))
      );
    });
    setFilteredRows(updatedRows);
  }, [queryState, suppliers]);

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
          <SupplierTable rows={filteredRows} />
        </CardContent>
      </Card>
    </Container>
  );
};

export default SuppliersPage;
