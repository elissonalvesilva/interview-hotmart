export default {
  /**
   * Group data by accountabilityStatus before to render in sidebar
   * @param {Array} data - data from sidebar
   */
  groupBy(data = [], property = '') {
    const newObjectContent = data.reduce((acc, obj) => {
      const key = obj[property];
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(obj);
      return acc;
    }, {});
    return newObjectContent;
  },
};
