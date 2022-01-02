import type { AppProps } from 'next/app'
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../components/layout";
import React, {ReactNode, useState} from "react";
import {ThemeContext} from "../utils/ThemeContext";
import {BookContext} from "../utils/ThemeContext";


type ComponentWithPageLayout = AppProps & {
    Component: AppProps["Component"] & {
        PageLayout?: React.ComponentType;
    };
};



function MyApp({ Component, pageProps }: ComponentWithPageLayout) {
    const [theme, setTheme] = useState("dark");
    const value = { theme, setTheme };

    const [book, setBook] = useState("Fear of the dark");
    const value2 = {book, setBook};

    return <BookContext.Provider value={value2}>
        <ThemeContext.Provider value={value}>
            <Layout>
                {Component.PageLayout ? (
                    <Component.PageLayout>
                        <Component {...pageProps} />
                    </Component.PageLayout>
                ) : (
                    <Component {...pageProps} />
                )}
            </Layout>
        </ThemeContext.Provider>
    </BookContext.Provider>


}

export default MyApp
