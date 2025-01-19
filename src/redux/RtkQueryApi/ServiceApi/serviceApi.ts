import { baseApi } from "@/redux/baseApi";


const serviceApi = baseApi.injectEndpoints({
    endpoints:(builder) => ({
             getService: builder.query({
                 query:() => ({
                    url: '/users',
                    method:'GET'
                 }),
             }),
    })
});


export const {
    useGetServiceQuery
} = serviceApi;