import { CiSearch } from "react-icons/ci";
import { createQueryObject } from "../helper/helper";

import styles from "./Search.module.css";

function Search({ search, setSearch, setQuery }) {
  const searchHandler = () => {
    setQuery((query) => createQueryObject(query, { search }));
  };

  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(event) => setSearch(event.target.value.toLowerCase().trim())}
      />
      <button onClick={searchHandler}>
        <CiSearch />
      </button>
    </div>
  );
}

export default Search;
