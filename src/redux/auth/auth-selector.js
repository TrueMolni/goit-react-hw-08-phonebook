export const isUserLogin = ({ auth }) => auth.islogin;
export const getAuth = ({ auth }) => {
  const { isLogin, token } = auth;
  return { isLogin, token };
};
export const getUser = ({ auth }) => auth.user;
