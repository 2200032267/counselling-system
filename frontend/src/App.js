import { Route,Routes } from 'react-router-dom';
import Header from './Components/Header';
import React from 'react';
import SignIn from './Components/SignIn'
import SignUp from './Components/SignUp'
import Visitor from './Components/Visitor'
import Counsellor from './Components/Counsellor'
import Appointment from './Components/Appointment'
import Home from './Components/Home'
import Aboutus from './Components/Aboutus'
import ContactForm from './Components/ContactForm'
import FetchRegistrations from './Components/FetchRegistrations'

function App()
{
  return <React.Fragment>
    <Header>
      <Header/>
    </Header>
    <main>
      <Routes>
        <Route path="/" element={<Home/>} exact/>
        <Route path="/SignUp" element={<SignUp/>}exact/>
        <Route path="/SignIn" element={<SignIn/>}exact/>
        <Route path="/Visitor" eleme nt={<Visitor/>}exact/>
        <Route path="/Counsellor" element={<Counsellor/>}exact/>
        <Route path="/Appointment" element={<Appointment/>}exact/>
        <Route path="/Aboutus" element={<Aboutus/>}exact/>
        <Route path="/ContactForm" element={<ContactForm/>}exact/>
        <Route path="/FetchRegistrations" element={<FetchRegistrations/>}exact/>

        
      </Routes>
    </main>
  </React.Fragment>
}

export default App;