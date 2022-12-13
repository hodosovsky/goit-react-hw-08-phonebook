import { useSelector } from 'react-redux';
import UserMenu from './UserMenu/UserMenu';
import NavList from './NavList/NavList';
import authSelectors from 'redux/auth/auth-selectors';

const AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);
  return <>{isLoggedIn ? <UserMenu /> : <NavList />}</>;
};

export default AppBar;
