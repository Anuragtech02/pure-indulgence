import { useState, useEffect } from "react";
import styles from "./Navbar.module.scss";
import clsx from "clsx";
import { NavLink } from "react-router-dom";
import {
  IconButton,
  Box,
  ListItem,
  Divider,
  List,
  Drawer,
} from "@mui/material";
import logo from "../../assets/images/logo.svg";
import shoppingBag from "../../assets/icons/shoppingBag.svg";
import menuHamburger from "../../assets/icons/menu-hamburger.svg";
import crossSmall from "../../assets/icons/cross-small.svg";

const Navbar = () => {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  function updateInnerWidth() {
    setInnerWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", updateInnerWidth);
    return () => window.removeEventListener("resize", updateInnerWidth);
  });
  return (
    <header className={styles.container}>
      <NavLink exact to="/">
        <img src={logo} alt="Pure Indulgence" />
      </NavLink>
      {innerWidth >= 900 ? (
        <>
          <NavLink
            className={(navData) =>
              navData.isActive
                ? clsx(styles.activeNavLink, styles.fontBodySemiBold)
                : styles.fontBodySemiBold
            }
            exact
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={(navData) =>
              navData.isActive
                ? clsx(styles.activeNavLink, styles.fontBodySemiBold)
                : styles.fontBodySemiBold
            }
            exact
            to="/products"
          >
            Products
          </NavLink>
          <NavLink
            className={(navData) =>
              navData.isActive
                ? clsx(styles.activeNavLink, styles.fontBodySemiBold)
                : styles.fontBodySemiBold
            }
            exact
            to="/about-us"
          >
            About us
          </NavLink>
          <NavLink
            className={(navData) =>
              navData.isActive
                ? clsx(styles.activeNavLink, styles.fontBodySemiBold)
                : styles.fontBodySemiBold
            }
            exact
            to="/testimonial"
          >
            Testimonial
          </NavLink>
          <NavLink
            className={(navData) =>
              navData.isActive
                ? clsx(styles.activeNavLink, styles.fontBodySemiBold)
                : styles.fontBodySemiBold
            }
            exact
            to="/#contact-us"
          >
            Contact us
          </NavLink>
          <NavLink exact to="/cart">
            <img src={shoppingBag} alt="Shopping Bag" />
          </NavLink>
        </>
      ) : (
        <MUIDrawer />
      )}
    </header>
  );
};

const MUIDrawer = () => {
  const [state, setState] = useState(false);

  const toggleDrawer = (isOpen) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState(isOpen);
  };

  const list = () => (
    <section className={styles.list}>
      <Box
        sx={{ width: 250 }}
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        <IconButton onClick={toggleDrawer(false)}>
          {" "}
          <img src={crossSmall} alt="Close" />{" "}
        </IconButton>
        <List>
          <NavLink
            className={(navData) =>
              navData.isActive
                ? clsx(styles.activeNavLink, styles.fontBodySemiBold)
                : styles.fontBodySemiBold
            }
            exact
            to="/"
          >
            <ListItem button>Home</ListItem>
          </NavLink>

          <NavLink
            className={(navData) =>
              navData.isActive
                ? clsx(styles.activeNavLink, styles.fontBodySemiBold)
                : styles.fontBodySemiBold
            }
            exact
            to="/products"
          >
            <ListItem button>Products</ListItem>
          </NavLink>

          <NavLink
            className={(navData) =>
              navData.isActive
                ? clsx(styles.activeNavLink, styles.fontBodySemiBold)
                : styles.fontBodySemiBold
            }
            exact
            to="/about-us"
          >
            <ListItem button>About us</ListItem>{" "}
          </NavLink>

          <NavLink
            className={(navData) =>
              navData.isActive
                ? clsx(styles.activeNavLink, styles.fontBodySemiBold)
                : styles.fontBodySemiBold
            }
            exact
            to="/testimonial"
          >
            <ListItem button>Testimonial</ListItem>
          </NavLink>

          <NavLink
            className={(navData) =>
              navData.isActive
                ? clsx(styles.activeNavLink, styles.fontBodySemiBold)
                : styles.fontBodySemiBold
            }
            exact
            to="/#contact-us"
          >
            <ListItem button>Contact us</ListItem>
          </NavLink>
          <Divider />

          <NavLink exact to="/cart">
            {" "}
            <ListItem button>
              <img src={shoppingBag} alt="Shopping Bag" /> &nbsp; &nbsp;My Cart
            </ListItem>
          </NavLink>
        </List>
      </Box>
    </section>
  );

  return (
    <section className={styles.drawer}>
      <IconButton onClick={toggleDrawer(true)}>
        {" "}
        <img src={menuHamburger} alt="Menu Hamburger" />{" "}
      </IconButton>
      <Drawer anchor="right" open={state} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </section>
  );
};

export default Navbar;
