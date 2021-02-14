export default function formatPrice(price: number | bigint): string {
  if (price === 0) return 'FREE';

  return new Intl.NumberFormat('en', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 2,
    minimumFractionDigits: 2
  }).format(price);
}
