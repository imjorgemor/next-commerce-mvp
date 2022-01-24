import styles from '../styles/Curso.module.css'

const Curso = ({ curso }) => {

    const { contenido, titulo, imagen } = curso;

    return (
        <section>
            <div className={`contenedor ${styles.grid}`}>
                <div>
                    <h2 className='heading'>{titulo}</h2>
                    <p className={styles.texto}>{contenido}</p>
                    <a className={styles.enlace} href="">Mas información</a>
                </div>

            </div>

            <style jsx>{`
            section {
                padding: 10rem 0;
                margin-top: 10rem;
                background-image: linear-gradient(to right, rgb(0 0 0 / .60), rgb( 0 0 0 / .7)), url(${imagen.url});
                background-size: cover;
                background-position: 50%;
            }
            
            `}</style>

        </section>
    )
};

export default Curso;
