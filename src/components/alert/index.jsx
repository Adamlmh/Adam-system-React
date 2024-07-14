import { useEffect } from "react";

import "./style.css";

function Alert({ message, onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 2000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return <div className="alert">{message}</div>;
}

export default Alert;
