// import { ContactList, Container } from './App.styled';
// import Form from './Form/Form';
// import Contacts from './Contacts/Contacts';
// import Filter from './Filter/Filter.jsx';
import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { fetchCurrentUser } from 'redux/auth/auth-operation';
import authSelectors from 'redux/auth/auth-selectors';

import { Layout } from '../components/Layout/Layout';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import { PublicRoute } from './PublicRoute/PublicRoute.jsx';

const ContactsPage = lazy(() => import('../pages/ContactsPage/ContactsPage'));
const Login = lazy(() => import('../pages/LoginPage/Login'));
const Register = lazy(() => import('../pages/RegisterPage/Register'));

const App = () => {
  const dispatch = useDispatch();
  const isFetchingUser = useSelector(authSelectors.selectIsFetchingCurrentUser);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);
  return (
    !isFetchingUser && (
      <BrowserRouter basename="/goit-react-hw-08-phonebook">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<PrivateRoute />}>
              <Route path="/contacts" element={<ContactsPage />} />
              <Route path="/" element={<Navigate to="/contacts" />} />
            </Route>
            <Route path="/" element={<PublicRoute />}>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="*" element={<Navigate to="/login" />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    )
  );
};

export { App };
