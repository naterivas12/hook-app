import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [state, setState] = useState({
    data:null,
    isLoading:true,
    hasError:null
  })

  const getFetch = async() => {

    const resp = await fetch(url);
    const data = await resp.json();
    
    setState({
      data,
      isLoading:false,
      hasError:null
    })
  }

  const fetchData = () => {
    // Llama a la función getFetch para realizar una nueva solicitud a la misma URL.
    getFetch();
  };

  useEffect(() => {
    getFetch();
  }, [url])
  
  
  return{
    data:       state.data,
    isLoading:  state.isLoading,
    hasError:   state.hasError,
    fetchData
  } ;
}
