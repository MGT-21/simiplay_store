import { Alert, AlertDescription, AlertTitle } from "./alert";
import { Info, CircleCheck } from "lucide-react";
import { useEffect, useState } from "react";

interface MyAlertProps {
  type: boolean; // true = sucesso, false = erro
  message: string;
  title?: string;
}

export const MyAlert = ({ type, message, title }: MyAlertProps) => {
  const alertTitle = title || (type ? "Sucesso" : "Erro");

  const [show, setShow] = useState(false);
  
  useEffect(() => {
    const timeout = setTimeout(() => setShow(true), 10); // delay pequeno para CSS aplicar
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={`
        fixed left-1/2 transform -translate-x-1/2 z-[9999] w-[90%] max-w-xl
        transition-all duration-500 ease-out
        ${show ? "top-20 opacity-100" : "top-0 opacity-0"}
      `}
    >
      <Alert className={`w-auto ${type ? "text-green-400" : "text-red-400"}`}>
        {type ? <CircleCheck /> : <Info />}
        <AlertTitle className="flex gap-2 items-center">{alertTitle}</AlertTitle>
        <AlertDescription>{message}</AlertDescription>
      </Alert>
    </div>
  );
};