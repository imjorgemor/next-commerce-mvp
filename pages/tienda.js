import Layout from '../components/Layout'
import Listado from '../components/Listado'

const Tienda = ({ guitarras }) => {

    return (
        <Layout
            pagina="Tienda Virtual"
        >
            <main className="contenedor">
                <h1 className="heading">Nuestra coleccion</h1>
                <Listado
                    guitarras={guitarras}

                />
            </main>
        </Layout>
    )
}

export async function getServerSideProps({ query: { id } }) {

    const url = `${process.env.API_URL}/guitarras`
    const res = await fetch(url)
    const guitarras = await res.json()
    console.log(guitarras);

    return {
        props: {
            guitarras

        }
    }
}



export default Tienda
