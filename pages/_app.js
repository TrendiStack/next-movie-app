import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';
import { UserProvider } from '../context/user.context';
import { SavedProvider } from '../context/saved.context';
import { MovieProvider } from '../context/movies.context';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <UserProvider>
        <SavedProvider>
          <MovieProvider>
            <ThemeProvider>
              <Component {...pageProps} />
            </ThemeProvider>
          </MovieProvider>
        </SavedProvider>
      </UserProvider>
    </>
  );
}

export default MyApp;
