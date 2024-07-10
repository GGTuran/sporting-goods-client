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
                console.log('from base api', data)
                return {
                    url:`/products`,
                    method: 'POST',
                    body: data,
                };
            },
            invalidatesTags: ['products']
        }),
        getProductById: builder.query({
            query: (id) => ({
                url: `products/${id}`,
                method: 'GET',
            }),
            providesTags: ['products'],
        }),
        updateProduct: builder.mutation({
            query: ({id, data}) => {
                console.log('from base api', id,data)
                return {
                    url: `products/${id}`,
                    method: 'PATCH',
                    body: data,
                };
            },
            invalidatesTags: ['products']
        }),
        deleteProduct: builder.mutation({
            query: (id) => {
                return {
                    url: `products/${id}`,
                    method: 'DELETE',
                };
            },
            invalidatesTags: ['products']
        }),
        // new query
    })
})

export const { useGetAllProductsQuery, useGetProductByIdQuery, useAddProductMutation, useDeleteProductMutation, useUpdateProductMutation } = baseApi;