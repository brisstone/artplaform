import { API, ArtsplitApiResponse, ResponseDataModel } from "services/API.service";
import { Media } from "./Media.service";

const MODEL= 'artist'

export interface Artist {
    _id: string;
    name: string;
    firstname: string;
    lastname: string;
    othername: string;
    email: string;
    about: string;
    creation_on: string;
    __v: number;
}

export default class ArtistService {
    static getAll (): Promise<ArtsplitApiResponse> {
        return API.get(`${MODEL}/fetch_artists?approved=true`)
    }

    static get (id: number | string): Promise<ArtsplitApiResponse> {
        return API.get(`${MODEL}/artist_details?artist_id=${id}`)
    }
}