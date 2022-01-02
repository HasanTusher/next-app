import { ParsedUrlQuery } from 'querystring'
import {GetServerSideProps, GetStaticProps} from "next";
import User from "../index";
import NestedLayout from "../../../components/NestedLayout";

interface IParams extends ParsedUrlQuery {
    id: string
}

export const getServerSideProps: GetServerSideProps = async (context)=>{
    const param = context.params as IParams;
    return {props:{
            id: param.id
        }};
}

function UserIndex ({id}: any){
    return <>
        <User/>
        <p>{id}</p>
    </>
}

UserIndex.PageLayout = NestedLayout;
export default UserIndex;