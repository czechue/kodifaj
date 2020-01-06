import React, { useContext } from 'react';
import { NextPage, NextPageContext } from 'next';
import fetch from 'isomorphic-unfetch';

import { HOSTNAME } from '../../../lib/hostname.config';

import { UserContext } from '../../../components/providers/user.provider';
import LayoutComponent from '../../../components/shared/layout/layout.component';

import '../../../public/static/style.css';
import UserDetailComponent from '../../../components/user-detail/user-detail.component';
import { UserProps } from '../../../lib/types/props';

const UserPage: NextPage<Props> = ({ userProfile }) => {
  const { user } = useContext(UserContext);
  const isAdmin = userProfile._id === user._id;

  return (
    <LayoutComponent user={user}>
      <UserDetailComponent userProfile={userProfile} isAdmin={isAdmin}/>
    </LayoutComponent>
  );
};

UserPage.getInitialProps = async ({ query: { id } }: NextPageContext) => {
  const res = await fetch(`${HOSTNAME}/api/users/${id}`);
  const userProfile = await res.json();
  return { userProfile };
};

export default UserPage;

interface Props {
  userProfile: UserProps;
}
