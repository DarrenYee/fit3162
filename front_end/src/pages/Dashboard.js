import { Grid } from "@mui/material";
import LowStockWarnings from "../Components/LowStockWarnings";
import ShipmentTrackingMap from "../Components/ShipmentTrackingMap";
import StockBreakdown from "../Components/StockBreakdown";

function createData(id, name, current_stock, supplier_stock) {
  return { id, name, current_stock, supplier_stock };
}

const rows = [
  createData("P1281", "Product A", 4, 104),
  createData("P5511", "Product B", 9, 0),
  createData("P9182", "Product C", 13, 21),
  createData("P0012", "Product D", 21, 67),
  createData("P8814", "Product E", 22, 49),
];

const Dashboard = () => {
  return (
    <Grid
      container
      justifyContent="center"
      spacing={10}
      alignItems="center"
      sx={{ padding: "50px" }}
    >
      <Grid item align="center" xs={6} sm={6} md={6} lg={6} xl={6}>
        <StockBreakdown
          data={rows.map((row) => ({
            name: row.name,
            value: row.current_stock,
          }))}
        />
      </Grid>
      <Grid item align="center" xs={6} sm={6} md={6} lg={6} xl={6}>
        <ShipmentTrackingMap title="Incoming Deliveries" />
      </Grid>
      <Grid item align="center" xs={12} sm={12} md={12} lg={12} xl={12}>
        <LowStockWarnings rows={rows} />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
