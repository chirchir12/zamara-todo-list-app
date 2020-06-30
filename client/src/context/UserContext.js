import React, { useEffect, createContext, useState } from 'react';

import { setUser, authHeader } from '../services/userService';
const BASE_URL = 'http://localhost:5000/api';

export const UserContext = createContext();

function UserContextProvider(props) {
  const [todos, setTodos] = useState([]);
  const [newUser, setNewUser] = useState({
    firstName: '',
    lastName: '',
    username: '',
    password: '',
    cpassword: '',
  });

  // fetch todos
  const fetchTodos = () => {
    fetch('http://localhost:5000/api/todos/list')
      .then((res) => {
        if (!res.ok) {
          throw new Error('no data has been added');
        }
        return res;
      })
      .then((res) => {
        if (!res) {
          return res;
        }
        return res.json();
      })
      .then((results) => {
        setTodos(results);
      })
      .catch((error) => {
        console.log(error.error, 'is the error');
      });
  };
  const [loginUser, setLoginUser] = useState({
    username: '',
    password: '',
  });

  const [error, setError] = useState({});
  const [isAuthicated, setisAuthenticated] = useState(
    !!JSON.parse(localStorage.getItem('user'))
  );

  useEffect(() => {
    fetchTodos();
  }, []);

  const register = (user) => {
    fetch(`${BASE_URL}/auth/register`, {
      method: 'Post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    })
      .then((message) => console.log(message))
      .catch((error) => console.log(error));
  };
  // logout
  const logout = () => {
    localStorage.removeItem('user');
    setisAuthenticated(false);
  };
  // login
  const login = (user) => {
    fetch(`${BASE_URL}/auth/login`, {
      method: 'Post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('wrong credentials');
        }
        return response.json();
      })
      .then((userInfo) => {
        if (userInfo) {
          setUser(userInfo);
          setisAuthenticated(true);
          setError({});
        } else {
          console.log('my user is ', loginUser);
          console.log('I am fully fucked men');
        }
      })
      .catch((error) => setError('wrong credentials'));
  };

  return (
    <UserContext.Provider
      value={{
        newUser,
        setNewUser,
        loginUser,
        setLoginUser,
        todos,
        register,
        login,
        logout,
        error,
        isAuthicated,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
