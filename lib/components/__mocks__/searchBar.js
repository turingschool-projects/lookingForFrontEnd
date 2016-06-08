const searchBar = jest.genMockFromModule('../searchBar');

function __setMockSearchBar() {
  return (
    <div className="search-bar">
      <input type='text' />
      <Button type="submit">Submit</Button>
    </div>
  );
}

searchBar.__setMockSearchBar = __setMockSearchBar;
