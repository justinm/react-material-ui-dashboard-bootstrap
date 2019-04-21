import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import LeftNavigation from "./LeftNavigation";
import Header from "./Header";
import { connect } from "react-redux";
import { closeMenu, openMenu } from "../../../app-actions";

const styles = theme => ({
  root: {
    display: "flex"
  },
  toolbar: {
    paddingRight: 24 // keep right padding when drawer closed
  },
  h5: {
    marginBottom: theme.spacing.unit * 2
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    height: "100vh",
    overflow: "auto"
  }
});

class Layout extends React.Component {
  handleDrawerOpen = () => {
    this.props.dispatch(openMenu());
  };

  handleDrawerClose = () => {
    this.props.dispatch(closeMenu());
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <Header
          open={this.props.open}
          onNavigationOpen={this.handleDrawerOpen.bind(this)}
        />
        <LeftNavigation
          open={this.props.open}
          onNavigationClose={this.handleDrawerClose.bind(this)}
        />
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          {this.props.children}
        </main>
      </div>
    );
  }
}

Layout.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired
};

export default connect(state => {
  return {
    open: state.menuOpen
  };
})(withStyles(styles)(Layout));
