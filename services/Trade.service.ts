import { API, ArtsplitApiResponse } from "services/API.service";

const MODEL= 'trade'

export default class TradeService {
    static getAll (): Promise<ArtsplitApiResponse> {
        return API.get(MODEL.concat('s'))
    }
    
    static get (id: number): Promise<ArtsplitApiResponse> {
        return API.get(`${MODEL}/${id}`)
    }
    
    static getTradeables (queryParams: Record<string, any> = {}): Promise<ArtsplitApiResponse> {
        const query = new URLSearchParams(queryParams).toString()
        return API.get(`${MODEL}/view_tradeables?${query}`)
    }

    static getPriceHistory (id: string): Promise<ArtsplitApiResponse> {
        return API.get(`${MODEL}/price_history?listing_id=${id}`)
    }
}