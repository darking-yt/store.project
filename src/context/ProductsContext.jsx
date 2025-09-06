import { createContext, useContext, useEffect, useState } from "react";
import { API } from "../server/config";

const ProductsContext = createContext();

function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(API);
        const json = await response.json();
        setProducts(json);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchProducts();
  }, []);

  return (
    <ProductsContext.Provider value={products}>
      {children}
    </ProductsContext.Provider>
  );
}

const useProducts = () => {
  const product = useContext(ProductsContext);
  return product;
};

const useProductsDeatails = (id) => {
  const product = useContext(ProductsContext);
  const result = product.find((product) => product.id === id);
  return result;
};

export default ProductsProvider;
export { useProducts, useProductsDeatails };
