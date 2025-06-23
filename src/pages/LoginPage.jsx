import Input from "../components/Input"
import Checkbox from "../components/Checkbox"
import Button from "../components/Button"

import './LoginPage.css'


export default function LoginPage() {

    return (
        <div className="row h-100 ">
            <div className="ImageContainer d-none d-md-block col-md-8"></div>
            <div className="d-flex justify-content-center flex-column col-md-4 bg-custom px-3">
                <h1 className="text-center mb-4 fw-bold">Login</h1>
                <form className="mb-3">
                    <Input type="email" label="E-mail" placeholder="Digite seu email" />
                    
                    <Input type="password" label="Senha" placeholder="Digite sua Senha" />
                    
                    <Checkbox label="Lembre-se de mim" />
                   
                    <Button type="submit" text="Entrar" />
                </form>
                <Button type="link" text="Cadastrar-se" href="/register"/>
                
            </div>
        </div>
    )
}

