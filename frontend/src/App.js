import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPg from "./pages/LoginPg";
import Profile from "./components/Profile/profile";
import ProfilePg from "./pages/Profile";
import Admission from "./pages/Admission";
import { Signup } from "./components/Signup/Signup";
import SignupPg from "./pages/Signuppg";
import AdminClassRoutine from "./pages/AdminClassRoutine";
import {COPage, SingleCourse, Cart, Courses} from "./components/Courses/pages";


function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<LoginPg/>}/>
        <Route path="/profile" element={<ProfilePg/>}/>
        <Route path="/admission" element={<Admission/>}/>
        <Route path="/signup" element={<SignupPg/>}/>
        <Route path="/newroutine" element={<AdminClassRoutine/>}/>
        <Route path="/Cou" element={<COPage/>}/>

        <Route path="/courses/:id" element={<SingleCourse />} />
        <Route path="/category/:category" element={<Courses />} />
        <Route path="/cart" element={<Cart />} />





      </Routes>   
    </BrowserRouter>
    );
}

export default App;
