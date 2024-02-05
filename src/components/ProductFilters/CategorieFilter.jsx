import Select from 'react-select'
import { useContext } from "react";
import { AppContext } from "../context/AppProvider";

const CategorieFilter = () => {
  const { allProducts,selectedCategory, setSelectedCategory } = useContext(AppContext);



  const categories = Array.from(new Set(allProducts.map((res) => res.category)));

  const categoryOptions = categories.map((category) => ({
    value: category,
    label: category
  }));

  return (
    <Select
    options={categoryOptions}
    isClearable
    placeholder="Select a category"
    onChange={(selectOption) => setSelectedCategory(selectOption)}
    value={selectedCategory}
  />
  );
};

export default CategorieFilter;