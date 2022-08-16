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
  
  const CardTitle = <Typography variant="p">Order Updates</Typography>;
  
  const updates = [
    {
      updateId: 0,
      updateDate: '2022-07-12',
      description: "Order received by supplier",
    },
    {
      updateId: 1,
      updateDate: '2022-07-13',
      description: "Order is being fufilled",
    },
    {
      updateId: 2,
      updateDate: '2022-07-14',
      description: "Order has been sent",
    },
    {
      updateId: 3,
      updateDate: '2022-07-17',
      description: "Tracking code supplied",
    },
    {
      updateId: 4,
      updateDate: '2022-07-19',
      description: "Order is in transit",
    },
    {
      updateId: 5,
      updateDate: '2022-07-20',
      description: "Order arrived at delivery hub"
    }
  ];
  
  const OrderDetailUpdates = () => {
    return (
      <Card>
        <CardHeader title={CardTitle} />
        <CardContent>
          <Divider variant="middle" />
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell align="left" width="20%">Date</TableCell>
                <TableCell align="left">Description</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {updates.map((update) => {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={update.updateId}
                  >
                    <TableCell key="0" align="left" width="20%">
                      {update.updateDate}
                    </TableCell>
                    <TableCell key="1" align="left">
                      {update.description}
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
  
  export default OrderDetailUpdates;
  