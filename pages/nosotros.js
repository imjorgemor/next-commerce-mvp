import Layout from '../components/Layout'
import Image from "next/image"
import Styles from "../styles/Nosotros.module.css"


const Nosotros = () => {
    return (
        <Layout
            pagina="nosotros"
        >
            <main className='contenedor'>
                <h2 className='heading'>Nosotros</h2>

                <div className={Styles.contenido}>

                    <Image layout="responsive" width={600} height={450} src="/img/nosotros.jpg" alt="imagen sobre nosotros"/>

                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, dignissimos?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus eligendi odio expedita aspernatur architecto quam enim totam modi sed veritatis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, vitae.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, dignissimos?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus eligendi odio expedita aspernatur architecto quam enim totam modi sed veritatis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, vitae.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, dignissimos?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus eligendi odio expedita aspernatur architecto quam enim totam modi sed veritatis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, vitae.</p>
                    </div>
                </div>
            </main>
        </Layout>
    )
}

export default Nosotros
