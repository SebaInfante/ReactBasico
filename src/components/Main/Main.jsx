import Button from '../Button/Button'
import './Main.css'

const Main = ({text, color}) => {
    return (
        <div className='main'>
            <h1 className={color}>{text}</h1>
            <Button variante="aceptar" text="Aceptar" ></Button>
            <Button variante="cancelar" text="Cancelar" ></Button>
        </div>
    )
}

export default Main