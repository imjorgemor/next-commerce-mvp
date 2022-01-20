import Image from 'next/image';
import styles from '../../styles/Producto.module.css'
import Layout from '../../components/Layout'

const Product = ({ guitarra }) => {

    const { descripcion, nombre, url, imagen, precio } = guitarra[0]

    return (
        <Layout
            pagina={`Guitarra ${nombre}`}>
            <div className={styles.guitarra}>
                <Image layout="responsive" width={150} height={350} src={imagen.url} alt={`Imagen guitarra ${nombre}`} />
                <div className={styles.contenido}>
                    <h3>{nombre}</h3>
                    <p className={styles.descripcion}>{descripcion}</p>
                    <p className={styles.precio}>{precio}</p>

                    <form className={styles.formulario}>
                        <input
                            type="submit"
                            value="Agregar al Carrito"
                        />
                    </form>
                </div>
            </div>
        </Layout>
    )
};

export default Product;

export async function getServerSideProps({ query: { url } }) {

    const urlGuitarra = `${process.env.API_URL}/guitarras?url=${url}`
    const respuesta = await fetch(urlGuitarra)
    const guitarra = await respuesta.json();

    return {
        props: {
            guitarra
        }
    }
}