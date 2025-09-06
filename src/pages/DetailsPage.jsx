import { Link, useParams } from "react-router";
import { useProductsDeatails } from "../context/ProductsContext";
import { shortenText } from "../helper/helper";

import Loader from "../components/Loader";

import { TbCategory } from "react-icons/tb";
import { CiDollar } from "react-icons/ci";
import { IoIosArrowRoundBack } from "react-icons/io";

import styles from "./DetailsPage.module.css";

function DetailsPage() {
  const { id } = useParams();

  const products = useProductsDeatails(+id);
  console.log(products);

  if (!products) return <Loader />;

  return (
    <div className={styles.container}>
      <img src={products.image} alt={products.title} />
      <div className={styles.information}>
        <h3 className={styles.title}>{shortenText(products.title)}</h3>
        <p className={styles.description}>{products.description}</p>
        <p className={styles.category}>
          <TbCategory />
          {products.category}
        </p>
        <div>
          <span className={styles.price}>
            <CiDollar />
            {products.price} $
          </span>
          <Link to={"/products"}>
            <IoIosArrowRoundBack />
            <span>Back to shop</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;
