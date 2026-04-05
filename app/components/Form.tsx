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

    // ✅ Regex
    const regexNombre = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    const regexTelefono = /^[0-9]+$/;
    const regexProblema = /^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ\s+]+$/;

    const validate = () => {
        if (!form.nombre || !form.telefono || !form.problema) {
            setMsg("Todos los campos son obligatorios");
            return false;
        }

        if (!regexNombre.test(form.nombre)) {
            setMsg("El nombre solo debe contener letras");
            return false;
        }

        if (!regexTelefono.test(form.telefono)) {
            setMsg("El teléfono solo debe contener números");
            return false;
        }

        if (!regexProblema.test(form.problema)) {
            setMsg("La descripción solo debe contener letras y números");
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
            await fetch("https://sheetdb.io/api/v1/mxv920vlgabgf", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    data: form
                })
            });

            setMsg("Solicitud enviada ✅");
            const mensaje = `Hola, mi nombre es ${form.nombre}, teléfono: ${form.telefono}, problema: ${form.problema}`;
            window.location.href = `https://wa.me/573138947226?text=${encodeURIComponent(mensaje)}`;
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
                onKeyPress={(e) => {
                    if (!/[a-zA-Z\s]/.test(e.key)) e.preventDefault();
                }}
            />

            <input
                name="telefono"
                placeholder="Teléfono"
                value={form.telefono}
                onChange={handleChange}
                style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
            />

            <select
                name="problema"
                value={form.problema}
                onChange={handleChange}
                style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
            >
                <option value="" disabled hidden>
                    ¿Qué problema tiene tu PC?
                </option>
                <option value="Limpieza">Limpieza</option>
                <option value="Mantenimiento">Mantenimiento</option>
                <option value="Instalación de programas">Instalación de programas</option>
                <option value="Instalación de SSD">Instalación de SSD</option>
                <option value="Limpieza + Mantenimiento + Instalación de programas">
                    Limpieza + Mantenimiento + Instalación de programas
                </option>
            </select>

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