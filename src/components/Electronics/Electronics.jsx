import { useContext, useEffect } from "react";
import { AppContext } from "../context/AppProvider";
import Loader from "../Loader/Loader";
import ProductsItems from "../Products/ProductsItems";

const Electronics = () => {
    
  const {
    allProducts,
    isLoading,
    filteredProducts,
    query,
    setFilteredProducts,
  } = useContext(AppContext);

  useEffect(() => {
    // Filter products for the Electronic's category
    const ElectronicProducts = allProducts.filter(
      (item) => item.category === "electronics"
    );

    // Filter the Electronic's products based on the search query
    const filteredElectronicProducts = ElectronicProducts.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );

    // Update the filteredProducts state with the result
    setFilteredProducts(filteredElectronicProducts);
  }, [allProducts, query, setFilteredProducts]);

  return (
    <div className="product-category-container">
      <h2>Electronic's Category</h2>

      <div className="product-cart-category">
        {isLoading ? (
          <Loader />
        ) : (
          filteredProducts.map((item) => (
            <ProductsItems key={item.id} item={item} />
          ))
        )}
      </div>
    </div>
  );
};

export default Electronics;
