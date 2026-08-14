import { useEffect, useRef } from "react";
import check from "../assets/check.svg";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function Modal({ isOpen, onClose }: ModalProps) {
  const modalRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const modalEl = modalRef.current;
    if (!modalEl) return;

    if (isOpen) {
      modalEl.showModal();
    } else {
      modalEl.close();
    }
  }, [isOpen]);

  return (
    <dialog ref={modalRef} className="modal">
      <div>
        <img src={check} alt="" />
        <p>
          Success!
          <span>Your account has been succesfully created.</span>
        </p>

        <button id="close-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </dialog>
  );
}

export default Modal;
