import Form from "./components/Form";
import Icon from '@mdi/react';
import { mdiWhatsapp } from '@mdi/js';

export default function Home() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif" }}>
      {/* HEADER */}
      <section style={{
        background: "#0d1b2a",
        color: "white",
        padding: "10px",
        textAlign: "center",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "sticky",
        top: "0"
      }}>
        <img src="/logo.png" alt="RevivePC" style={{ width: "180px" }} />

      </section>

      {/* SERVICIOS */}
      <section style={{ padding: "40px", textAlign: "center" }}>

        <div style={{ display: "flex", justifyContent: "center", gap: "40px", flexWrap: "wrap", alignItems: "flex-start" }}>
          <div style={{ flex: "1 1 320px", maxWidth: "500px" }}>
            <img style={{ width: "100%", borderRadius: "16px" }} src="https://media.istockphoto.com/id/625135580/photo/laptop-disassembling-with-screwdriver-at-repair.jpg?s=2048x2048&w=is&k=20&c=ic7LQrMtWGde-jUmrX2bNwuP21KZpU-j-uVCEB88W1s=" alt="Reparación de PC" />
          </div>

          <div style={{ flex: "1 1 320px", maxWidth: "500px", textAlign: "left" }}>
            <div style={{ marginBottom: "24px" }}>
              <h1>Servicios</h1>
              <p>Recupera la velocidad de tu computador, lo dejamos como nuevo en menos de 24 horas 🚀</p>
              <br />

              <div style={{ marginBottom: "24px" }}>
                <h3>🧼 Limpieza</h3>
                <p>Eliminación de polvo y mantenimiento interno</p>
                <h3>🔥 Pasta térmica</h3>
                <p>Reduce temperatura y mejora rendimiento</p>
                <h3>⚡ SSD y/o RAM</h3>
                <p>Hasta 5X más velocidad</p>
                <h3>🛠️Instalación de programas </h3>
                <p>(Antivirus, Diseño, Ofimática o Modelado)</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        background: "#00c853",
        color: "white",
        padding: "15px",
        textAlign: "center"
      }}>
        <h2>Solicita tu diagnóstico <b>GRATIS</b></h2>
      </section>

      {/* FORMULARIO */}
      <section style={{ padding: "40px" }}>
        <Form />
      </section>
      <Icon path={mdiWhatsapp} size={1} />
    </main>
  );
}