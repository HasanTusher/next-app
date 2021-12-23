import Document, {Html, Head, Main, NextScript, DocumentContext} from "next/document";


export default class CustomDocument extends Document {

    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx)
        return initialProps
    }

     render(){
         return <Html>
                 <Head>
                     <meta property="custom" content="yolo"/>
                     <meta charSet="utf-8"/>
                     <meta property="viewport" content="width=device-width, initial-scale=1"/>
                 </Head>
                 <body>
                 <Main/>
                 </body>
                 <NextScript/>
             </Html>
     }
}