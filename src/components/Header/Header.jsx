import Button from '../Button/Button'
import styles from './Header.css'

const Header = () => {
    return (
        <div className='header' style="
            top: 0px;
            left: 0px;
            width: 1500px;
            height: 399px;
            background: #707070 0% 0% no-repeat padding-box;
            border: 1px solid #707070;
            opacity: 1;">
            
            <h2> uma seleção de produtos </h2>
            <h1> especial para você</h1>
            <p> Todos os produtos desta lista foram selecionados a partir da sua navegação. Aproveite! </p>
            <Button className="btn-header" style="
                background: #FFFFFF 0% 0% no-repeat padding-box;
                box-shadow: 0px 1px 6px #00000029;
                border: 1px solid #707070;
                border-radius: 4px;
                opacity: 1;" />
        </div>
    )
}

export default Header
