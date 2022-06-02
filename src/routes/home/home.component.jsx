import Directory from "../../components/directory/directory.component";
import { categories } from "../../components/CategoryData/categoryData";

// https://github.com/Taobal2/online-cloth-shopping.git

function Home() {
  return (
    <div>
      <Directory categories={categories} />
    </div>
  );
}

export default Home;
