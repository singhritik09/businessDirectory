import { useState } from 'react'
import Navbar from './Navbar'
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const loginUser = async (e) => {
      e.preventDefault();
  
      // Send a POST request to the server to check login
      const response = await fetch('http://localhost:8000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await response.json();
  
      if (data.success) {
        alert('Login successful');
        window.location.href = '/home'

      } else {
        alert('Check email and password')
      }
    };
  
	return (
        
		<div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
          <Navbar/>
            <div className="w-1/2 p-6 m-auto bg-gray-100 rounded-md shadow-md lg:max-w-xl">
                <form onSubmit={loginUser} className="mt-6">
                    <div className="mb-2">
                        <h2 className="text-3xl font-semibold text-center text-green-700 ">Login</h2>
                        <label
                            for="email"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            className="block w-full px-4 py-2 mt-2 text-gray-800 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            for="password"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}

                        />
                    </div>

                    <div className="mt-6">
                        <button type="submit" className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-green-700 rounded-md hover:bg-green-800 focus:outline-none focus:bg-green-600">
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
	)
}

export default Login;