import Axios, { AxiosInstance, AxiosResponse } from 'axios'

const API = Axios.create({
    baseURL: process.env.API_URL,
    validateStatus: (status) => !!status
}) as AxiosInstance & {
    query: (model: string, query: Record<string, any>) => any
}

const CMS = Axios.create({
    baseURL: process.env.CMS_URL,
    validateStatus: (status) => !!status
}) as AxiosInstance & {
    query: (model: string, query: Record<string, any>) => any
}

const YouTube = Axios.create({
    baseURL: 'https://youtube.googleapis.com/youtube/v3'
})

/**
 * Add query method to API and CMS instances.
 */
API.query = (model: string, query: Record<string, any>) => {
    // Query API using query parameters.
}

CMS.query = (model: string, query: Record<string, any>) => {
    // Query API using query parameters.
}


export interface RawApiResponse <T=any> {
    message: string;
    data: T;
    /**
     * There's also a 'status' property in the raw response data,
     * but it's a boolean and we need the 'status' property
     * to internally set the HTTP status code. So we ignore deliberately.
     */
}

export interface ArtsplitApiResponse<T=any> extends RawApiResponse<T> {
    ok: boolean;
    status: number
}

export interface ResponseDataModel<T=any> {
    id: number;
    attributes: T;
}

const transformSuccessResponse = (
    response: AxiosResponse<RawApiResponse>
): ArtsplitApiResponse => {
    return {
        ok: response.status < 400,
        status: response.status,
        data: response.data.data ?? null,
        message: response.data.message
    }
}

const transformErrorResponse = (error: any) => {
    const jsonError = error.toJSON()
    return Promise.resolve({
        ok: false,
        status: -1,
        data: null,
        message: jsonError.message
    })
}

API.interceptors.response.use(transformSuccessResponse, transformErrorResponse)
CMS.interceptors.response.use(transformSuccessResponse, transformErrorResponse)

export { API, CMS, YouTube }