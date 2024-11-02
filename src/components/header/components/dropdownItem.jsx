import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function DropdownItem({ to, text, icon, edit = '' }) {
  return (
    <Link to={to} className={`flex items-center gap-2 px-4 py-2 ${edit}`}>
      {icon}
      <span>{text}</span>
    </Link>
  );
}

DropdownItem.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  edit: PropTypes.string
};

export { DropdownItem };
