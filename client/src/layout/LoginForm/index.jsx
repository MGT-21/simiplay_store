import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";

import Alert from "../../components/Alert";
import Input from "../../components/Input"
import Checkbox from "../../components/Checkbox"
import Button from "../../components/Button"

import './index.css'

export default function LoginForm() {
    const API_URL = import.meta.env.VITE_API_URL;

    const { register, handleSubmit, formState: { errors } } = useForm();

    const [alertMessage, setAlertMessage] = useState("");
    const [alertType, setAlertType] = useState("success");
    const [showAlert, setShowAlert] = useState(false);

    const onSubmit = async (data) => {
        try {
            await axios.post(`${API_URL}/auth/login`, data);
            setAlertType("success");
            setAlertMessage("Login realizado com sucesso!");
            setShowAlert(true);
            //redirecionar ou salvar token
        } catch (error) {
            setAlertType("danger");
            setAlertMessage(error.response?.data?.error || "Erro ao fazer o login");
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

            <h1 className="text-center mb-4 fw-bold">Login</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
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
                    {...register("password", { required: "Senha é obrigatória" })}
                />
                {errors.password && <small className="text-danger">{errors.password.message}</small>}

                <Checkbox label="Lembre-se de mim" />

                <Button type="submit" text="Entrar" />
            </form>
            <p className="d-block text-center mt-3 text-white fw-medium">Não tem conta ? <a className="link-danger" href="/register">Registrar-se</a></p>
        </div>
    );
}