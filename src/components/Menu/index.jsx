import { AppBar, Toolbar } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { Logo, ButtonMenu, Hamburg, Vl, Container } from "./styles";
import { makeStyles } from "@material-ui/core/styles";

const Menu = () => {
  const history = useHistory();

  const sendTo = (path) => {
    history.push(path);
  };

  const useStyles = makeStyles((theme) => ({
    toolbar: {
      backgroundColor: "#130707",
      width: "90%",
      height: "5vh",
      margin: "0 auto",
      maxWidth: "1500px",
    },
    appbar: {
      backgroundColor: "#130707",
      boxSizing: "borderbox",
    },
  }));

  const classes = useStyles();

  return (
    <AppBar
      position="static"
      className={classes.appbar}
      fontWeight="fontWeightBold"
    >
      <Toolbar className={classes.toolbar}>
        <Logo htmlFor="" onClick={() => sendTo("/")}>
          TheBeers
        </Logo>
        <Container>
          <Hamburg />

          <ButtonMenu onClick={() => sendTo("/")}>Catalog</ButtonMenu>
          <Vl />
          <ButtonMenu onClick={() => sendTo("/casamento")}>Wedding</ButtonMenu>
          <ButtonMenu onClick={() => sendTo("/formatura")}>
            Graduation
          </ButtonMenu>
          <ButtonMenu onClick={() => sendTo("/confraternizacao")}>
            Confraternization
          </ButtonMenu>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Menu;
