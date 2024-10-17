import { motion } from 'framer-motion';
import { node, string } from 'prop-types';

const PageTransition = ({ children, className }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

PageTransition.propTypes = {
  children: node,
  className: string,
};

export { PageTransition };
