import "./App.css";
import ProductCard from "./components/ProductCard";

function App() {

    const products = [
        { name: "Basketball", price: 29.99, image: "/images/ball.png", inStock: true },
        { name: "Magic Wand", price: 19.99, image: "/images/wand.png", inStock: false },
        { name: "Batman Toy", price: 14.99, image: "/images/batman.png", inStock: true },
        { name: "Headphones", price: 49.99, image: "/images/headphones.png", inStock: true },
        { name: "Laptop Stand", price: 39.99, image: "/images/stand.png", inStock: false },
        { name: "LED Lamp", price: 24.99, image: "/images/lamp.png", inStock: true },
        { name: "Desk Mat", price: 12.99, image: "/images/mat.png", inStock: true },
        { name: "USB-C Cable", price: 9.99, image: "/images/cable.png", inStock: true },
        { name: "Gaming Mouse", price: 59.99, image: "/images/mouse.png", inStock: false },
        { name: "Bluetooth Speaker", price: 79.99, image: "/images/speaker.png", inStock: true }
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
