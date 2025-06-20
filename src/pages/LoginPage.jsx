import Input from "../components/Input"
import Checkbox from "../components/Checkbox"
import Button from "../components/Button"

import './LoginPage.css'


export default function LoginPage() {

    return (
        <div className="row h-100 ">
            <div className="ImageContainer d-none d-md-block col-md-8"></div>
            <div className="d-flex justify-content-center flex-column col-md-4 bg-custom">
                <h1 className="text-center mb-4 fw-bold">Login</h1>
                <form className="px-3">
                    <Input type="email" label="E-mail" placeholder="Digite seu email" />
                    <Input type="password" label="Senha" placeholder="Digite sua Senha" />
                    <Checkbox label="Lembre-se de mim" />
                    <div class="d-grid gap-3">
                        <Button type="submit" text="Entrar" />
                        <Button type="button" text="Cadastrar-se" href="/cadastro" />
                    </div>
                    <a href="" className="d-block text-center mt-3 text-white">Esqueci minha Senha</a>
                </form>
            </div>
        </div>
    )
}

