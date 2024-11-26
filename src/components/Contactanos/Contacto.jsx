import React, { useState } from "react";
import emailjs from "emailjs-com";
import {
  ButtonStyled,
  FormStyeld,
  InputStyled,
  LinkContacto,
  Parrafo,
  TextareaStyled,
} from "./ContactoStyled";

const Contacto = () => {
  const [form, setForm] = useState({
    nombre: "",
    correo: "",
    mensaje: "",
  });
  const [sending, setSending] = useState(false);
  const [response, setResponse] = useState("");

  const serviceId = "service_7v02a6c";
  const templateId = "template_h2dhhwf";
  const userId = "5hPI17DL6NyCBEjgF";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // Enviar el formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .send(
        serviceId,
        templateId,
        {
          nombre: form.nombre,
          correo: form.correo,
          mensaje: form.mensaje,
        },
        userId
      )
      .then(
        (result) => {
          setResponse("Mensaje enviado con éxito");
          setForm({
            nombre: "",
            correo: "",
            mensaje: "",
          });
          setSending(false);
        },
        (error) => {
          console.error("Error al enviar el mensaje:", error);
          setResponse("Hubo un error al enviar el mensaje");
          setSending(false);
        }
      );
  };

  return (
    <FormStyeld onSubmit={handleSubmit}>
      <h2>Contáctanos</h2>
      <InputStyled
        type="text"
        name="nombre"
        value={form.nombre}
        placeholder="Nombre"
        onChange={handleChange}
      />
      <InputStyled
        type="email"
        name="correo"
        value={form.correo}
        placeholder="Correo"
        onChange={handleChange}
      />
      <TextareaStyled
        name="mensaje"
        value={form.mensaje}
        placeholder="Mensaje"
        onChange={handleChange}
      ></TextareaStyled>
      <ButtonStyled type="submit" disabled={sending}>
        {sending ? "Enviando..." : "Enviar"}
      </ButtonStyled>

      {response && <p>{response}</p>}

      <div className="contact-links">
        <Parrafo>O también puedes contactarnos en:</Parrafo>
        <LinkContacto
          href="https://wa.me/5491112345678"
          target="_blank"
          className="contact-link"
        >
          WhatsApp
        </LinkContacto>
        <LinkContacto
          href="https://www.instagram.com/tuusuario"
          target="_blank"
          className="contact-link"
        >
          Instagram
        </LinkContacto>
      </div>
    </FormStyeld>
  );
};

export default Contacto;
