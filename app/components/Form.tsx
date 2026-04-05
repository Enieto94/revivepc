"use client";
import { useState } from "react";

export default function Form() {
    const [form, setForm] = useState({
        nombre: "",
        telefono: "",
        problema: ""
    });

    const [loading, setLoading] = useState(false);
    const [msg, setMsg] = useState("");

    // 🛡️ Sanitización básica anti-XSS
    const sanitize = (text: string) => {
        return text
            .replace(/</g, "")
            .replace(/>/g, "")
            .replace(/script/gi, "")
            .trim();
    };

    const handleChange = (e: any) => {
        setForm({
            ...form,
            [e.target.name]: sanitize(e.target.value)
        });
    };

    const validate = () => {
        if (!form.nombre || !form.telefono || !form.problema) {
            setMsg("Todos los campos son obligatorios");
            return false;
        }

        if (!/^[0-9]{7,15}$/.test(form.telefono)) {
            setMsg("Teléfono inválido");
            return false;
        }

        return true;
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setMsg("");

        if (!validate()) return;

        setLoading(true);

        try {
            await fetch("https://sheetdb.io/api/v1/TU_API_ID", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    data: form
                })
            });

            setMsg("Solicitud enviada ✅");
            setForm({ nombre: "", telefono: "", problema: "" });

        } catch (error) {
            setMsg("Error al enviar");
        }

        setLoading(false);
    };

    return (
        <form onSubmit={handleSubmit} style={{ maxWidth: "400px", margin: "auto" }}>
            <input
                name="nombre"
                placeholder="Nombre"
                value={form.nombre}
                onChange={handleChange}
                style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
            />

            <input
                name="telefono"
                placeholder="Teléfono"
                value={form.telefono}
                onChange={handleChange}
                style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
            />

            <textarea
                name="problema"
                placeholder="¿Qué problema tiene tu PC?"
                value={form.problema}
                onChange={handleChange}
                style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
            />

            <button
                type="submit"
                disabled={loading}
                style={{
                    width: "100%",
                    padding: "10px",
                    background: "#00c853",
                    color: "white",
                    border: "none"
                }}
            >
                {loading ? "Enviando..." : "Solicitar servicio"}
            </button>

            <p>{msg}</p>
        </form>
    );
}