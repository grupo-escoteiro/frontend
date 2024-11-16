import { arrayOf, func, number, node, shape, bool, string } from 'prop-types';
import { Box } from '../box';

function Dropdown({
  visible = false,
  itemsList,
  className = '',
  onSelect 
}) {
  return (
    <Box
      className={`lg:p-4 lg:mt-2 lg:transition-opacity lg:duration-200 lg:z-20 lg:right-0
        p-4 transition-opacity duration-500 z-20 md:absolute md:right-16 absolute right-16
        ${visible ? 'inline-block' : 'hidden'}
        ${className}
      `}
    >
      <nav>
        <ul className='flex flex-col gap-y-6 items-start'>
          {itemsList && itemsList.map(item => {
            return (
              <li
                key={item.id}
                onClick={() => {
                  item.trigger();
                  onSelect?.(item.id); 
                }}
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
  className: string,
  onSelect: func 
};

export { Dropdown };
