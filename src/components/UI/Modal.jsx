import React, { useEffect, useRef } from "react";

function Modal({ open, onClose, children }) {
  const dialog = useRef();

  useEffect(() => {
    if (open) {
      dialog.current.showModal();
    }
    return () => {
      dialog.current.close();
    };
  }, [open]);

  return (
    <dialog
      ref={dialog}
      className="w-4/5 md:w-1/2 max-h-4/5 p-8 bg-red-700 text-white backdrop:bg-black backdrop:opacity-50"
      onClose={onClose}
    >
      {children}
    </dialog>
  );
}

export default Modal;
