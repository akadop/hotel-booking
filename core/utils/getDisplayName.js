export default Component => {
  return Component.displayName || Component.name || 'Unknown';
};
