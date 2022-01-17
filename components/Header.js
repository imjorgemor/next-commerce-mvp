import Link from 'next/link'
import Image from 'next/image'
import styles from "../styles/Header.module.css"


const Header = () => {
    return (
        <header className={styles.header}>
            <div className="contenedor">
                <div className={styles.barra}>
                    <Link href="/">
                        <Image src="/img/logo.svg" width={150} height={100} alt="imagen logo" />
                    </Link>



                    <nav className={styles.navbar}>
                        <Link href="/">Inicio</Link>
                        <Link href="/nosotros">Nosotros</Link>
                        <Link href="/blog">Blog</Link>
                        <Link href="/tienda">Tienda</Link>
                    </nav>

                </div>


            </div >
        </header>

    )
}

export default Header
