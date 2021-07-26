const Header = ({ handleSearch, search, setSearch }) => {
  return (
    <header>
      <h2>This is a header</h2>
      <p>Yo aaaa</p>
      <form onSubmit={handleSearch}>
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          required
        />
        <button>Search</button>
      </form>
    </header>
  );
};

export default Header;
