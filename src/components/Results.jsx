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
       getResults(`/search?query=${searchTerm}&gl=us&lr=en&num=10&start=0&sort=relevance`)
      }
      else{
        getResults(`${location.pathname}?query=${searchTerm}&gl=us&lr=en&num=10&start=0&sort=relevance`)
      }
    }
  },[searchTerm,,location.pathname]);

  if(isLoading) return (<Loading/>);
  console.log(location.pathname);
   switch(location.pathname){
    case '/search':
      return (

        <div className='flex flex-wrap justify-center items-center' >
          
          <div className="sm:px-56 flex flex-wrap justify-between items-start space-y-6">
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
    case '/imagesearch':
      return (
        <div className='flex flex-wrap '>
          {results?.items?.map(({title,thumbnailImageUrl,contextLink}, index) => (
           <a  className="sm:p-3 p-5" href={contextLink} key={index} target="_blank" rel="noreferrer">
            <img src={thumbnailImageUrl} alt={title} loading="lazy" />
            <p className='width-36 break-words '></p>
           </a>
          ))}
          
        </div>

      );
    case '/news':
        return 'Search';
    case '/videos':
      return 'Search'; 
    default:
      return 'Error';
   }
}

export default Results
