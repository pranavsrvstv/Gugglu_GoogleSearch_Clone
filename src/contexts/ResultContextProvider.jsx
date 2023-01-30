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
         
        'X-RapidAPI-Key': 'e21db2f5a5msha3239565e07944ep1d6363jsnf52184dff56c',
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