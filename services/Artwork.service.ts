import { API, ArtsplitApiResponse } from "services/API.service";

const MODEL= 'art'

export interface ArtworkCategory {
    _id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
}

export default class ArtworkService {
    static getAll (): Promise<ArtsplitApiResponse> {
        return API.get(MODEL.concat('s'))
    }
    
    static get (id: string): Promise<ArtsplitApiResponse> {
        return API.get(`${MODEL}/${id}`)
    }
    
    static getCategories (): Promise<ArtsplitApiResponse> {
        return API.get(`${MODEL}/fetch_artwork_categories`)
    }
}