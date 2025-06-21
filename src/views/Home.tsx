import { useAuth } from "../context/AuthContext";
import styles from "./Home.module.css";
import { Divider } from "antd";

export const Home = () => {
  const { user } = useAuth();
  if (!user) return;

  return (
    <div className={styles.layout}>
      <div className={styles.contenedor}>
        <header className={styles.header}>
          <div>
            <h2>Bienvenido de vuelta</h2>
            <p>Bienvenido a tu dashboard</p>
          </div>
        </header>
        <div className={styles.cartaskpi}>
          <div className={styles.carta}>
            <h4>Citas agendadas</h4>

            <div className={styles.valor}>$1111</div>
            <div className={styles.descripcion}>+2% que el mes pasado</div>
          </div>
          <div className={styles.carta}>
            <h4>Porcentaje de Cancelaciones</h4>
            <div className={styles.valor}>$1111</div>
            <div className={styles.descripcion}>-2% que el mes pasado</div>
          </div>
          <div className={styles.carta}>
            <h4>Ingreso Mensal Estimado</h4>
            <div className={styles.valor}>$1111</div>
            <div className={styles.descripcion}>+2% que el mes pasado</div>
          </div>
        </div>

        <div className={styles.seccion}>
          <div className={styles.contenedorCitas}>
            <h3>Citas de hoy</h3>
            <Divider style={{ paddingTop: "-20px" }} />
            <table className={styles.tabla}>
              <tbody>
                <tr>
                  <td>Nombre Cliente</td>
                  <td>Nombre Servicio</td>
                  <td>Hora Cita</td>
                  <td>
                    <button className={styles.eliminarBtn}>eliminar</button>
                  </td>
                </tr>
                <tr>
                  <td>Nombre Cliente</td>
                  <td>Nombre Servicio</td>
                  <td>Hora Cita</td>
                  <td>
                    <button className={styles.eliminarBtn}>eliminar</button>
                  </td>
                </tr>
                <tr>
                  <td>Nombre Cliente</td>
                  <td>Nombre Servicio</td>
                  <td>Hora Cita</td>
                  <td>
                    <button className={styles.eliminarBtn}>eliminar</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={styles.kpigrafico}>
            <h3>KPI</h3>
            <Divider />
            <div className={styles.grafico}>Gráfico</div>
          </div>
        </div>
      </div>
    </div>
  );
};
