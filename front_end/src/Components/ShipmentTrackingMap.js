import { Card, CardHeader, CardContent, CardMedia, Typography } from "@mui/material";

const ShipmentTrackingMap = (props) => {
  const CardTitle = <Typography variant="p">{props.title}</Typography>;

  return (
    <Card>
      <CardHeader title={CardTitle} />
      <CardMedia
        component="img"
        height="194"
        image="https://www.pedestrian.tv/wp-content/uploads/2022/05/10/melbourne-paris-end.png"
        alt="map"
      />
      <CardContent>
      <Typography variant="body2" color="text.secondary">
          Current Status: In Transit
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Location: -37.815018, 144.946014
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Estimated Arrival: 20/07/2022
        </Typography>
      </CardContent>
    </Card>
  );
};


export default ShipmentTrackingMap;