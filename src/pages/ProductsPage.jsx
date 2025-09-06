import { useEffect, useState } from "react";
import Card from "../components/Card";
import Loader from "../components/Loader";
import { useProducts } from "../context/ProductsContext";

import styles from "./ProductsPage.module.css";
import { CiSearch } from "react-icons/ci";
import { TbCategoryMinus } from "react-icons/tb";
import {
  createQueryObject,
  filterProducts,
  getInitialQuery,
  searchProducts,
} from "../helper/helper";
import { useSearchParams } from "react-router";
import Search from "../components/Search";
import Sidebar from "../components/Sidebar";

function ProductsPage() {
  const products = useProducts();

  const [displayed, setDisplayed] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setDisplayed(products);
    setQuery(getInitialQuery(searchParams));
  }, [products]);

  useEffect(() => {
    setSearchParams(query);
    setSearch(query.search || "");
    let filnalProducts = searchProducts(products, query.search);
    filnalProducts = filterProducts(filnalProducts, query.category);
    setDisplayed(filnalProducts);
  }, [query]);

  return (
    <>
      <Search search={search} setSearch={setSearch} setQuery={setQuery} />
      <div className={styles.container}>
        {!displayed.length && <Loader />}
        <div className={styles.products}>
          {displayed.map((product) => (
            <Card key={product.id} data={product} />
          ))}
        </div>
        <Sidebar query={query} setQuery={setQuery} />
      </div>
    </>
  );
}

export default ProductsPage;
