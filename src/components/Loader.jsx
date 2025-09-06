import { CircleLoader } from "react-spinners";

import styles from "./Loader.module.css";

function Loader() {
  return (
    <div className={styles.loader}>
      <CircleLoader color="#fe5d42" size={200} />
    </div>
  );
}

export default Loader;
