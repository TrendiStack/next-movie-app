import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';
import { AuthContextProvider } from '../context/AuthContext';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AuthContextProvider>
        <ThemeProvider>
          <Component {...pageProps} />
        </ThemeProvider>
      </AuthContextProvider>
    </>
  );
}

export default MyApp;
