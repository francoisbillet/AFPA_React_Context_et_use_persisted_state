import React from "react";
import { Link, useHistory } from "react-router-dom";
import MyContext from "./Context";

const Header = () => {
  //   let history = useHistory();
  const { cart } = React.useContext(MyContext);

  return (
    <header>
      <nav>
        <Link to="/">Accueil</Link>
        {/* éviter d'utiliser goBack() de history car si on part de google, on retourne à google */}
        {/* <button onClick={() => history.goBack()}>Accueil</button> */}
        <p>Cart : {cart.length}</p>
      </nav>
    </header>
  );
};

export default Header;
