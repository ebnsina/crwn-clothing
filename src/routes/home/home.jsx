import Directory from "../../components/directory/directory.component";
import { categories } from "../../data/category";

const Home = () => {
  return <Directory categories={categories} />;
};

export default Home;
