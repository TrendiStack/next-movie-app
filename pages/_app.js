import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';
import { UserProvider } from '../context/user.context';
import { SavedProvider } from '../context/saved.context';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <UserProvider>
        <SavedProvider>
          <ThemeProvider>
            <Component {...pageProps} />
          </ThemeProvider>
        </SavedProvider>
      </UserProvider>
    </>
  );
}

export default MyApp;
