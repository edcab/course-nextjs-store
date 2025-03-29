"use client";

import { useEffect } from "react";
import styles from './Error.module.sass'


interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {

    //una vez que se haya producido el error, se ejecuta el efecto
    // y se imprime el error en la consola
    // y se puede enviar a un servicio de seguimiento de errores
    // o realizar otras acciones necesarias
  useEffect(() => {
    console.log(error)
  }, [])

  return (
    <div className={styles.Error}>
      <h1>:c</h1>
      <p>Ha ocurrido un error</p>
      <button onClick={reset}>Intentar de nuevo</button>
    </div>
  )
}