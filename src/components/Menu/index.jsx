import { AppBar, Toolbar, MenuItem } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { Logo } from "./styles";
import { makeStyles } from "@material-ui/core/styles";

const Menu = ({ isValidated, setIsValidated }) => {
  const history = useHistory();

  const sendTo = (path) => {
    history.push(path);
  };

  const useStyles = makeStyles((theme) => ({
    bt__Right: {
      marginLeft: "auto",
    },
    toolbar: {
      backgroundColor: "#130707",
      width: "65%",

      boxSizing: "borderbox",
      margin: "0 auto",
    },
    appbar: {
      backgroundColor: "#130707",
      boxSizing: "borderbox",
    },
    bt: {
      color: "#F66A98",
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
        <MenuItem onClick={() => sendTo("/")} className={classes.bt__Right}>
          Catálogo
        </MenuItem>
        <MenuItem onClick={() => sendTo("/casamento")}>Casamento</MenuItem>
        <MenuItem onClick={() => sendTo("/formatura")}>Formatura</MenuItem>
        <MenuItem onClick={() => sendTo("/confraternizacao")}>
          Confraternização
        </MenuItem>
      </Toolbar>
    </AppBar>
  );
};

export default Menu;
