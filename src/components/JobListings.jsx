import { useState, useEffect } from 'react';
import JobListing from './JobListing'
import Spinner from './Spinner';
import jobs from "../jobs.json"
const JobListings = () => {

  const recentJobs = jobs.jobs.slice(0, 3)
  
  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
      <div class="grid grid-cols-2 md:grid-cols-3 gap-6">
              {recentJobs.map((job)=> (
                <>
                  <JobListing key={job.id} job={job}/>
               </>
              ))}

        </div>
      </div>
    </section>
  );
};
export default JobListings;
