import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './Layout.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import DoctorList from './components/DoctorList.jsx'
import DoctorProfile from './components/DoctorProfile.jsx'
import DoctorProfileCard from './components/DoctorProfileCard.jsx'
import About from './components/About.jsx'


const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<App/>}/>
      {/* <Route path='/login' element={<Login/>}/> */}
      {/* <Route path='/signup' element={<SignUp/>}/> */}
      {/* <Route path='/about' element={<Contact/>}/> */}
      <Route path='/find-doctor' element={<DoctorProfileCard/>}/>
      <Route path='/about-us' element={<About/>}/>
      {/* <Route path='/room' element={<Room/>}/> */}
      {/* <Route path='/flat' element={<Flats/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/roomdetails' element={<Roomcarousel/>}/>
      <Route path='/video-meeting' element={<VideoCall/>}/>
      <Route path='about' element={<about/>}/> 
      */}

    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
