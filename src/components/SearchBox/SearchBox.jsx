import css from "./SearchBox.module.css";

const SearchBox = ({ filterText, setFilterText }) => {
  return (
    <div className={css.searchBox}>
      <p>Find contacts by name {filterText}</p>
      <input
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
        type="text"
        className={css.searchBoxInput}
      />
    </div>
  );
};

export default SearchBox;
