import React, { useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'; 


const Login = () => {
  const [state, setState] = useState('Sign Up');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const { token, setToken, backendUrl } = React.useContext(AppContext);

  const navigate = useNavigate();

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    // handle login/signup logic
    try {
      if (state === 'Sign Up') {
        const { data } = await axios.post(backendUrl + '/api/user/register', { name, email, password })
        if (data.success) {
          
          setToken(data.token)
          localStorage.setItem('token', data.token)
        } else {
          toast.error(data.message)
        }
      } else {
        const { data } = await axios.post(backendUrl + '/api/user/login', { email, password })
        if (data.success) {
          setToken(data.token)
          localStorage.setItem('token', data.token)
          toast.success("Login Successful")
        } else {
          toast.error(data.message)
        }
      } 
      }
      catch (error) {
        console.log(error)
        toast.error(error.message)
    }
    };

    useEffect(() => {
      if (token) {
        navigate('/');
      }
    }, [token]);  


    return (
      <form onSubmit={onSubmitHandler}
        className="min-h-[80vh] flex items-center justify-center px-4"
      >
        <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-8 space-y-6">
          <h2 className="text-2xl font-bold text-center">
            {state === 'Sign Up' ? 'Create Account' : 'Login'}
          </h2>
          <p className="text-center text-gray-600">
            Please {state === 'Sign Up' ? 'sign up' : 'login'} to book an appointment
          </p>
          {state === 'Sign Up' && (
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => setName(e.target.value)}
                value={name}
                required
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            {state === 'Sign Up' ? 'Create Account' : 'Login'}
          </button>

          <div className="text-center">
            <p className="text-sm text-gray-600">
              {state === 'Sign Up' ? 'Already have an account?' : "Don't have an account?"}{' '}
              <button
                type="button"
                className="text-blue-600 hover:underline"
                onClick={() => setState(state === 'Sign Up' ? 'Login' : 'Sign Up')}
              >
                {state === 'Sign Up' ? 'Login' : 'Sign Up'}
              </button>
            </p>
          </div>
        </div>
      </form>
    );
  };

  export default Login;