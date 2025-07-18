import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";

import Alert from "../../components/Alert"
import Input from "../../components/Input"
import Button from "../../components/Button"

export default function RegisterForm() {

    const API_URL = import.meta.env.VITE_API_URL;
    const { register, handleSubmit, formState: { errors } } = useForm();

    const [alertMessage, setAlertMessage] = useState("");
    const [alertType, setAlertType] = useState("success");
    const [showAlert, setShowAlert] = useState(false);

    const onSubmit = async (data) => {
        try {
            
            await axios.post(`${API_URL}/auth/register`, data);
            setAlertType("success");
            setAlertMessage("Cadastro realizado com sucesso!");
            setShowAlert(true);

            // Redirecionar ou limpar campos, se quiser
        } catch (error) {
            setAlertType("danger");
            setAlertMessage(error.response?.data?.error || "Erro ao cadastrar");
            setShowAlert(true);
        }
    };

    return (
        <div className="d-flex justify-content-center flex-column col-md-5 bg-custom px-3">

            <Alert
                type={alertType}
                message={alertMessage}
                show={showAlert}
                onClose={() => setShowAlert(false)}
            />

            <h1 className="text-center mb-4 fw-bold">Cadastro</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    type="name"
                    label="Nome"
                    placeholder="Digite seu nome"
                    {...register("name", {
                        required: "Nome é obrigatório"
                    })}
                />
                {errors.name && <small className="text-danger">{errors.name.message}</small>}
                <Input
                    type="email"
                    label="E-mail"
                    placeholder="Digite seu email"
                    {...register("email", { required: "Email é obrigatório" })}
                />
                {errors.email && <small className="text-danger">{errors.email.message}</small>}
                <Input
                    type="password"
                    label="Senha"
                    placeholder="Digite sua Senha"
                    {...register("password", {
                        required: "Senha é obrigatório"
                    })}
                />
                {errors.password && <small className="text-danger">{errors.password.message}</small>}
                <Button type="submit" text="Cadastrar-se" />
            </form>
            <p className="d-block text-center mt-3 text-white fw-medium">Já tem conta ? <a className="link-danger" href="/login">Entrar</a></p>
        </div>
    );
}