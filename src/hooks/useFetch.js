import { useEffect, useState } from "react"


export const useFetch = (url) => {
    const [state, setState] = useState({
        allCountries: [],
        resultados: [],
        isButton: '',
        isLoading: true,
        errors: null
    })

    
    const fetchAllCountrie = async () => {
        try{
            const res = await fetch(url)
            const data = await res.json()
            
            setState({
                allCountries: data,
                resultados: data,
                isLoading: false,
                errors: null
            })
            
        }catch(error){
            setState({
                data: null,
                isLoading:false,
                errors: error
            })
        }
    }
    
    useEffect( () => {
        if(!url) return
        fetchAllCountrie()
    },[url])
    
    const {allCountries,isButton, resultados, isLoading, errors} = state
    
    const onSubmit = (event) => {
        event.preventDefault();
    };

    
    const onInputChange = ({ target }) => {
        const search = target.value;
        const paísesFiltrados = allCountries.filter((pais) =>
          pais.name.common.toLowerCase().includes(search.toLowerCase()) ||
          pais.region.toLowerCase().includes(search.toLowerCase())
        );
        setState(prevState => ({
            ...prevState,
            resultados:paísesFiltrados
        }))
    };


    const onInputChangeSelect = ({ target }) => {
        const resultado = target.value;

        if (resultado === "population") {
            const paísesFiltradosPorPopulation = allCountries.slice().sort((a, b) => b.population - a.population); 
            
            setState(prevState => ({
                ...prevState,
                resultados: paísesFiltradosPorPopulation
            }));

        } else {
            const paísesFiltradosPorZona = allCountries.slice().sort((a, b) => a.region.localeCompare(b.region)); 
            
            setState(prevState => ({
                ...prevState,
                resultados: paísesFiltradosPorZona
            }));
        }
    };

    const onClickRegion = ({ target }) => {
        const option = target.textContent;

    
        if (allCountries.region === option) {
            const paísesFiltradosPorRegion = allCountries.filter((item)=> item.region !== option)
          
            setState(prevState => ({
                ...prevState,
                resultados: paísesFiltradosPorRegion,
                isButton: ''
            }));

        } else {
          
          const paísesFiltradosPorRegion = allCountries.filter((pais) =>
          pais.region.toLowerCase().includes(option.toLowerCase())
        );

        setState(prevState => ({
            ...prevState,
            resultados: paísesFiltradosPorRegion,
            isButton: option
        }))
        }
      };

      const handleCheckboxChange = (event) => {

        
        const valorDelCheckbox = event.target.checked;
        const nombreDelCheckbox = event.target.name;
    
        if (valorDelCheckbox) {
    
          if (nombreDelCheckbox === "memberOfUsa") {
            const paisFiltradoPorMemberOfUsa = allCountries.filter((item)=> item.unMember == true)
            
            setState(prevState => ({
                ...prevState,
                resultados: paisFiltradoPorMemberOfUsa,
            }))
           
          } else {
            const paisFiltradoPorIndependent = allCountries.filter((item)=> item.independent == true)

            setState(prevState => ({
                ...prevState,
                resultados: paisFiltradoPorIndependent,
            }))
          }
          
        } else {
          if (nombreDelCheckbox === "memberOfUsa") {
            const paisFiltradoPorMemberOfUsa = allCountries.filter((item)=> item.unMember !== true)
            
            setState(prevState => ({
                ...prevState,
                resultados: paisFiltradoPorMemberOfUsa,
            }))

          } else {
            const paisFiltradoPorIndependent = allCountries.filter((item)=> item.independent !== true)

            setState(prevState => ({
                ...prevState,
                resultados: paisFiltradoPorIndependent,
            }))
          }
        }
      };


    

    return {
        resultados, isLoading,isButton, errors,onSubmit,onInputChange, onInputChangeSelect,onClickRegion,handleCheckboxChange
    }
    
  
}
