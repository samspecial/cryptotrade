import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
    'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
    'x-rapidapi-host': process.env.REACT_APP_CRYPTO_RAPIDAPI_HOST,
    
}


const createRequest = (url) =>({ url, headers: cryptoApiHeaders })

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl: process.env.REACT_APP_CRYPTO_API_URL }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`)
        }),
        getCryptosDetails: builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`)
        }),
        getCryptosHistory: builder.query({
            query: ({coinId, timeperiod}) => createRequest(`/coin/${coinId}/history/${timeperiod}`)
        }),
        getExchanges: builder.query({
            query: () => createRequest('/exchanges'),
          })
       
    })
});

export const { useGetCryptosQuery, useGetCryptosDetailsQuery, useGetCryptosHistoryQuery, useGetExchangesQuery } = cryptoApi;





