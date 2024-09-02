import { arrayOf, func, number, node, shape, bool } from 'prop-types';
import { Box } from '../box';

function Dropdown({ visible = false, itemsList }) {
  return (
    <Box className={`p-4 ${visible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-200`}>
      <nav>
        <ul className='flex flex-col gap-y-6'>
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
}

export { Dropdown }
