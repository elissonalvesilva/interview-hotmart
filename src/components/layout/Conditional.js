const Conditional = ({ condition, children }) => {
  return !!condition && children;
};

export default Conditional;
