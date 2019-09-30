import React, { Component } from "react";
import { NextPageContext } from "next";

interface Props {
	postId: string;
	posts: string[];
}
export default class extends Component<Props> {
	static getInitialProps({ query: { id } }: NextPageContext) {
		return { postId: id };
	}

	render() {
		return (
			<div>
				<h1>My blog post #{this.props.postId}</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua.
				</p>
				{this.props.posts.map(post => (
					<div>{post}</div>
				))}
			</div>
		);
	}
}
