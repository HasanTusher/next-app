import React, {useContext} from "react";
import {string} from "prop-types";


export const ThemeContext = React.createContext({
    theme :  'light',
    setTheme: (xx: any)=>{}
});

export function useThemeContext() {
    return useContext(ThemeContext);
}

export const BookContext = React.createContext({
    book: "yaya",
    setBook: (xx: string)=>{}
})
export const useBookContext = () =>{
    return useContext(BookContext);
}