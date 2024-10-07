import { node, string } from 'prop-types';

function DropdownItem({ text, edit, icon }) {
  return (
    <p className={`inline-flex items-center gap-x-4 ${edit}`}>
      <span>{icon}</span>
      {text}
    </p>
  );
}

DropdownItem.propTypes = {
  text: string,
  edit: string,
  icon: node
};

export { DropdownItem };