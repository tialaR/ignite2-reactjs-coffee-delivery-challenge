
export const formatNumberInCurrency = (
  value: number
) => {
  return value.toFixed(2) // casas decimais
        .replace('.', ',')
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
};

