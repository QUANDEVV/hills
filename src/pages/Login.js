import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleAuth = async () => {
    if (isLogin) {
      // Logging in
      try {
        const response = await fetch('http://localhost:3001/users');
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }
        const users = await response.json();
        const user = users.find(user => user.username === username && user.password === password);
        if (user) {
          localStorage.setItem('shukri', JSON.stringify(user));
          navigate('/');
        } else {
          alert('Invalid username or password');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
        alert('Failed to log in. Please try again later.');
      }
    } else {
      // Signing up
      try {
        const response = await fetch('http://localhost:3001/users');
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }
        const users = await response.json();
        const userExists = users.some(user => user.username === username);
        if (userExists) {
          alert('Username already exists');
        } else {
          const newUser = { username, password };
          users.push(newUser);
          localStorage.setItem('users', JSON.stringify(users));

          // Post the new user data to db.json
          const postResponse = await fetch('http://localhost:3001/users', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(newUser),
          });

          if (!postResponse.ok) {
            throw new Error('Failed to save user data');
          }

          localStorage.setItem('shukri', JSON.stringify(newUser));
          navigate('/');
        }
      } catch (error) {
        console.error('Error posting or fetching user data:', error);
        alert('Failed to sign up. Please try again later.');
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">{isLogin ? 'Sign in to your account' : 'Create your account'}</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={e => e.preventDefault()}>
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="username" className="sr-only">Username</label>
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Username"
                value={username}
                onChange={e => setUsername(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <p className="font-medium text-blue-600 hover:text-blue-500 cursor-pointer" onClick={() => setIsLogin(!isLogin)}>
                {isLogin ? 'Create an account' : 'Already have an account? Sign in'}
              </p>
            </div>
          </div>

          <div>
            <button
              type="submit"
              onClick={handleAuth}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              {isLogin ? 'Sign In' : 'Sign Up'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;



