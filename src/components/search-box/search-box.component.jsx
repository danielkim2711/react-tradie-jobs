import './search-box.styles.css';

const SearchBox = ({ placeholder }) => {
  return (
    <div>
      <input className='search-box' type='search' placeholder={placeholder} />
    </div>
  );
};

export default SearchBox;
