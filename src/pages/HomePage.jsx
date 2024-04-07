import React from 'react'
import Banner from '../components/Banner'
import HomeCards from '../components/Homecards'
import JobListings from '../components/JobListings'
import ViewAllJobs from '../components/ViewAllJobs'


const HomePage = () => {
  return (
    <>
        <Banner/>
        <HomeCards/>
        <JobListings isHomePage = {true}/>
        <ViewAllJobs/>
    </>
  )
}

export default HomePage