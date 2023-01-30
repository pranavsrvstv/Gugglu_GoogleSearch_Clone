import React from 'react'
import {BrowserRouter,Routes,Route,Navigate,useRoutes} from 'react-router-dom';
import Results from './Results';
import Search from './Search';
function MyRoutes() {
  const element = <Results/>;
 
  return (
    <div className='p-4'>
      {/* {useRoutes(['/search','/imagesearch'].map(path => ({path, element})))} */}
      <Routes>
            {/* Dashboard */}
               <Route path='/'  element={<Navigate to="/search" replace />} />   
              <Route path='/search'  element={<Results/>} />   
              <Route path='/imagesearch'  element={<Results/>} />   
              
              
      </Routes>
    </div>
  );
}

export default MyRoutes

 