import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import theme from "./components/common/themes/light";
import Layout from "./components/common/layout/Layout";
import store from "./store";
import { Redirect, Route, Switch } from "react-router";
import Dashboard from "./components/common/dashboard/Dashboard";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <Router>
            <Switch>
              <Redirect exact from="/" to="/dashboard" />
              <Layout>
                <Switch>
                  <Route path="/dashboard" component={Dashboard} />
                </Switch>
              </Layout>
            </Switch>
          </Router>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
