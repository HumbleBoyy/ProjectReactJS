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
import JobPage, {jobLoader} from './pages/JobPage';
import AddJobPage from './pages/AddJobPage';




const App = () => {
  const addJob = async (newJob) => {
    const res = await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newJob)
    })
    return;
  }
  const routers = createBrowserRouter(
    createRoutesFromElements(
       <Route path='/' element={<MainLayout/>}>
             <Route index element={<HomePage/>}/>
             <Route path='/jobs' element={<JobsPage/>}/>
             <Route path='/add-job' element={<AddJobPage addJobsSubmit={addJob}/>}/>
             <Route path='/job/:id' element={<JobPage/>} loader={jobLoader}/>
             <Route path='*' element={<NotFoundPage/>}/>
       </Route>
    )
  );
  return <RouterProvider router={routers} />;
};

export default App;

