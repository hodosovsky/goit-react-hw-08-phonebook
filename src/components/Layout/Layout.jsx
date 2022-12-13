import { Suspense } from 'react';

import { Outlet } from 'react-router-dom';
import AppBar from 'components/AppBar/AppBar';

export const Layout = () => {
  return (
    <>
      <AppBar />
      {/* {isLogIn === true && } */}
      <Suspense fallback={<p>loading...</p>}>
        <Outlet />
      </Suspense>
    </>
  );
};
