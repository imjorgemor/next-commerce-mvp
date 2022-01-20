

const Curso = ({curso}) => {

    const {contenido, titulo, imagen} = curso;

    return (
        <section>
            <div className='contenedor'>
                <div>
                    <h2>{titulo}</h2>
                    <p>{contenido}</p>

                    <a href="">Mas información</a>
                </div>

            </div>

        </section>
    )
};

export default Curso;
