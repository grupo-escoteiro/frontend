import { useCallback, useEffect, useRef } from "react";
import { bool, func, node } from "prop-types";

import { BackdropModal } from "./backdrop-modal";

function Modal({
  children,
  open,
  onClose,
  ...rest
}) {
  const modalRef = useRef(null);

  const handleCloseModal = useCallback(e => {
    const pressedKey = e.key;
    if (pressedKey === 'Escape') onClose();
  }, [onClose])

  const focusCatcher = useCallback(e => {
    const { current } = modalRef;
    if (!current?.contains(e.target)) {
      current?.focus();
    }
  }, [])

  useEffect(() => {
    document.addEventListener('keydown', handleCloseModal)
    document.addEventListener('focusin', focusCatcher);

    modalRef.current?.focus();

    return () => {
      document.removeEventListener('keydown', handleCloseModal);
      document.removeEventListener('focusin', focusCatcher);
    }
  }, [focusCatcher, handleCloseModal])

  return (
    <BackdropModal onClose={onClose} open={open}>
      <dialog
        onClick={e => e.stopPropagation()}
        aria-label=""
        open={open}
        className={`
          bg-social-white p-4 w-4/5 rounded max-w-sm overflow-x-scroll
          ${rest.className}
        `}
        ref={modalRef}
        {...rest}
      >
        {children}
      </dialog>
    </BackdropModal>
  );
}

Modal.propTypes = {
  open: bool,
  onClose: func,
  children: node,
}

export { Modal };
