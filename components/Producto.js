import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Producto.module.css'

const Producto = ({ guitarra }) => {


    const { descripcion, nombre, url, imagen, precio } = guitarra;
    return (
        <div className={styles.guitarra}>
            <Image layout="responsive" width={150} height={350} src={imagen.url} alt={`Imagen guitarra ${nombre}`} />

            <div className={styles.contenido}>
                <h3>{nombre}</h3>
                <p className={styles.descripcion}>{descripcion}</p>
                <p className={styles.precio}>{precio}</p>
                <Link href={`/guitarras/${url}`}>
                    <a className={styles.enlace}>
                        Ver producto
                    </a>
                </Link>

            </div>

        </div>
    )
};

export default Producto;
