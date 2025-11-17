import ProductName from "./ProductName";
import ProductImage from "./ProductImage";
import ProductPrice from "./ProductPrice";

function ProductCard(props) {
    return (
        <div className="card">
            <ProductImage image={props.image} />
            <ProductName name={props.name} />
            <ProductPrice price={props.price} />

            <p className={props.inStock ? "instock" : "outstock"}>
                {props.inStock ? "In Stock" : "Out of Stock"}
            </p>
        </div>
    );
}

export default ProductCard;
