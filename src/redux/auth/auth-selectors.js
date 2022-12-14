const selectIsLoggedIn = state => state.auth.isLoggedIn;
const selectUserName = state => state.auth.user.name;
const selectUserEmail = state => state.auth.user.email;
const selectIsFetchingCurrentUser = state => state.auth.isFetchingCurrenUser;

const authSelectors = {
  selectIsLoggedIn,
  selectUserName,
  selectUserEmail,
  selectIsFetchingCurrentUser,
};

export default authSelectors;
