import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../axiosConfig';
import loginLogo from '../assets/img/loginlogo.png';
import loginShape from '../assets/img/loginShape.png';

const Login = () => {
    const width = { width: 'calc(80% - 2rem)' };
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/login', { username, password });
      localStorage.setItem('token', response.data.token);
      navigate('/dashboard');
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <div className="bg-white w-full h-screen flex items-center justify-center">
      <div className="flex  flex-col md:flex-row rounded-lg md:w-3/4 lg:w-2/3 xl:w-1/2 h-3/4 z-10" style={width}>
        <div className="w-full md:w-1/2 mx-7 p-8 flex flex-col items-center justify-center">
          <img src={loginLogo} alt="Logo" className="mb-8 w-32" />
          <h1 className="text-2xl font-bold mb-6">Welcome Back!</h1>
          <form className="w-full" onSubmit={handleLogin}>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="input-underline w-full text-gray-700 placeholder-gray-500 focus:border-gray-800"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input-underline w-full text-gray-700 placeholder-gray-500 focus:border-gray-800"
              />
            </div>
            <button
              type="submit"
              className="w-full md:w-28 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 mx-auto block"
            >
              Login
            </button>
          </form>
        </div>
        <div className="hidden md:flex w-full md:w-2/3 lg:w-3/4 bg-gray-50 items-center justify-center p-2 shadow-md h-screen md:h-auto">
          <div className="p-8 h-full flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-blue-600 mb-2">Lorem ipsum dolor</h2>
              <p className="text-gray-500">Consectetur adipiscing elit</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full md:w-auto">
        <img src={loginShape} alt="shape" className="w-full md:w-auto" />
      </div>
    </div>
  );
};

export default Login;
