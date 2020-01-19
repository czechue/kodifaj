import React from 'react';
import '../../../public/static/style.css';
import LayoutComponent from '../../../components/shared/layout/layout.component';
import LoginComponent from '../../../components/login/login';
import { User } from '../../../lib/types/user';
import { NextPage } from 'next';

const LoginPage: NextPage<Props> = ({ user }) => {
  return (
    <LayoutComponent user={user}>
      <div className="flex flex-col sm:justify-center h-max">
        <LoginComponent />
      </div>
    </LayoutComponent>
  );
};

export default LoginPage;

interface Props {
  user: User;
}
