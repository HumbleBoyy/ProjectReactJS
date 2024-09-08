import { useState, useEffect } from 'react';
import JobListing from './JobListing'
import Spinner from './Spinner';
import jobs from "../jobs.json"
const JobListings = ({ isHome = false }) => {

  const jobListings = isHome ? jobs.jobs.slice(0, 3) : jobs;
  
  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
      <h2 class="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? 'Recent Jobs' : 'Browse Jobs'}
        </h2>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-6">
              {jobListings.map((job)=> (
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
