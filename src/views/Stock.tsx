
import styles from "./Stock.module.css";

export const Stock = () => {
  return (
    <div className={styles.contenedorPrincipal}>
      {/* Panel izquierdo */}
      <div className={styles.panelIzquierdo}>
        <div className={styles.encabezado}>
          
          <button className={styles.botonAgregar}>+ Añadir Stock</button>
        </div>

        <div className={styles.tabla}>
          <div className={styles.filaEncabezado}>
            <span>Producto</span>
            <span>Disponible</span>
            <span>Editar</span>
          </div>

          <div className={styles.fila}>
            <span>Producto</span>
            <span>10 unidades</span>
            <button className={styles.botonEditar}>+</button>
          </div>
          <div className={styles.fila}>
            <span>Producto</span>
            <span>10 unidades</span>
            <button className={styles.botonEditar}>+</button>
          </div>
        </div>
      </div>

      {/* Panel derecho */}
      <div className={styles.panelDerecho}>
        <h3>grafico </h3>
      </div>
    </div>
  );
};
