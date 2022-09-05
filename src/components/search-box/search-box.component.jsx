import './search-box.styles.css';

const SearchBox = ({ placeholder, onChangeHanlder }) => {
  return (
    <div>
      <input
        className='search-box'
        type='search'
        placeholder={placeholder}
        onChange={onChangeHanlder}
      />
    </div>
  );
};

export default SearchBox;
