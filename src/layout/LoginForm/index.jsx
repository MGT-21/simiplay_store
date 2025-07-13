import { useForm } from "react-hook-form";

import Input from "../../components/Input"
import Checkbox from "../../components/Checkbox"
import Button from "../../components/Button"

import './index.css'

export default function LoginForm() {

    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log("Dados recebidos:", data);
    };

    return (
        <div className="d-flex justify-content-center flex-column col-md-5 bg-custom px-3">
            <h1 className="text-center mb-4 fw-bold">Login</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    type="email"
                    label="E-mail"
                    placeholder="Digite seu email"
                    {...register("email")}
                />

                <Input
                    type="password"
                    label="Senha"
                    placeholder="Digite sua Senha"
                    {...register("password")}
                />

                <Checkbox label="Lembre-se de mim" />

                <Button type="submit" text="Entrar" />
            </form>
            <p className="d-block text-center mt-3 text-white fw-medium">Não tem conta ? <a className="link-danger" href="/register">Registrar-se</a></p>
        </div>
    )
}