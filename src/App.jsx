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
import EditJobPage from './pages/EditJobPage';




const App = () => {

  // ADD new job
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

  //DELETE Job
  const deleteJob = async (id)=> {
     const res = await fetch(`/api/jobs/${id}`, {
       method: 'DELETE',
     });
     return;
  }

  // Edit Job

  const updateJob = async (job) =>{
     const res = await fetch(`/api/jobs/${job.id}`, {
       method: 'PUT',
       headers: {
        'Content-Type': 'application/json',
       },
       body: JSON.stringify(job)
     })

     return;
  }
  const routers = createBrowserRouter(
    createRoutesFromElements(
       <Route path='/' element={<MainLayout/>}>
             <Route index element={<HomePage/>}/>
             <Route path='/jobs' element={<JobsPage/>}/>
             <Route path='/add-job' element={<AddJobPage addJobsSubmit={addJob}/>}/>
             <Route path='/job/:id' element={<JobPage deleteJob={deleteJob}/>}  loader={jobLoader}/>
             <Route path='/edit-job/:id' element={<EditJobPage updateJobSubmit={updateJob}/>}  loader={jobLoader}/>
             <Route path='*' element={<NotFoundPage/>}/>
       </Route>
    )
  );
  return <RouterProvider router={routers} />;
};

export default App;

