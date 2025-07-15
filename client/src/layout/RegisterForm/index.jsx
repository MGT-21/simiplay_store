import { useForm } from "react-hook-form";

import Input from "../../components/Input"
import Button from "../../components/Button"

export default function RegisterForm() {

    const {register, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        console.log(data);
        try {
            const resposta = await fetch("http://localhost:3000/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data),
            });
        
        const resultado = await resposta.json();
        console.log("Servidor respondeu", resultado);
        }catch (erro) {
            console.error("Erro ao enviar dados:", erro);
        }
    };

    return(
        <div className="d-flex justify-content-center flex-column col-md-5 bg-custom px-3">
            <h1 className="text-center mb-4 fw-bold">Cadastro</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input 
                    type="name" 
                    label="Nome" 
                    placeholder="Digite seu nome" 
                    {...register("name")}
                />
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
                <Button type="submit" text="Cadastrar-se" />
            </form>
            <p className="d-block text-center mt-3 text-white fw-medium">Já tem conta ? <a className="link-danger" href="/login">Entrar</a></p>
        </div>
    );
}