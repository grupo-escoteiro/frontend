import { arrayOf, func, number, node, shape, bool, string } from 'prop-types';
import { Box } from '../box';

function Dropdown({
  visible = false,
  itemsList,
  className = ''
}) {
  return (
    <Box
      className={`
        p-4 transition-opacity duration-200 z-20
        ${visible ? 'block' : 'hidden'}
        ${className}
      `}
    >
      <nav>
        <ul className='flex flex-col gap-y-6 items-start'>
          {itemsList && itemsList.map(item => {
            return (
              <li
                key={item.id}
                onClick={item.trigger}
                className={`
                  flex gap-x-2 cursor-pointer hover:text-social-brand
                  transition-colors
                `}
              >
                {item.component}
              </li>
            );
          })}
        </ul>
      </nav>
    </Box>
  );
}

Dropdown.propTypes = {
  visible: bool,
  itemsList: arrayOf(
    shape({
      id: number.isRequired,
      trigger: func.isRequired,
      component: node.isRequired,
    })
  ).isRequired,
  className: string
};

export { Dropdown };