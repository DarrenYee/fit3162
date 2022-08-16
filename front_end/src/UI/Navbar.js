import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const ThemedNavLink = (props) => {
  return (
    <Typography variant="h5" sx={{ flexGrow: 1 }}>
      <NavLink
        to={props.to}
        style={({ isActive }) => {
          return { textDecoration: isActive ? "underline" : "none", color: "white" };
        }}
      >
        {props.children}
      </NavLink>
    </Typography>
  );
};

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          align="left"
          variant="h6"
          component="div"
          sx={{ flexGrow: 1 }}
        >
          Welcome Back, (Username)
        </Typography>
        <Container maxWidth="md" sx={{ display: "flex", color: "white" }}>
          <ThemedNavLink to="/">Dashboard</ThemedNavLink>
          <ThemedNavLink to="/orders">Orders</ThemedNavLink>
          <ThemedNavLink to="/products">Products</ThemedNavLink>
          <ThemedNavLink to="/suppliers">Suppliers</ThemedNavLink>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
