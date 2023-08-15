
import './App.css';
import Notfound from './components/Notfound/Notfound';

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';
import Login from './components/Login/Login';
import Layout from './components/Layout/Layout';




function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path='/' element={<Layout/>}>
        
       
      </Route>
      <Route path = '/login' element={<Login/>}/>
      <Route path ='*' element={<Notfound/>}/>
      </>
    ) 
  )
  return (
    <div className="App">
    {/* //     <Routes>
    //       <Route path='/' element={<Layout/>}>
    //           <Route index element={<MainLayout/>}/>
    //             <Route path='team' element={<Team/>}/>
    //     </Route>
        
    //         <Route path = 'login' element={<SignIn/>}/>
    //         <Route path ='*' element={<Error/>}/>
    //     </Routes> */}
    <RouterProvider router={router}/> 
     </div>
    );
      //  return <FileBasedProvider />

}

export default App;
