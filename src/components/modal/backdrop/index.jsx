import { bool, func, node } from 'prop-types';

function BackdropModal({
  onClose,
  open,
  children,
}) {
  return (
    <div
      onClick={onClose}
      className={`
        fixed inset-0 w-full h-full transition-colors flex items-center bg-social-black/50
        ${open ? 'visible bg-social-black/50' : 'invisible'}
      `}
    >
      {children}
    </div>
  );
}

BackdropModal.propTypes = {
  onClose: func,
  open: bool,
  children: node,
};

export { BackdropModal };