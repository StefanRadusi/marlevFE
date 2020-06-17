import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.scss";
import { Header } from "./components/Header";
import { LandingPage } from "./components/pages/LandingPage";
import { Calculator } from "./components/pages/Calculator";
import {MessageContext} from "./components/common/Message/messageContext";
import {Message} from "./components/common/Message";
import {SinglePage} from "./components/pages/SinglePage/SinglePage";


function App() {
  const [message, setMessage] = React.useState({text: "", type: ""});

  const handleMessageChange = (message) => {
    setMessage(message);
  };

  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/calculator">
            <Calculator />
          </Route>
          <Route exact path="/">
            <MessageContext.Provider value={(message) => handleMessageChange(message)}>
            <LandingPage />
            </MessageContext.Provider>
          </Route>
          <Route exact path="/:path" component={SinglePage} />
        </Switch>
      </Router>
      <Message message={message}/>
    </div>
  );
}

export default App;
