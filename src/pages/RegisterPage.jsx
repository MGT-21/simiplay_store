import Input from "../components/Input"
import Button from "../components/Button"

export default function RegisterPage() {

    return (
        <div className="row h-100 ">
            <div className="ImageContainer d-none d-md-block col-md-8"></div>
            <div className="d-flex justify-content-center flex-column col-md-4 bg-custom">
                <h1 className="text-center mb-4 fw-bold">Cadastro</h1>
                <form className="px-3">
                    <Input type="name" label="Nome" placeholder="Digite seu nome" />
                    <Input type="email" label="E-mail" placeholder="Digite seu email" />
                    <Input type="password" label="Senha" placeholder="Digite sua Senha" />
                    <div className="d-grid gap-3 mt-5">
                        <Button type="submit" text="Cadastrar-se" />
                    </div>
                    <a href="/login" className="d-block text-center mt-3 text-white">Já tenho uma Conta</a>
                </form>
            </div>
        </div>
    )
}
