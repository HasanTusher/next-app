import type { AppProps } from 'next/app'
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../components/layout";
import React, {ReactNode, useState} from "react";
import {ThemeContext} from "../utils/ThemeContext";

function MyApp({ Component, pageProps }: AppProps) {
    const [theme, setTheme] = useState("dark");
    const value = { theme, setTheme };


    return <ThemeContext.Provider value={value}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ThemeContext.Provider>


}

export default MyApp
