export default {
  formartDate(date) {
    return new Intl.DateTimeFormat('pt-BR').format(date);
  },
  formatStatus(string) {
    return (
      string.charAt(0).toUpperCase() +
      String(string.slice(1)).toLocaleLowerCase()
    );
  },
};
