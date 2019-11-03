import React, { useContext } from "react";
import { NextPage, NextPageContext } from "next";
import fetch from "isomorphic-unfetch";

import { UserProfil } from "../../lib/interfaces";
import { HOSTNAME } from "../../lib/hostname.config";

import { UserContext } from "../../providers/user.provider";
import LayoutComponent from "../../components/layout/layout.component";

import "../../static/style.css";
import UserDetailComponent from "../../components/user-detail/user-detail.component";

const UserPage: NextPage<Props> = ({ userProfile }) => {
	const { user } = useContext(UserContext);

	return (
		<LayoutComponent user={user}>
			<UserDetailComponent user={userProfile}/>
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
	userProfile: UserProfil;
}
