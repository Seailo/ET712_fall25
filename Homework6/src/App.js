//imports//

import "./App.css";
import ProductCard from "./components/ProductCard";
//products// 

import Ball from "./components/images/ball.png";
import Batman from "./components/images/batman.png";
import Cable from "./components/images/cable.png";
import Headphones from "./components/images/headphones.png";
import Lamp from "./components/images/lamp.png";
import Mat from "./components/images/mat.png";
import Mouse from "./components/images/mouse.png";
import Speaker from "./components/images/speaker.png";
import Stand from "./components/images/stand.png";
import Wand from "./components/images/wand.png";

function App() {

const products = [
  { name: "Ball", image: Ball, price: 10.99, inStock: true },
  { name: "Batman Toy", image: Batman, price: 14.99, inStock: false },
  { name: "Cable", image: Cable, price: 6.99, inStock: true },
  { name: "Headphones", image: Headphones, price: 29.99, inStock: true },
  { name: "Lamp", image: Lamp, price: 19.99, inStock: false },
  { name: "Yoga Mat", image: Mat, price: 12.99, inStock: true },
  { name: "Mouse", image: Mouse, price: 15.99, inStock: true },
  { name: "Speaker", image: Speaker, price: 39.99, inStock: true },
  { name: "Stand", image: Stand, price: 22.99, inStock: false },
  { name: "Magic Wand", image: Wand, price: 8.99, inStock: true },
];


    return (
        <div className="product-grid">
            {products.map((item, index) => (
                <ProductCard
                    key={index}
                    name={item.name}
                    price={item.price}
                    image={item.image}
                    inStock={item.inStock}
                />
            ))}
        </div>
    );
}

export default App;
