import Link from 'next/link'
import Image from 'next/image'
import styles from "../styles/Header.module.css"
import {useRouter} from "next/router"


const Header = ({ guitarra }) => {
   

    const router = useRouter();
    console.log(router.pathname)

    return (
        <header className={styles.header}>
            <div className="contenedor">

                <div className={styles.barra}>
                    <Link href="/">
                        <a>
                            <Image src="/img/logo.svg" width={150} height={100} alt="imagen logo" />
                        </a>
                    </Link>
                    <nav className={styles.navbar}>
                        <Link href="/">Inicio</Link>
                        <Link href="/nosotros">Nosotros</Link>
                        <Link href="/blog">Blog</Link>
                        <Link href="/tienda">Tienda</Link>
                    </nav>
                </div>

                {guitarra && (
                    <div className={styles.modelo}>
                        <h2>Modelo {guitarra.nombre}</h2>
                        <p>{guitarra.descripcion}</p>
                        <p className={styles.precio}>${guitarra.precio}</p>
                        <Link href={`/guitarras/${guitarra.url}`}>
                            <a className={styles.enlace}>Ver Producto</a>
                        </Link>
                    </div>
                )}
            </div >

            {
                router.pathname === "/" && (
                    <div className={styles.guitarra}>
                        <Image layout="fixed" width={500} height={1200} src='/img/header_guitarra.png' alt="imagen header"
                          />
                    </div>  
                )
            }




        </header>

    )
}

export default Header
