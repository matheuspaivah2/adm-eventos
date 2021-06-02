import { CircularProgress, withStyles } from "@material-ui/core";

export const Container = withStyles({
  root: {
    color: "#64d7ff",
    margin: "0 auto",
    marginTop: "80px",
    minWidth: "80px",
  },
})(CircularProgress);
