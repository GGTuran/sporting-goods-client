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
        addProduct: builder.mutation({
            query: (data) => {
                return {
                    url:`products`,
                    method: 'POST',
                    body: data,
                };
            },
            invalidatesTags: ['products']
        }),
        updateProduct: builder.mutation({
            query: (options) => {
                return {
                    url: `products/${options.id}`,
                    method: 'PATCH',
                    body: options.data,
                };
            },
            invalidatesTags: ['products']
        }),
        deleteProduct: builder.mutation({
            query: (data) => {
                return {
                    url: `products/${data}`,
                    method: 'DELETE',
                };
            },
            invalidatesTags: ['products']
        }),
        // new query
    })
})

export const { useGetAllProductsQuery, useAddProductMutation, useDeleteProductMutation, useUpdateProductMutation } = baseApi;