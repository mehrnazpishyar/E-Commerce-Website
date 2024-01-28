import { categoryData } from "../../constants";
import CategoriesCard from "./CategoriesCard";

const Categories = () => {
  return (
    <div className="categories">
      <div className="title">
        <h2>Categories</h2>
      </div>
      <div className="categories-container container">
        {categoryData.map((category) => (
          <CategoriesCard key={category.title} {...category} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
