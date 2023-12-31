import { USERS_URL } from '../constants';
import { apiSlice } from './apiSlice';

export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        register: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}`,
                method: 'POST',
                body: data
            }),
            keepUnusedDataFor: 5
        }),

        login: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/login`,
                method: 'POST',
                body: data
            }),
            keepUnusedDataFor: 5
        }),

        logout: builder.mutation({
            query: () => ({
                url: `${USERS_URL}/logout`,
                method: 'POST'
            }),
            keepUnusedDataFor: 5
        }),

        profile: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/profile`,
                method: 'PUT',
                body: data,
            })
        })
    })
});

export const { useRegisterMutation, useLoginMutation, useLogoutMutation, useProfileMutation } = usersApiSlice;
