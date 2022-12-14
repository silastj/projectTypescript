import './CampoTexto.css'
import React from 'react'

interface CampoTextoProps {
    placeholder: string
    label: string
    obrigatorio?: boolean
    aoAlterado: (valor: string) => void
    valor: string
    tipo?: 'text' | 'password' | 'date' | 'number'
}

const CampoTexto = ({placeholder, label, obrigatorio, valor, tipo = 'text', aoAlterado}: CampoTextoProps) => {

    const placeholderModificada = `${placeholder}...` 

    const aoDigitado = (evento: React.ChangeEvent<HTMLInputElement>)=> {
        aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>
                {label}
            </label>
            <input 
                value={valor} 
                onChange={aoDigitado} 
                required={obrigatorio} 
                placeholder={placeholderModificada}
                type={tipo}
            />
        </div>
    )
}

export default CampoTexto