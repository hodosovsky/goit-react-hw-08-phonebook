// import { ContactList, Container } from './App.styled';
// import Form from './Form/Form';
// import Contacts from './Contacts/Contacts';
// import Filter from './Filter/Filter.jsx';
import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { fetchCurrentUser } from 'redux/auth/auth-operation';

import { Layout } from '../components/Layout/Layout';

const ContactsPage = lazy(() => import('../pages/ContactsPage/ContactsPage'));
const Login = lazy(() => import('../pages/LoginPage/Login'));
const Register = lazy(() => import('../pages/RegisterPage/Register'));

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);
  return (
    <BrowserRouter basename="/goit-react-hw-08-phonebook">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="contacts" element={<ContactsPage />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          {/* <Route path="movies/:moveiId" element={<MovieByIDPage />}>
            <Route path="cast" element={<CastPage />} />
            <Route path="reviews" element={<ReviewPage />} />
          </Route> */}
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export { App };
