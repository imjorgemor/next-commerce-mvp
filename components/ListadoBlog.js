import Entrada from "./Entrada"
import styles from "../styles/Blog.module.css"


const ListadoBlog = ({ blog }) => {
    return (
        <div>
            <h2 className='heading'>Blog</h2>
            <div className={styles.blog}>
                {blog.map(entrada => (
                    <Entrada
                        key={entrada.id}
                        entrada={entrada}
                    />
                ))}
            </div>




        </div>
    )
}

export default ListadoBlog
