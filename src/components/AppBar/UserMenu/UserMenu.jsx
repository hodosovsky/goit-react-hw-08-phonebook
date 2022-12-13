import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from 'redux/auth/auth-operation';
import authSelectors from 'redux/auth/auth-selectors';
import { UserMenuStyled } from './UserMenu.styled';

const UserMenu = () => {
  const dispatch = useDispatch();
  const userEmail = useSelector(authSelectors.selectUserEmail);

  const handlleLogoutClick = () => {
    dispatch(logout());
  };
  return (
    <>
      <div>
        <Link to="contacts" className="header-item">
          Contacts
        </Link>
      </div>
      <UserMenuStyled>
        <p>{userEmail}</p>
        <button onClick={handlleLogoutClick}>Logout</button>
      </UserMenuStyled>
    </>
  );
};

export default UserMenu;
