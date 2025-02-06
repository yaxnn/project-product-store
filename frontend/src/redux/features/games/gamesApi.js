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
        }),
        fetchGameById: builder.query({
            query: (id) => `/${id}`,
            providesTags: (results,error, id) => [{type: "Games", id}],
        }),
        addBook: builder.mutation({
            query: (newGame) => ({
                url: `/create-game`,
                method: "POST",
                body: newGame
            }),
            invalidatesTags: ["Games"]
        }),
        updateGame: builder.mutation({
            uery: ({id, ...rest}) => ({
                url: `/edit/${id}`,
                method: "PUT",
                body: rest,
                Headers: {
                    'Content-Type': 'application/json'
                }
        }),
        invalidatesTags: ["Games"]
    }),
    deleteGame: builder.mutation({
        query: (id) => ({
            url: `/${id}`,
            method: "DELETE"
        }),
        invalidatesTags: ["Games"]
    })
})  
})


export const {useFetchAllGamesQuery,useFetchGameByIdQuery,useAddBookMutation, useUpdateGameMutation,useDeleteGameMutation} = gamesApi;
export default gamesApi;