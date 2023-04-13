import { AxiosRequestConfig } from "axios";
import { API, ArtsplitApiResponse } from "services/API.service";

const MODEL= 'auction'

export interface HotAuction {
    auction_id: string;
    auction_active: boolean;
    auction_start_time: string;
    auction_end_time: string;
    minimum_bid_amount: string;
    listing_id: string;
    bid_count: string;
    artwork_id: string;
    artwork_name: string;
    artwork_value: number;
    art_image: string;
    artwork_story: string;
    artist_id: string;
    artist_name: string;
    creation_year: string;
    artwork_creation_year: string;
    trade_mode_id: string;
    trade_mode_name: string;
    trade_mode_alias: string;
}

export default class AuctionService {
    static getAll (): Promise<ArtsplitApiResponse> {
        return API.get(MODEL.concat('s'))
    }

    static get (id: string): Promise<ArtsplitApiResponse> {
        return API.get(`${MODEL}/get_artwork_auction_details/${id}`)
    }

    static getOnsiteAuctionBid (id: string): Promise<ArtsplitApiResponse> {
        return API.get(`${MODEL}/onsite_auction_bids?auction_id=${id}`)
    }

    static getOngoingLeaseAuction (opts?: AxiosRequestConfig): Promise<ArtsplitApiResponse> {
        return API.get(`${MODEL}/view_onsite_auction`, opts)
    }

    static getOngoingLeaseAuctionBids (auctionId: string): Promise<ArtsplitApiResponse> {
        return API.get(`${MODEL}/onsite_auction_bids?auction_id=${auctionId}`)
    }

    static getHotAuctions (): Promise<ArtsplitApiResponse> {
        return API.get(`${MODEL}/view_hot_auctions`)
    }

    static getUpcomingAuctions (): Promise<ArtsplitApiResponse> {
        return API.get(`${MODEL}/upcoming_auctions`)
    }

    static getLiveAuctions (queryParams: Record<string, any> = {}): Promise<ArtsplitApiResponse> {
        const query = new URLSearchParams(queryParams).toString()
        return API.get(`${MODEL}/live_auctions?${query}`)
    }
}