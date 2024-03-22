import { FilterBar } from "../components/FilterBar";
import { FilterBox } from "../components/FilterBox";
import { ShowCountries } from "../components/ShowCountries";
import { useFetch } from "../hooks/useFetch";

const URL_PREFIX = "https://restcountries.com/v3.1/all";

export const MainContainer = () => {
  const {
    resultados,
    isLoading,
    errors,
    onSubmit,
    onInputChange,
    onInputChangeSelect,
    onClickRegion,
    isButton,
    handleCheckboxChange,
  } = useFetch(URL_PREFIX);

  return (
    <>
      <FilterBar
        resultados={resultados}
        onSubmit={onSubmit}
        onInputChange={onInputChange}
      />
      <div className="filter-main-box">
        <FilterBox
          onInputChangeSelect={onInputChangeSelect}
          isButton={isButton}
          onClickRegion={onClickRegion}
          handleCheckboxChange={handleCheckboxChange}
        />
        <ShowCountries
          isLoading={isLoading}
          errors={errors}
          resultados={resultados}
        />
      </div>
    </>
  );
};
