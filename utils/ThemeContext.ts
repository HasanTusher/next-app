import React, {useContext} from "react";
import {string} from "prop-types";


export const ThemeContext = React.createContext({
    theme :  'light',
    setTheme: (xx: any)=>{}
});

export function useThemeContext() {
    return useContext(ThemeContext);
}
