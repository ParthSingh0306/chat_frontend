import { useEffect } from "react";
import toast, { Toaster, useToasterStore } from "react-hot-toast";

const ToasterComponent = () => {
  const { toasts } = useToasterStore();
  const TOAST_LIMIT = 2;

  useEffect(() => {
    toasts
      .filter((t) => t.visible) // Only consider visible toasts
      .filter((_, i) => i >= TOAST_LIMIT) // Is toast index over limit?
      .forEach((t) => toast.dismiss(t.id)); // Dismiss – Use toast.remove(t.id) for no exit animation
  }, [toasts]);

  return <Toaster maxCount={2} />;
};

export default ToasterComponent;
