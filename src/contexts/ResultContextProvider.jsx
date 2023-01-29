import React,{createContext,useContext,useState} from 'react';
const ResultContext=createContext();
const baseUrl="https://google-search72.p.rapidapi.com";

export const ResultContextProvider=({children})=>{
    const [results,setResults]= useState([]);
    const [isLoading,setIsLoading]=useState(false);
    const [searchTerm,setSearchTerm]=useState("Linkedin");

    const getResults=async(type) =>{
    setIsLoading(true);
    const response=await fetch(`${baseUrl}${type}`,{
    method:'GET',
    headers:{
         
         'X-RapidAPI-Key': '020204b7demsh2752ca8f6255d0fp19a2e5jsn341372b59bab',
         'X-RapidAPI-Host': 'google-search72.p.rapidapi.com'
    },
    }
   
    );
    const data=await response.json();
    console.log(data);
    setResults(data);
    setIsLoading(false);
    };

    return (
        <ResultContext.Provider value={{getResults,results,searchTerm,setSearchTerm,isLoading}}>
           {children}
        </ResultContext.Provider>

    )
}
export const useResultContext= ()=>useContext(ResultContext);