import { createContext, useContext, useState, useCallback } from "react";
import { MyAlert } from "./my-alert";

interface AlertContextProps {
  showAlert: (message: string, type: boolean, duration?: number, title?: string) => void;
}

const AlertContext = createContext<AlertContextProps | undefined>(undefined);

export const AlertProvider = ({ children }: { children: React.ReactNode }) => {
  const [alertData, setAlertData] = useState<{
    message: string;
    type: boolean;
    title?: string;
  } | null>(null);

  const showAlert = useCallback((message: string, type: boolean, duration = 3000, title?: string) => {
    setAlertData({ message, type, title });
    setTimeout(() => setAlertData(null), duration);
  }, []);

  return (
    <AlertContext.Provider value={{ showAlert }}>
      {children}
      {alertData && (
        <MyAlert
          type={alertData.type}
          message={alertData.message}
          title={alertData.title}
        />
      )}
    </AlertContext.Provider>
  );
};

export const useAlert = () => {
  const context = useContext(AlertContext);
  if (!context) {
    throw new Error("useAlert deve ser usado dentro de AlertProvider");
  }
  return context;
};
