import { bool, func, node } from 'prop-types';
import { useEffect } from 'react';
function BackdropModal({
  onClose,
  open,
  children,
}) {
  useEffect(() => {
    if (open) {
      window.scrollTo({
        top: (document.documentElement.scrollHeight - window.innerHeight) / 2,
        behavior: 'smooth',
      });
    }
  }, [open]);
  return (
    <div
      onClick={onClose}
      className={`
        fixed inset-0 w-screen min-h-screen -mt-[152px] transition-colors grid place-items-center bg-social-black/50
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
