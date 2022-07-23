import React from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const RegistrarUsuario = () => {
  const crearUsuario = async () => {
    try {
      const auth = getAuth();

      const resp = await createUserWithEmailAndPassword(
        auth,
        "kevin@ucampdwfs6.io",
        "kevin123"
      );

      console.log(resp);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <header>
        <h1>Registrar usuario</h1>
      </header>
      <main>
        <article>
          <button
            type="button"
            className="btn btn-success"
            onClick={crearUsuario}
          >
            Registrar
          </button>
        </article>
      </main>
    </>
  );
};

export default RegistrarUsuario;
