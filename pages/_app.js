import '../styles/globals.css';
import { Nav } from '../components/Nav';
import { Alert } from '../components/Alert';

export default App;

function App({ Component, pageProps }) {
    return (
        <>
            <div className="app-container bg-light">
                <Nav />
                <Alert />
                <div className="container">
                    <Component {...pageProps} />
                </div>
            </div>
        </>
    );
}