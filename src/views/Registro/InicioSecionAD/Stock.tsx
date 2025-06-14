import styles from "./Stock.module.css";
import React, { useState } from "react";
import { MenuLateral } from "../../../components/MenuLateral";

export const Stock = () => {
  const [productos, setProductos] = useState([
    { nombre: "Silla", descripcion: "silla rotadora", precio: "45000", cantidad: 5 },
    { nombre: "Tijeras", descripcion: "Profesionales", precio: "15000", cantidad: 8 },
  ]);

  const [editando, setEditando] = useState<number | null>(null);
  const [edicion, setEdicion] = useState({
    nombre: "",
    descripcion: "",
    precio: "",
    cantidad: "",
  });

  const [nuevo, setNuevo] = useState({
    nombre: "",
    descripcion: "",
    precio: "",
    cantidad: "",
  });

  const handleChangeNuevo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNuevo({ ...nuevo, [e.target.name]: e.target.value });
  };

  const agregarProducto = () => {
    if (!nuevo.nombre || !nuevo.precio) return alert("Completa nombre y precio");

    setProductos([
      ...productos,
      {
        nombre: nuevo.nombre,
        descripcion: nuevo.descripcion,
        precio: nuevo.precio,
        cantidad: parseInt(nuevo.cantidad) || 0,
      },
    ]);
    setNuevo({ nombre: "", descripcion: "", precio: "", cantidad: "" });
  };

  const comenzarEdicion = (index: number) => {
    setEditando(index);
    const p = productos[index];
    setEdicion({
      nombre: p.nombre,
      descripcion: p.descripcion,
      precio: p.precio,
      cantidad: p.cantidad.toString(),
    });
  };

  const guardarEdicion = (index: number) => {
    const actualizados = [...productos];
    actualizados[index] = {
      nombre: edicion.nombre,
      descripcion: edicion.descripcion,
      precio: edicion.precio,
      cantidad: parseInt(edicion.cantidad) || 0,
    };
    setProductos(actualizados);
    setEditando(null);
  };

  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEdicion({ ...edicion, [e.target.name]: e.target.value });
  };

  return (
    <div className={styles.layout}>
      <MenuLateral />
      <main className={styles.main}>
        <div className={styles.content}>
          <h1 className={styles.title}>Stock</h1>

          <div className={styles.tableBox}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Producto</th>
                  <th>Descripción</th>
                  <th>Precio</th>
                  <th>Stock</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {productos.map((p, i) => (
                  <tr key={i}>
                    <td>
                      {editando === i ? (
                        <input name="nombre" value={edicion.nombre} onChange={handleEditChange} />
                      ) : (
                        p.nombre
                      )}
                    </td>
                    <td>
                      {editando === i ? (
                        <input name="descripcion" value={edicion.descripcion} onChange={handleEditChange} />
                      ) : (
                        p.descripcion
                      )}
                    </td>
                    <td>
                      {editando === i ? (
                        <input  name="precio" value={edicion.precio} onChange={handleEditChange} />
                      ) : (
                        `${p.precio} `
                      )}
                    </td>
                    <td>
                      {editando === i ? (
                        <input name="cantidad" value={edicion.cantidad} onChange={handleEditChange} />
                      ) : (
                        p.cantidad
                      )}
                    </td>
                    <td>
                      {editando === i ? (
                        <button className={styles.btnMini} onClick={() => guardarEdicion(i)}>Guardar</button>
                      ) : (
                        <button className={styles.btnMini} onClick={() => comenzarEdicion(i)}>Editar</button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className={styles.agregarBox}>
            <h3>Agregar nuevo producto</h3>
            <input name="nombre" placeholder="Nombre" value={nuevo.nombre} onChange={handleChangeNuevo} />
            <input name="descripcion" placeholder="Descripción" value={nuevo.descripcion} onChange={handleChangeNuevo} />
            <input name="precio" placeholder="Precio" value={nuevo.precio} onChange={handleChangeNuevo} />
            <input name="cantidad" placeholder="Cantidad" value={nuevo.cantidad} onChange={handleChangeNuevo} />
            <button className={styles.button} onClick={agregarProducto}>Agregar</button>
          </div>
        </div>
      </main>
    </div>
  );
};
