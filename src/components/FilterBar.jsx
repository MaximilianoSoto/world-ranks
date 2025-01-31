/* eslint-disable react/prop-types */
export const FilterBar = ({ resultados, onSubmit, onInputChange }) => {
  return (
    <>
      <div className="search-countries-box">
        <h1>Found {resultados.length} Countries</h1>
        <form onSubmit={onSubmit}>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="icon-search"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
          <input
            name="search"
            onChange={onInputChange}
            placeholder="Search By Name, Region, Subregion"
          />
        </form>
      </div>
    </>
  );
};
