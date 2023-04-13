import { CMS, ArtsplitApiResponse, ResponseDataModel } from "services/API.service";
import { Media } from "./Media.service";

const ARTIST_MODEL= 'artist'
const EDITORIAL_MODEL= 'editorial'

export interface CMSArtist {
    artist_name: string;
    artist_photo?: {
        data: ResponseDataModel<Media>;
    };
    biography: string;
    excerpt: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    thumbnail_image?: { data: ResponseDataModel<Media> } | null;
    artworks?: {
        data: Array<ResponseDataModel<Media>>;
    } | null;
}

export interface EditorialPost {
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    featured_image?: {
        data: ResponseDataModel<Media>;
    } | null;
    tags: string | null;
    views: number | null;
    shares: number | null;
    date: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
}

export default class CMSService {
    static getAllArtists (): Promise<ArtsplitApiResponse> {
        return CMS.get(ARTIST_MODEL.concat('s'))
    }
    
    static getArtist (id: number | string): Promise<ArtsplitApiResponse> {
        return CMS.get(`${ARTIST_MODEL}s/${id}?populate=*`)
    }
    
    static getTrendingArtists (): Promise<ArtsplitApiResponse> {
        return CMS.get(`${ARTIST_MODEL}s?filters[trending][$eq]=true&populate[0]=artist_photo`)
    }
    
    static getArtistsWithArtworks (): Promise<ArtsplitApiResponse> {
        return CMS.get(`${ARTIST_MODEL}s?filter[artworks][$gte]=1&populate[0]=artworks`)
    }
    
    static getArtistsOnAuction (): Promise<ArtsplitApiResponse> {
        return CMS.get(`${ARTIST_MODEL}s?filters[on_auction][$eq]=true&populate[0]=artist_photo`)
    }

    static getAllEditorialPosts (): Promise<ArtsplitApiResponse> {
        return CMS.get(`${EDITORIAL_MODEL}s?populate[0]=featured_image&sort[0]=id:desc`)
    }

    static getPost (id: number): Promise<ArtsplitApiResponse> {
        return CMS.get(`${EDITORIAL_MODEL}/${id}?populate=*`)
    }

    static getPostBySlug (slug: string): Promise<ArtsplitApiResponse> {
        return CMS.get(`${EDITORIAL_MODEL}s?populate=*&filters[slug][$eq]=${slug}`)
    }
}