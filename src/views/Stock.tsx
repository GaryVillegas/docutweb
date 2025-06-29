export const Stock = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: "1rem",
        alignItems: "stretch",
        minHeight: "400px",
      }}
    >
      {/* Panel izquierdo */}
      <div
        style={{
          flex: 2,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "1rem",
          }}
        >
          <button
            style={{
              backgroundColor: "var(--Primary-Color)",
              color: "white",
              border: "none",
              borderRadius: "6px",
              padding: "0.5rem 1rem",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            + Añadir Stock
          </button>
        </div>

        <div
          style={{
            backgroundColor: "#f4f4f4",
            borderRadius: "10px",
            padding: "1rem",
          }}
        >
          {/* Encabezado */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr auto",
              padding: "0.75rem",
              backgroundColor: "#eaeaea",
              marginBottom: "0.5rem",
              borderRadius: "6px",
              alignItems: "center",
              fontWeight: "bold",
            }}
          >
            <span>Producto</span>
            <span>Disponible</span>
            <span>Editar</span>
          </div>

          {/* Filas */}
          {[1, 2].map((_, i) => (
            <div
              key={i}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr auto",
                padding: "0.75rem",
                backgroundColor: "var(--white-color)",
                marginBottom: "0.5rem",
                borderRadius: "6px",
                alignItems: "center",
              }}
            >
              <span>Producto</span>
              <span>10 unidades</span>
              <button
                style={{
                  backgroundColor: "transparent",
                  border: "1px solid #ccc",
                  padding: "0.3rem 0.6rem",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                +
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Panel derecho */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          backgroundColor: "var(--Gray-Color)",
          borderRadius: "10px",
          padding: "1rem",
          marginTop: "3.5rem",
        }}
      >
        <h3>Gráfico</h3>
      </div>
    </div>
  );
};
