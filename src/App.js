import React from "react";
import Header from "./Header";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ProductList from "./ProductList";
import ProductPage from "./ProductPage";
import MyContext, { MyContextComponentProvider } from "./Context";

function App() {
  return (
    <MyContextComponentProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Header />
            <div className="App">
              <main className="content">
                <ProductList />
              </main>
            </div>
          </Route>
          <Route exact path="/product/:id">
            <Header />
            <ProductPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </MyContextComponentProvider>
  );
}

export default App;
