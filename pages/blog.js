import Layout from '../components/Layout'
import Entrada from '../components/Entrada';
import Styles from "../styles/Blog.module.css"

const Blog = ({ entradas }) => {

    
    
    return (
        <Layout
            pagina="Blog"
        >
            <main className="contenedor">
                <h2 className='heading'>Blog</h2>

                <div className={Styles.blog}>
                    {entradas.map(entrada => (
                        <Entrada
                            key={entrada.id}
                            entrada={entrada}
                        />
                    ))}
                </div>
            </main>
        </Layout>
    )
}


export async function getServerSideProps() {
    const url = `${process.env.API_URL}/blogs`
    const res = await fetch(url)
    const entradas = await res.json()
    console.log(entradas);
    return {
        props: {
            entradas
        }
    }
}

export default Blog
