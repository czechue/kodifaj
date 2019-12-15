import App, { AppContext } from 'next/app';
import { IncomingMessage } from 'http';
import { User } from '../lib/types/user';
import UserProvider from '../components/providers/user.provider';
import ErrorBoundary from '../components/error-boundary/error-boundary.component';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }: AppContext) {
    let pageProps: any = { user: '' };

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    if (ctx.req) {
      const request: IncomingMessageExtended = ctx.req;

      if (request && request.session && request.session.passport) {
        pageProps.user = request.session._ctx.user;
      }
    }
    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <ErrorBoundary>
        <UserProvider user={pageProps.user}>
          <Component {...pageProps} />
        </UserProvider>
      </ErrorBoundary>
    );
  }
}

export default MyApp;

interface IncomingMessageExtended extends IncomingMessage {
  session?: {
    passport: {
      user: string;
    };
    _ctx: {
      user: User;
    };
  };
}
