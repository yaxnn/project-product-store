import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import getBaseUrl from '../../../utils/baseURL'

const baseQuery = fetchBaseQuery({
    baseUrl: `${getBaseUrl()}/api/games`,
    credentials: 'include',
    prepareHeaders: (Headers) => {
        const token = localStorage.getItem('token');
        if(token){
            Headers.set('Authorization', `Bearer ${token}`)
        }
        return Headers;
    }
})


const gamesApi = createApi({
    reducerPath: 'gameApi',
    baseQuery,
    tagTypes: ['Games'],
    endpoints: (builder) => ({
        fetchAllGames: builder.query({
            query: () => "/",
            providesTags: ["Games"]
        })
    })
     
})


export const {useFetchAllGamesQuery} = gamesApi;
export default gamesApi;