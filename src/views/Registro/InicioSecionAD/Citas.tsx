import styles from "./Citas.module.css";
import React, { useState, useEffect } from "react";
import { MenuLateral } from "../../../components/MenuLateral";
import { obtenerCitas, eliminarCita, obtenerServicioPorId } from "../../../servicios/serviciocita";

export const Citas = () => {
  const [citas, setCitas] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  
  useEffect(() => {
    cargarCitas();
  }, []);
  

const cargarCitas = async () => {
  setLoading(true);
  const citasFirebase = await obtenerCitas();

  // para obtener e nombre del sevicio(cita)
 const citasConNombreServicio = await Promise.all(
  citasFirebase.map(async (cita) => {
    const servicio = await obtenerServicioPorId(cita.idServicio);
    return { ...cita, nombreServicio: servicio.nombreServicio, precio: servicio.precio };
  })
);


  setCitas(citasConNombreServicio);
  setLoading(false);
};

  const handleEliminar = async (id: string) => {
    const confirmacion = window.confirm("¿Estás seguro de eliminar esta cita?");
    if (!confirmacion) return;

    await eliminarCita(id);
    
    await cargarCitas();
  };

  return (
    <div className={styles.layout}>
      <MenuLateral />

      <main className={styles.main}>
        <h1 className={styles.title}>Citas Programadas</h1>

        <div className={styles.content}>
          {loading ? (
            <p>Cargando citas...</p>
          ) : citas.length === 0 ? (
            <p>No hay citas programadas.</p>
          ) : (
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Cliente</th>
                  <th>Fecha</th>
                  <th>Hora</th>
                  <th>Servicio</th>
                  <th>valor</th>
                  <th>Acciones</th>
                </tr>
              </thead>
             <tbody>
                {citas.map((cita, index) => (
                  <tr key={index}>
                    <td>
                      {cita.nombreUsuario || "-"} {cita.apellidoUsuario || "-"}
                    </td>
                    <td>{cita.fechaSeleccionada || "-"}</td> 
                    <td>{cita.horaSeleccionada || "-"}</td> 
                    <td>{cita.nombreServicio|| "-"}</td>

                    <td>${cita.precio}</td>

                    <td>
                      <button
                        className={styles.btnEliminar}
                        onClick={() => handleEliminar(cita.id)}
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>
          )}
        </div>
      </main>
    </div>
  );
};
