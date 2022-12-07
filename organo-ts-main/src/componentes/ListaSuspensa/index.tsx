import './ListaSuspensa.css'

interface ListaSuspensaProps {
    aoAlterado: (evento : string) => void
    label: string
    required: boolean
    valor: string
    itens: any
}

const ListaSuspensa = ({ label, required,valor,itens, aoAlterado}: ListaSuspensaProps) => {
    return (
        <div className='lista-suspensa'>
            <label>{label}</label>
            <select onChange={evento => aoAlterado(evento.target.value)} required={required} value={valor}>
                <option value=""></option>
                {itens.map((item: any) => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default ListaSuspensa