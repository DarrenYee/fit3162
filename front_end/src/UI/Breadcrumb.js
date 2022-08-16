import { Box, Breadcrumbs, Typography } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();
  const breadcrumbVals = location.pathname.split("/").slice(1, 10);
  console.log(breadcrumbVals);
  let breadcrumPath = "";
  return (
    <Box sx={{ flexGrow: 1, backgroundColor: "#f9f9f9", padding: 2 }}>
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        <Link to="/">
          <Typography style={{ color: "black" }}>Home</Typography>
        </Link>

        {breadcrumbVals.map((path) => {
          breadcrumPath += "/" + path;
          return (
            <Link to={breadcrumPath}>
              <Typography style={{ color: "black" }}>
                {path.charAt(0).toUpperCase() + path.slice(1)}
              </Typography>
            </Link>
          );
        })}
      </Breadcrumbs>
    </Box>
  );
};

export default Breadcrumb;
