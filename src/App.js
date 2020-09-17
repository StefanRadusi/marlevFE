import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.scss";
import { Header } from "./components/Header";
import { LandingPage } from "./components/pages/LandingPage";
import { Calculator } from "./components/pages/Calculator";
import { MessageContext } from "./components/common/Message/messageContext";
import { Message } from "./components/common/Message";
import { SinglePage } from "./components/pages/SinglePage/SinglePage";
import { AutomatizariPortiBalante } from "./components/pages/Automatizari/AutomatizariPortiBatante/AutomatizariPortiBalante";
import { AutomatizariPortiCulisante } from "./components/pages/Automatizari/AutomatizariPortiCulisante/AutomatizariPortiCulisante";
import { Accesorii } from "./components/pages/Automatizari/Accesorii/Accesorii";
import OferteSavlate from "./components/pages/OferteSalvate";

function App() {
  const [message, setMessage] = React.useState({ text: "", type: "" });

  const handleMessageChange = (message) => {
    setMessage(message);
  };

  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/calculator-oferta/:item" component={Calculator} />
          <Route exact path="/">
            <MessageContext.Provider
              value={(message) => handleMessageChange(message)}
            >
              <LandingPage />
            </MessageContext.Provider>
          </Route>
          <Route
            exact
            path="/automatizari-porti-batante"
            component={AutomatizariPortiBalante}
          />
          <Route
            exact
            path="/automatizari-porti-culisante"
            component={AutomatizariPortiCulisante}
          />
          <Route exact path="/accesorii-automatizari" component={Accesorii} />
          <Route exact path="/panou/:path" component={SinglePage} />
          <Route exact path="/oferte-salvate" component={OferteSavlate} />
        </Switch>
      </Router>
      <Message message={message} />
    </div>
  );
}

export default App;
