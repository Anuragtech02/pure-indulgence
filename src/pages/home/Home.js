import { useState } from "react";
import { styled } from "@mui/system";
import PropTypes from "prop-types";
import { Tabs, Tab, Typography, Box } from "@mui/material";
import styles from "./Home.module.scss";
import clsx from "clsx";
import rightPlaceholderImage from "../../assets/images/rightPlaceholderImage.svg";
import leftPlaceholderImage from "../../assets/images/leftPlaceholderImage.svg";
import { Button } from "@mui/material";

const Home = () => {
  return (
    <div className={styles.container}>
      <section className={styles.gradientContainer}>
        <section className={styles.heroContainer}>
          <article className={styles.textContainer}>
            <h1 className={styles.fontTitle}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum,
              perspiciatis.
            </h1>
            <br />
            <p className={styles.fontBody}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
              molestias tempora voluptatem, officia vel ut id nostrum quibusdam
              dicta odit?
            </p>
            <br />
            <Button>Explore Products</Button>
          </article>
          <div className={styles.imageContainer}>
            <img src={rightPlaceholderImage} alt="Place Holder" />
          </div>
        </section>
        <section className={styles.secondHeroContainer}>
          <div className={styles.imageContainer}>
            <img src={leftPlaceholderImage} alt="Place Holder" />
          </div>
          <article className={styles.textContainer}>
            <h2 className={clsx(styles.fontSubtitle, styles.fontUppercase)}>
              About Us
            </h2>
            &nbsp;
            <h1 className={styles.fontTitle}>
              Perfect solution for your Business
            </h1>
            <br />
            <p className={styles.fontBody}>
              Creating a very beautiful website design in accordance with the
              fundamental user experience which is examined more deeply by the
              UX Designers that we have. And make good visuals so that clients
              are satisfied and easy when viewing the website. First impressions
              are our tricks to attract a customer who has seen the website that
              we are going to create
            </p>
            <br />
          </article>
        </section>
      </section>
      <section className={styles.tabsContainer}>
        <h1 className={styles.fontTitle}>Featued Products</h1>
        <MUITabs />
      </section>
    </div>
  );
};

const MUITabs = () => {
  const TabPanel = (props) => {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  };

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const TabsStyled = styled((props) => (
    <Tabs
      {...props}
      TabIndicatorProps={{
        children: <span className="MuiTabs-indicatorSpan" />,
      }}
    />
  ))({
    borderRadius: "15px",
    backgroundColor: "#33CC0029",
    "& .MuiTabs-indicator": {
      display: "flex",
      justifyContent: "center",
      backgroundColor: "#33cc00",
    },
  });
  const TabStyled = styled((props) => <Tab {...props} />)(({ theme }) => ({
    textTransform: "none",
    fontFamily: "Hellix-Bold",
    fontWeight: 200,
    fontSize: "17px",
    marginRight: "10px",
    color: "#4A4A4A",
    "&.Mui-selected": {
      color: "#333333",
    },
    "&.Mui-focusVisible": {
      backgroundColor: "rgba(100, 95, 228, 0.32)",
    },
  }));
  const TabPanelStyled = styled(TabPanel)``;
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <TabsStyled
          variant="fullWidth"
          centered
          scrollButtons
          allowScrollButtonsMobile
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <TabStyled label="Almonds" {...a11yProps(0)} />
          <TabStyled label="Cashew" {...a11yProps(1)} />
          <TabStyled label="Pistachio" {...a11yProps(2)} />
          <TabStyled label="Dates" {...a11yProps(3)} />
        </TabsStyled>
      </Box>
      <TabPanelStyled value={value} index={0}>
        Item One
      </TabPanelStyled>
      <TabPanelStyled value={value} index={1}>
        Item Two
      </TabPanelStyled>
      <TabPanelStyled value={value} index={2}>
        Item Three
      </TabPanelStyled>
      <TabPanelStyled value={value} index={3}>
        Item Four
      </TabPanelStyled>
    </Box>
  );
};

export default Home;
