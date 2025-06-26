import Logo from '../Logo'
import UserImg from '../../assets/user.svg'

import './index.css'

export default function Header() {

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top ">
            <div className="container-fluid">
                <div>
                    <button className="navbar-toggler border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <Logo />
                </div>
                <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 justify-content-lg-center">
                            <li className="nav-item">
                                <a className="nav-link " aria-current="page" href="#">Xbox</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">Nintendo</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Playstation</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    PC
                                </a>
                                <ul className="dropdown-menu ">
                                    <li><a className="dropdown-item" href="#">Todos os produtos PC</a></li>
                                    <li><a className="dropdown-item" href="#">Steam</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <a className="nav-link d-flex" href='/login'>
                        <img src={UserImg} alt="" className='rounded-4 me-1' />
                        Entrar
                    </a>
                </div>
            </div>
        </nav>
    )
}
