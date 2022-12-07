import React from "react";
import "./styles/home.css";
import banner from "./bannerNew.jpg";
import Product from "./Product";
// import "../img/img.jpg";
import hokage from "./hokage.jpg";
import akatsuki from "./akatsuki.jpg";
import sakura from "./sakura.jpg";

function Home() {
  return (
    <div className="home">
      <div className="home-container">
        <img className="home__banner" src={banner} alt=""></img>

        <div className="card-container">
          <Product
            title="Hokage's Cloak"
            des="Buy the Original 7th Hokage's AKA Naruto's Cloak brought you by Salah from Hidden Leaf village"
            price={9999}
            price2=" only"
            ratings={5}
            image={hokage}
          />
          <Product
            title="Akatsuki Essential's"
            des="Buy the Whole New Akatsuki Pack which Includes feary Cloak , Akatsuki's Hat, Sharingan & Rinnegan(not real one) and Exciting Stuff Included"
            price={9999}
            price2=" Few Stocks Left"
            ratings={5}
            image={akatsuki}
          />
          <Product
            title="Trashy Sakura"
            des="Trash guys!! an Absolute Trash ! It have been slacked here since Shinobi Period as a Trash!"
            price={-920}
            price2=" We Pay you for Buying this"
            image={sakura}
          />
        </div>
        <div className="card-container">
          <Product />
          <Product />
        </div>
        <div className="card-container">
          <Product />
          <Product />
          <Product />
        </div>
      </div>
    </div>
  );
}

export default Home;
