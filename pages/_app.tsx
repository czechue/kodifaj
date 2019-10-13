import App from "next/app";
import UserProvider from "../providers/user.provider";
import { NextComponentType, NextPageContext } from "next";
import { IncomingMessage } from "http";

interface IncomingMessageExtended extends IncomingMessage {
  session?: {
    passport: {
      user: string;
    };
  };
}

interface MyAppProps {
  Component: NextComponentType<NextPageContext>;
  ctx: NextPageContext;
}
class MyApp extends App {
  static async getInitialProps({ Component, ctx }: MyAppProps) {
    const { req } = ctx;

    let pageProps: any = { user: "" };

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    if (req) {
      const request: IncomingMessageExtended = req;

      if (request && request.session && request.session.passport) {
        pageProps.user = request.session.passport.user;
      }
    }
    return { pageProps };
  }

  constructor(props: any) {
    super(props);
    this.state = {
      user: props.pageProps.user
    };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <UserProvider userId={this.props.pageProps.user}>
        <Component {...pageProps} />
      </UserProvider>
    );
  }
}

export default MyApp;
