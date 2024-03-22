/* eslint-disable react/prop-types */
export const ShowCountries = ({ isLoading, errors, resultados }) => {
  return (
    <aside className="show-countries">
      <table className="table-thead">
        <thead>
          <tr>
            <th className="th-flag">Flag</th>
            <th className="th-name">Name</th>
            <th className="th-population">Population</th>
            <th className="th-area">Area</th>
            <th className="th-region">Region</th>
          </tr>
        </thead>
      </table>
      <hr className="hr" />
      <div className="scrollback">
        <table className="table-tbody">
          <tbody>
            <tr>
              {isLoading ? (
                <td colSpan="5">Cargando...</td>
              ) : errors ? (
                <td colSpan="5">Se produjo un error</td>
              ) : (
                resultados &&
                resultados.map((pais, index) => (
                  <tr key={index}>
                    <td className="td-flag">
                      <img
                        className="td-flag-img"
                        src={pais.flags.svg}
                        alt="imagen del pais"
                      />
                    </td>
                    <td className="td-name">{pais.name.common}</td>
                    <td className="td-population">
                      {pais.population.toLocaleString()}
                    </td>
                    <td className="td-area">
                      {pais.area
                        ? pais.area.toLocaleString() + " km²"
                        : "No especificada"}
                    </td>
                    <td className="td-region">{pais.region}</td>
                  </tr>
                ))
              )}
            </tr>
          </tbody>
        </table>
      </div>
    </aside>
  );
};
