import {GetStaticPaths, GetServerSideProps, GetStaticProps} from "next";

import { ParsedUrlQuery } from 'querystring'

interface IParams extends ParsedUrlQuery {
    id: string
}

/**
 * return the component
 * @param post
 * @constructor
 */
function Post({ post}: any) {
    return <div>{post.data}</div>
}

/**
 * generates the static props
 * @param context
 */
export const getStaticProps: GetStaticProps = async (context) => {
    const  slug  = context.params as IParams;
    const post = {
     'data':  `/api/${slug.id}`
    };
    return {props: {post}}
}

/**
 * mock dataset
 */
export const getStaticPaths: GetStaticPaths = async () => {
    const arr: string[] = ['slug1', 'slug2']
    const paths = arr.map((slug) => {
        return {
            params: { id: slug },
        }
    })
    return { paths, fallback: false }
}

export default Post
