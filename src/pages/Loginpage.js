import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import './Loginpage.css'
import { useState } from 'react'
import { toast } from 'react-toastify'

const Loginpage = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Email and Password are Required");
      return;
    }
    setLoading(true);
    try {
      setLoading(true);
      const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
        credentials: 'include',
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("login successfully");
        login(data.data);
        navigate('/');
      }
      else {
        toast.error(data.message || 'login failed')
      }

    } catch (error) {
      toast.error('An error occurred during login');
    }
    finally {
      setLoading(false);
    }

  }
  return (
    <div className='login-page'>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='email'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type='submit'>Login</button>
      </form>

      <div className='signup-link'>
        <p>Don't have an Account? <Link to='/signup'>Sign-up</Link></p>
      </div>
    </div>
  )
}

export default Loginpage