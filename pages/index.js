import Listado from '../components/Listado'
import Layout from '../components/Layout'
import Curso from '../components/Curso'
import ListadoBlog from '../components/ListadoBlog'


export default function Home({ guitarras, curso, blog }) {
   
    return (
        <Layout
            pagina='Inicio'
            guitarra={guitarras[3]}
        >
            <main className='contenedor'>
                <h1 className='heading'>Nuestra coleccion</h1>
                <Listado
                    guitarras={guitarras}
                />
            </main>

            <section>
                <Curso curso={curso} />
            </section>

            <section className='contenedor'>
                <ListadoBlog blog={blog} />
            </section>
        </Layout>
    )
}

export async function getServerSideProps({ query: { id } }) {

    const urlGuitarras = `${process.env.API_URL}/guitarras`;
    const urlCursos = `${process.env.API_URL}/cursos`;
    const urlBlog = `${process.env.API_URL}/blogs`;

    const [resGuitarras, resCursos, resBlogs] = await Promise.all([
        fetch(urlGuitarras),
        fetch(urlCursos),
        fetch(urlBlog)
    ])

    const [guitarras, curso, blog] = await Promise.all([
        resGuitarras.json(),
        resCursos.json(),
        resBlogs.json()

    ])

    return {
        props: {
            guitarras,
            curso,
            blog
        }
    }
}
