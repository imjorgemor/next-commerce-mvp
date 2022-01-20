import React from 'react';
import Producto from './Producto';
import styles from "../styles/Listado.module.css"

const Listado = ({ guitarras }) => {
   
    return (
        <div className={styles.listado}>
            {guitarras.map(guitarra => (
                <Producto
                    key={guitarra.url}
                    guitarra={guitarra}
                />
            ))}
        </div>
    )
};

export default Listado;
