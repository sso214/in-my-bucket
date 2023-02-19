import { globalStyles } from '../shared/styles';

const App = ({ Components, pageProps }) => {
    return (
        <>
            {globalStyles}
            <Components {...pageProps} />
        </>
    )
}

export default App;
