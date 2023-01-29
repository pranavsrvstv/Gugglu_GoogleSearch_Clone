import React,{useEffect} from 'react'
import {useLocation} from 'react-router-dom';
import ReactPlayer from 'react-player' ;
import Loading from './Loading';
import {useResultContext} from '../contexts/ResultContextProvider';

const Results = () => {
  const {getResults,results,searchTerm,setSearchTerm,isLoading}=useResultContext();
  const location= useLocation();
  useEffect(()=>{
    if(searchTerm){
      if(location.pathname=== '/videos'){
       // getResults(`/search?query=${searchTerm}&gl=us&lr=en&num=10&start=0&sort=relevance`)
      }
      else{
        //getResults(`/${location.pathname}?query=${searchTerm}&gl=us&lr=en&num=10&start=0&sort=relevance`)
      }
    }
  //getResults('/search?query=word%20cup&gl=us&lr=en&num=10&start=0&sort=relevance');
  },[searchTerm,,location.pathname,getResults]);

  if(isLoading) return (<Loading/>);
  console.log(location.pathname);
   switch(location.pathname){
    case '/search':
      return (

        <div className='flex flex-wrap justify-between space-y-6 sm:px-56' >
          
          <div className="sm:px-56 flex flex-wrap justify-between space-y-6">
          {results?.items?.map(({ link, title }, index) => (
            <div key={index} className="md:w-2/5 w-full">
              
              <a href={link} target="_blank" rel="noreferrer">
                <p className="text-sm">{link.length > 30 ? link.substring(0, 30) : link}</p>
                <p className="text-lg hover:underline dark:text-blue-300 text-blue-700  ">{title}</p>
              </a>
            </div>
          ))}
        </div>
        </div>
      );
    case '/images':
        return 'Search';
    case '/news':
        return 'Search';
    case '/videos':
      return 'Search'; 
    default:
      return 'Error';
   }
}

export default Results
