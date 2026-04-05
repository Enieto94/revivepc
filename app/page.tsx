import Form from "./components/Form";

export default function Home() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif" }}>
      {/* HEADER */}
      <section style={{
        background: "#0d1b2a",
        color: "white",
        padding: "40px",
        textAlign: "center"
      }}>
        <img src="/logo.png" alt="RevivePC" style={{ width: "180px" }} />

        <h1>Recupera la velocidad de tu computador</h1>
        <p>Lo dejamos como nuevo en menos de 24 horas 🚀</p>
      </section>

      {/* SERVICIOS */}
      <section style={{ padding: "40px", textAlign: "center" }}>
        <h2>Servicios</h2>

        <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
          <div>
            <h3>🧼 Limpieza</h3>
            <p>Eliminación de polvo y mantenimiento interno</p>
          </div>

          <div>
            <h3>🔥 Pasta térmica</h3>
            <p>Reduce temperatura y mejora rendimiento</p>
          </div>

          <div>
            <h3>⚡ SSD + RAM</h3>
            <p>Hasta 5X más velocidad</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        background: "#00c853",
        color: "white",
        padding: "40px",
        textAlign: "center"
      }}>
        <h2>Solicita tu diagnóstico GRATIS</h2>
      </section>

      {/* FORMULARIO */}
      <section style={{ padding: "40px" }}>
        <Form />
      </section>
    </main>
  );
}