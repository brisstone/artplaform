import { API, ArtsplitApiResponse } from "services/API.service";

const MODEL= 'listing'

export default class ListingService {
    static getAll (): Promise<ArtsplitApiResponse> {
        return API.get(MODEL.concat('s'))
    }

    static get (id: string): Promise<ArtsplitApiResponse> {
        return API.get(`${MODEL}/listing_details?listing_id=${id}`)
    }

    static getSingleListing (queryParams: Record<string, any> = {}): Promise<ArtsplitApiResponse> {
        const query = new URLSearchParams(queryParams).toString()
        return API.get(`${MODEL}/single_listings?${query}`)
    }
}