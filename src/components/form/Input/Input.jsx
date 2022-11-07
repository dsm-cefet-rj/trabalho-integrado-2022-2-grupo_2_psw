import styles from './Input.module.css'

export default function Input({tipo, nome, texto, placeholder, valor}){

    return(
        <div className={styles.input_container}>
            <label htmlFor={nome}>{texto}</label>
            <input type={tipo} id={nome} name={nome} placeholder={placeholder} value={valor} />
        </div>
    )
}