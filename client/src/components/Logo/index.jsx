import LogoImg from '../../assets/LogoImg.svg'

import './index.css'

export default function Logo() {

    return (
        <a className="navbar-brand " href="/">
            <img src={LogoImg} alt="Logo do site" className='LogoImg me-2'/>
            SimiPlay
        </a>
    )
}
