import Directory from "../src/components/directory/directory.component";
import { categories } from "../src/components/CategoryData/categoryData";

// https://github.com/Taobal2/online-cloth-shopping.git

function App() {
  return (
    <div>
      <Directory categories={categories} />
    </div>
  );
}

export default App;
