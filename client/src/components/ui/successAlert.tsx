import {useEffect, useState} from "react";
import { CheckCircle2Icon } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "./alert";

interface SuccessAlertProps {
  message: string
  duration?: number // opcional: tempo em ms
}

export const SuccessAlert = ({ message, duration = 3000 }: SuccessAlertProps) => {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), duration)
    return () => clearTimeout(timer)
  }, [duration])

  if (!visible) return null

    return (
      <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-[9999] w-[90%] max-w-xl">
        <Alert className="w-auto " >
          <CheckCircle2Icon />
          <AlertTitle>Successo!</AlertTitle>
          <AlertDescription>
            {message}
          </AlertDescription>
        </Alert>
      </div>
    )
  }