import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Signup from './signup/signup';
import AdminInterface from './components/adminInterface'
import UserLoggedInDetails from './components/userLoggedInDetails'
import Validrecords from './components/views/validrecords'
import FormC from "./components/FormC";
import Phonesignup from "./Phonesignup";
import RecordList from "./components/views/recordList"

import "./App.css";

function App() {
  return (
<BrowserRouter>
      <Routes> 
        <Route path="/jiUjibb" exact element={<Login/>} />
        <Route path="/jiUjibb" element={< Signup/>} />
        <Route path="/jiUjibb" element={<AdminInterface/>}/>
        <Route path="/jiUjibb" element={<UserLoggedInDetails/>}/>
         <Route path="/jiUjibb" element={<Validrecords/>}/>
         <Route path="/jiUjibb" element={<FormC/>}/>
         <Route path="/jiUjibb" element={<Phonesignup/>}/>
         <Route path="/jiUjibb" element={<Validrecords/>}/>
         <Route path="/jiUjibb" element={<RecordList/>}/>


      </Routes>
    </BrowserRouter>
  );
}

export default App;
