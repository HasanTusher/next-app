import { ParsedUrlQuery } from 'querystring'
import {GetServerSideProps, GetStaticProps} from "next";
import User from "../index";

interface IParams extends ParsedUrlQuery {
    id: string
}

export const getServerSideProps: GetServerSideProps = async (context)=>{
    const param = context.params as IParams;
    return {props:{
            id: param.id
        }};
}

export default function UserIndex ({id}: any){
    return <>
        <User/>

        <p>{id}</p>
    </>
}