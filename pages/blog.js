import { useEffect } from 'react'
import Layout from '../components/Layout'

const Blog = () => {

    useEffect(() => {
        const consultarAPI = async () => {
            const url = "http://localhost:1337/api/blogs/";
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
        }
        consultarAPI();
    }, [])





    return (
        <Layout
            pagina="Blog"
        >
            <p>desde blog js</p>




        </Layout>
    )
}

export default Blog
