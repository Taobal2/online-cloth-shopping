import { categories } from "../CategoryData/categoryData";
import CategoryItem from "../Category-items/category-item.component";
import "./directory.style.scss";

const Directory = () => {
  return (
    <div className="directory__container">
      {categories.map((category) => (
        <CategoryItem category={category} key={category.id} />
      ))}
    </div>
  );
};

export default Directory;
