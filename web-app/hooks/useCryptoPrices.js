import { useQuery } from 'react-query'
import axios from 'axios'

const fetchCryptoPrices = async (currency) => {
  const response = await axios.get(
    'https://api.coingecko.com/api/v3/coins/markets',
    {
      params: {
        vs_currency: currency,
        order: 'market_cap_desc',
        per_page: 5,   // Fetch exactly 5 coins
        page: 1,
        sparkline: false,
      },
    }
  )
  return response.data
}

export default function useCryptoPrices(currency = 'usd') {
  return useQuery(['cryptoPrices', currency], () => fetchCryptoPrices(currency), {
    refetchInterval: 60000, // auto-refresh every 60s
  })
}
