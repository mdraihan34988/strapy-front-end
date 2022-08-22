import Head from 'next/head';
import Nav from './Nav';
// import { UserProvider } from '../lib/authContext';

const Layout = ({ children }) => (
  <>
    <Head>
      <title>Strapy Database</title>
    </Head>

    <Nav />
    <main className="px-4">
      <div
        className="
          flex
          justify-center
          items-center
          bg-white
          mx-auto
          w-2/4
          rounded-lg
          my-16
          p-16
        "
      >
        <div className="text-2xl font-medium">{children}</div>
      </div>
    </main>
  </>
);
export default Layout;