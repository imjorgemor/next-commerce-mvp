import Layout from "../components/Layout"
import Link from 'next/link'
import styles from "../styles/NoEncontrado.module.css"

const NotFind = () => {
    return (
        <Layout>
            <div className={styles.no_encontrado}>
                <h1 className="heading">Página not found</h1>
                <Link href="/">Volver al inicio</Link>
            </div>

        </Layout>
    )
}

export default NotFind
