import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card.jsx";
import Cart from "./components/Cart.jsx";
import data from "./data.json"; //No need for JSON.parse(), it seems ES6 automatically converts from json to js for us

function App() {
  const [items, setItems] = useState([
    {
      amount: 1,
      product: {
        image: {
          thumbnail: "./src/assets/images/image-waffle-thumbnail.jpg",
          mobile: "/src/assets/images/image-waffle-mobile.jpg",
          tablet: "./src/assets/images/image-waffle-tablet.jpg",
          desktop: "./src/assets/images/image-waffle-desktop.jpg",
        },
        name: "Waffle with Berries",
        category: "Waffle",
        price: 6.5,
      },
    },
    {
      amount: 3,
      product: {
        image: {
          thumbnail: "./src/assets/images/image-panna-cotta-thumbnail.jpg",
          mobile: "./src/assets/images/image-panna-cotta-mobile.jpg",
          tablet: "./src/assets/images/image-panna-cotta-tablet.jpg",
          desktop: "./src/assets/images/image-panna-cotta-desktop.jpg",
        },
        name: "Vanilla Panna Cotta",
        category: "Panna Cotta",
        price: 6.5,
      },
    },
  ]); // cart items!

  // data.map( ()=> <Card/> ) // arrow function w/o {} doesn't need to use return
  // data.map( ()=> { return <Card/>}) // arrow function with {} must use return

  /**
   * Add to the items state inside the App.jsx
   */
  function addToCart(data) {
    const item = {
      amount: 1,
      product: data,
    };

    setItems((prev) => {
      return [...prev, item];
    });
  }

  function deleteCartItem(item) {
    const newItems = items.filter((cartItem) => {
      return cartItem != item;
    });
    setItems(newItems);
  }

  return (
    <>
      <div className="app">
        <h1 className="app__title">Desserts</h1>
        {data.map((elem, index) => {
          return (
            <Card
              data={elem}
              key={index}
              addToCart={addToCart}
              inCart={items.product.name}
            />
          );
        })}
      </div>
      <Cart items={items} deleteCartItem={deleteCartItem} />
    </>
  );
}

export default App;