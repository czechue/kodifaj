import App, {AppContext} from "next/app";
import UserProvider from "../providers/user.provider";
import { IncomingMessage } from "http";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }: AppContext) {
    let pageProps: any = { user: "" };

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    if (ctx.req) {
      const request: IncomingMessageExtended = ctx.req;

      if (request && request.session && request.session.passport) {
        pageProps.user = request.session.passport.user;
      }
    }
    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <UserProvider userId={pageProps.user}>
        <Component {...pageProps} />
      </UserProvider>
    );
  }
}

export default MyApp;

interface IncomingMessageExtended extends IncomingMessage {
  session?: {
    passport: {
      user: string;
    };
  };
}
