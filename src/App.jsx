import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';


const routers = createBrowserRouter(
  createRoutesFromElements(
     <Route path='/' element={<MainLayout/>}>
           <Route index element={<HomePage/>}/>
           <Route path='/jobs' element={<JobsPage/>}/>
           <Route path='*' element={<NotFoundPage/>}/>
     </Route>
  )
);

const App = () => {
  return <RouterProvider router={routers} />;
};

export default App;

