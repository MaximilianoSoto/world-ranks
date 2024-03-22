/* eslint-disable react/prop-types */
export const FilterBox = ({
  onInputChangeSelect,
  isButton,
  onClickRegion,
  handleCheckboxChange,
}) => {
  return (
    <>
      <div className="filter-box">
        <label htmlFor="sortBy">Sort by</label>
        <div className="select-container">
          <select
            onChange={onInputChangeSelect}
            className="select-box"
            name="sortBy"
            id="sortBy"
          >
            <option>All countries</option>
            <option value="population">Population</option>
            <option value="zone">Zone</option>
          </select>
          <span className="arrow-dropdown">
            <i className="fa-solid fa-angle-down"></i>
          </span>
        </div>
        <label htmlFor="Region">Region</label>
        <div className="container-button">
          <div className="first-row">
            <button
              className={isButton === "Americas" ? "active" : ""}
              onClick={onClickRegion}
            >
              Americas
            </button>
            <button
              className={isButton === "Antarctic" ? "active" : ""}
              onClick={onClickRegion}
            >
              Antarctic
            </button>
          </div>
          <div className="second-row">
            <button
              className={isButton === "Africa" ? "active" : ""}
              onClick={onClickRegion}
            >
              Africa
            </button>
            <button
              className={isButton === "Asia" ? "active" : ""}
              onClick={onClickRegion}
            >
              Asia
            </button>
            <button
              className={isButton === "Europe" ? "active" : ""}
              onClick={onClickRegion}
            >
              Europe
            </button>
          </div>
          <button
            className={isButton === "Oceania" ? "active third-row" : ""}
            onClick={onClickRegion}
          >
            Oceania
          </button>
        </div>
        <label htmlFor="status">Status</label>
        <div className="checkbox-container">
          <input
            type="checkbox"
            onChange={handleCheckboxChange}
            name="memberOfUsa"
            id="memberOfUsa"
          />
          <label className="label-check" htmlFor="memberOfUsa">
            Member of the United Natios
          </label>
          <input
            type="checkbox"
            onChange={handleCheckboxChange}
            name="independent"
            id="independent"
          />
          <label className="label-check" htmlFor="independent">
            Independent
          </label>
        </div>
      </div>
    </>
  );
};
