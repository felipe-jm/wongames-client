type Currency = 'R' | 'D';

function numberToCurrency(value: number, currency: Currency): string {
  let currencyFormat;

  if (!value) {
    value = 0;
  }

  switch (currency) {
    case 'R':
      currencyFormat = Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      }).format(value);
      break;
    case 'D':
      currencyFormat = Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'USD'
      }).format(value);
      break;
    default:
      return '';
  }

  return currencyFormat;
}

export default numberToCurrency;
