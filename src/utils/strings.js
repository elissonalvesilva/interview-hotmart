export default {
  formartDate(date) {
    return new Intl.DateTimeFormat('pt-BR').format(date);
  },
};
