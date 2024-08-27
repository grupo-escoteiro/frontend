import { IModalProps } from "..";

function BackdropModal({
  onClose,
  open,
  children,
}) {
  return (
    <div
      onClick={onClose}
      className={`
        fixed inset-0 w-screen h-screen transition-colors grid place-items-center bg-black/50
        ${open ? 'visible bg-black/50' : 'invisible'}
      `}
    >
      {children}
    </div>
  );
}

export { BackdropModal };
