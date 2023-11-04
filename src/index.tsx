import './index.css'
import App from './App';
import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "styled-components";
import {theme} from "./styles/theme";


const RootComponent = () => {

    return (
        <StrictMode>
            <ThemeProvider theme={theme}>
                <BrowserRouter basename={'/'}>
                    <App/>
                </BrowserRouter>
            </ThemeProvider>
        </StrictMode>
    );
};

const root = createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(<RootComponent/>);
