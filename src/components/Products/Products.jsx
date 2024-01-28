import ProductCategories from "./ProductCategories/ProductCategories";
import ProductsFilter from "./ProductFilters/ProductsFilter";
import ProductsCart from "./ProductsCart";

const Products = () => {
  return (
    <div className="products">
      <ProductCategories />

      <div className="title">
        <h2>ALL PRODUCTS</h2>
      </div>
      
      <ProductsFilter />

      <selection className="shop">
        <div className="shop-container">
          <div className="product-cart">
            <ProductsCart />
            <ProductsCart />
            <ProductsCart />
          </div>
        </div>
      </selection>
    </div>
  );
};

export default Products;
