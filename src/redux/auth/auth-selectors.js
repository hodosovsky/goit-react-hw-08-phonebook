const selectIsLoggedIn = state => state.auth.isLoggedIn;
const selectUserName = state => state.auth.user.name;
const selectUserEmail = state => state.auth.user.email;

const authSelectors = {
  selectIsLoggedIn,
  selectUserName,
  selectUserEmail,
};

export default authSelectors;
