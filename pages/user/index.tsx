import {useThemeContext} from "../../utils/ThemeContext";
import {useEffect} from "react";
import NestedLayout from "../../components/NestedLayout";


function User({prop}: any){
    const {theme, setTheme} = useThemeContext();
    useEffect(()=>{
        console.log('User paage');
    }, [])
    return <>
        <div className="row">
            <div className="col-12"><p className="fw-bold">All user page</p> </div>
        </div>
    </>

}
User.PageLayout = NestedLayout;

export default  User;