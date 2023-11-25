import React from "react";
//import "../css/Signup.css";
import { useState } from "react";
import {useRegisterUserMutation} from '../../rtkq/services/userAuthApi'
import { storeToken } from '../../rtkq/services/localStorageService';



export const Signup = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);

  const [registerUser,{isLoading}] = useRegisterUserMutation()

  const toggle = () => {
    setShowPassword(!showPassword);
  };

  
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const data = new FormData(e.currentTarget);
  //   const actualData = {
  //     first_name: data.get('first_name'),
  //     last_name: data.get('last_name'),
  //     email: data.get('email'),
  //     // phone: data.get('phone'),
  //     role: data.get('role'),
  //     password: data.get('password'),
  //     password2: data.get('password2'),
    
  //   }

  //   const res = await registerUser(actualData)
    
  //   if (res.data){
  //     storeToken(res.data.token)
  //     // navigate('/dashboard')
  //   }
  // }


  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      first_name: data.get('first_name'),
      last_name: data.get('last_name'),
      email: data.get('email'),
      role: data.get('role'),
      password: data.get('password'),
      password2: data.get('password2'),
    }
  
    try {
      const res = await registerUser(actualData);
      
      if (res.data) {
        storeToken(res.data.token);
        console.log(res.data);
      }
    } catch (error) {
      console.error('API Request Error:', error);
      // Handle the error, e.g., display an error message to the user.
    }
  }
  


  return (
    <>
      <section className="signup"  style={{ minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="container mt-5">
          <div className="signup-content">
            <div className="signup-form"></div>
            <h2>Approve New Account</h2>
            
            <form className="register-form" id="register-form" onSubmit={handleSubmit}>
              {/* First Name */}
              <div className="signup-form-group">
                <label htmlFor="firstname"></label>
                <input
                  type="text"
                  name="first_name"
                  id="first_name"
                  autoComplete="off"
                  placeholder="First Name"
                  onChange={(e) => setFirstName(e.target.value)}
                  style={{ 
                    borderRadius: '50px',
                    padding: '7px 10px',
                    background: '#fff',
                    width: '45%',
                    margin: 'auto',
                    display: 'flex',
                    alignitems: 'center',
                    justifycontent: 'space-between'
                  }}
                />
              </div>

              {/* Last Name */}
              <div className="signup-form-group">
                <label htmlFor="last-name"></label>
                <input
                  type="text"
                  name="last_name"
                  id="last_name"
                  autoComplete="off"
                  placeholder="Last Name"
                  onChange={(e) => setLastName(e.target.value)}
                  style={{ 
                    borderRadius: '50px',
                    padding: '7px 10px',
                    background: '#fff',
                    width: '45%',
                    margin: 'auto',
                    display: 'flex',
                    alignitems: 'center',
                    justifycontent: 'space-between'
                  }}
                />
              </div>

              {/* Email */}
              <div className="signup-form-group">
                <label htmlFor="email"></label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="off"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                  style={{ 
                    borderRadius: '50px',
                    padding: '7px 10px',
                    background: '#fff',
                    width: '45%',
                    margin: 'auto',
                    display: 'flex',
                    alignitems: 'center',
                    justifycontent: 'space-between'
                  }}
                />
              </div>

              


              {/* Password */}
              <div className="signup-form-group">
                <label htmlFor="password"></label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  autoComplete="off"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  style={{ 
                    borderRadius: '50px',
                    padding: '7px 10px',
                    background: '#fff',
                    width: '45%',
                    margin: 'auto',
                    display: 'flex',
                    alignitems: 'center',
                    justifycontent: 'space-between'
                  }}
                />
              </div>

              {/* Confirm Password */}
              <div className="signup-form-group">
                <label htmlFor="confirm-password"></label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password2"
                  id="password2"
                  autoComplete="off"
                  placeholder="Confirm Password"
                  style={{ 
                    borderRadius: '50px',
                    padding: '7px 10px',
                    background: '#fff',
                    width: '45%',
                    margin: 'auto',
                    display: 'flex',
                    alignitems: 'center',
                    justifycontent: 'space-between'
                  }}
                />
              </div>
              <div className='signup-form-group ' style={{
    width: '45%',
    margin: '0 auto',
    borderRadius: '10px',
    padding: '20px',
    backgroundColor: '#ffffff',
   
  }}>
                <label htmlFor="role">Select Role:</label>
                <select className="select-option"
                  name="role"
                  // value={formData.studentGender}
                  placeholder="Student/Teacher"
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  >
                  <option disabled value="admin">Select</option>
                  <option value="admin">Admin</option>
                  <option value="teacher">Teacher</option>
                  <option value="student">Student</option>
                  <option value="office_staff">Office_staff</option>

                </select>
               
              </div>
              {error && (
  <span
    style={{
      color: 'red',
      fontWeight: 'bold',
      textAlign: 'center',
      display: 'block', // Ensures the span takes full width
      margin: '10px 0', // Adds space above and below
    }}
  >
    Data Input Error
  </span>
)}

              {/* Checkbox */}
              <div className="checkbox" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '10px 0' }}>
  <input
    type="checkbox"
    id="showPassword"
    checked={showPassword}
    onChange={toggle}
  />
  <label htmlFor="showPassword" style={{ marginLeft: '5px' }}>Show Password</label>
</div>
              {/* <div>
                <a href="/login" className="hover:text-blue-700 hover:text-sm">Already have an account?</a>
              </div> */}
              {/* Submit */}
              <div className="form-group form-button" style={{ display: 'flex', justifyContent: 'center' }}>
                <button
                  type=""
                  className="btn"
                  disabled={isLoading}
                >
                  {isLoading ? "Signing UP..." : "Signup"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};