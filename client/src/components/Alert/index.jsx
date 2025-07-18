import { useEffect } from "react";

export default function Alert({ type = "success", message = "", show = false, onClose }) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div
      className={`alert alert-${type} position-fixed start-50 translate-middle-x shadow-lg`}
      style={{ zIndex: 1050, top:"20px", minWidth: "300px" }}
      role="alert"
    >
      {message}
      <button
        type="button"
        className="btn-close"
        aria-label="Close"
        onClick={onClose}
        style={{ position: "absolute", top: "8px", right: "8px" }}
      ></button>
    </div>
  );
}