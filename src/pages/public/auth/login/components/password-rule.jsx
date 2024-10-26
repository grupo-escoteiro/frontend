import { bool, string } from 'prop-types';

function PasswordRule({ content, hasError }) {
  return (
    <li
      className={`
        text-semibold text-lg select-none flex items-center gap-x-4
        ${hasError && 'text-social-red font-bold'}
      `}
    >
      {content}
    </li>
  );
}

PasswordRule.propTypes = {
  content: string.isRequired,
  hasError: bool.isRequired,
};

export { PasswordRule };
