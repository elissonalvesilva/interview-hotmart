export default {
  formartDate(date) {
    return new Intl.DateTimeFormat('pt-BR').format(date);
  },
  capitalizeText(string) {
    return (
      string.charAt(0).toUpperCase() +
      String(string.slice(1)).toLocaleLowerCase()
    );
  },
  formatCurrency(value, currency) {
    function getLocale(localeCurrency) {
      const locale = {
        BRL: 'pt-BR',
        EUR: 'de-DE',
        USD: 'en-US',
        JPY: 'jp-JP',
        CNY: 'zh-CN',
      };

      return locale[localeCurrency];
    }

    return new Intl.NumberFormat(getLocale(currency), {
      style: 'currency',
      currency,
    }).format(value);
  },
};
