import Input from "../components/Input"
import Button from "../components/Button"

export default function RegisterPage() {

    return (
        <div className="row h-100 ">
            <div className="ImageContainer d-none d-md-block col-md-7"></div>
            <div className="d-flex justify-content-center flex-column col-md-5 bg-custom px-3">
                <h1 className="text-center mb-4 fw-bold">Cadastro</h1>
                <form className="">
                    <Input type="name" label="Nome" placeholder="Digite seu nome" />
                    <Input type="email" label="E-mail" placeholder="Digite seu email" />
                    <Input type="password" label="Senha" placeholder="Digite sua Senha" />
                    <Button type="submit" text="Cadastrar-se" />
                </form>
                <p className="d-block text-center mt-3 text-white fw-medium">Já tem conta ? <a className="link-danger" href="/login">Entrar</a></p>
            </div>
        </div>
    )
}
