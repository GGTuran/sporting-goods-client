import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({ baseUrl:'http://localhost:5000/api/' }),
    tagTypes: ['products'],
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => {
                return {
                    url:`products`,
                    method: 'GET',
                }
            },
            providesTags: ['products'],
        }),
    })
})

export const { useGetAllProductsQuery } = baseApi;