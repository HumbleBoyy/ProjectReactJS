import { useState, useEffect } from 'react';
import JobListing from './JobListing'
import Spinner from './Spinner';

const JobListings = ({ isHome = false }) => {

  const [jobs, setJobs] = useState([]);
  const [loading, setSloading] = useState(true);

  useEffect(()=> {
      const fetchJobs = async ()=> {
        const apiUrl = isHome ? '/api/jobs?_limit=3' : '/api/jobs'
         try{
          const res = await fetch(apiUrl);
          const data = await res.json();
          setJobs(data)
         }catch(error){
           console.log(error)
         }finally{
          setSloading(false)
         }
      }

      fetchJobs();
  },[null])
  
  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
      <h2 class="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? 'Recent Jobs' : 'Browse Jobs'}
        </h2>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-6">
        {
           loading ? (<Spinner loading={loading}/>) : (
            <>
            {jobs.map((job)=> (
                <>
                  <JobListing key={job.id} job={job}/>
               </>
              ))}
            </>
           )}
        </div>
      </div>
    </section>
  );
};
export default JobListings;
