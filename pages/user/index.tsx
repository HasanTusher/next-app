import {useThemeContext} from "../../utils/ThemeContext";
import {useEffect} from "react";
import NestedLayout from "../../components/NestedLayout";


export default function User({prop}: any){
    const {theme, setTheme} = useThemeContext();
    useEffect(()=>{
        console.log('User paage')
    }, [])
    return <>
        {/*<div className="row">*/}
        {/*    <div className="col-12">*/}
        {/*        <p className="text-center"> {theme}</p>*/}
        {/*        <button onClick={()=>setTheme("ayay")}> click to change theme</button>*/}
        {/*    </div>*/}

            <NestedLayout/>

            {/*{children}*/}
        {/*</div>*/}
    </>

}