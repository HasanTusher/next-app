import React, {ReactNode} from "react";
import {AppProps} from "next/app";

type Props = {
    children: ReactNode;
    title?: string;
};

function Layout({children, title="yay"}: Props){

    return <div>
        <nav>
            <li>Home</li>
        </nav>
        {children}
    </div>
}
export default Layout;