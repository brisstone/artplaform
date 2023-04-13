export interface LiveAuction {
  _id: string;
  active: boolean;
  closed: boolean;
  on_site: boolean;
  listing_id: string;
  minimum_bid_amount: number;
  start_time: string;
  end_time: string; // date string with timezone
  code: string;
  transaction_date: string;
  createdAt: string;
  updatedAt: string;
  __v: 0;
  artist_name: string;
  auction_id: string;
  artwork_id: Artwork;
  trade_mode_id: string;
  trade_mode_name: string;
}

export interface Image {
  id: string;
  code: string;
  url: string;
  asset_id: string;
  public_id: string;
  height: number;
  width: number;
  format: string;
}

export interface Artwork {
  _id: string;
  terms_conditions_accepted: boolean;
  for_sale: boolean;
  deleted: boolean;
  user_id: string;
  name: string;
  story: string;
  value: number;
  creation_year: string;
  code: string;
  dimensions: {
    length_in_cm: string;
    width_in_cm: string;
    depth_in_cm: string;
  };
  artist_id: Artist;
  art_origin_id: string;
  art_type_id: string;
  art_category_id: string;
  creation_on: string;
  image_gallery: Image[];
  video_gallery: [];
  createdAt: string;
  updatedAt: string;
  __v: 1;
  art_image: string;
  proof_of_ownership: ProofOfOwnership;
}

export interface ProofOfOwnership {
  code: string;
  url: string;
  asset_id: string;
  public_id: string;
  height: number;
  width: number;
  format: string;
}

export interface Artist {
  _id: string;
  is_master: boolean;
  approved: boolean;
  name: string;
  firstname: string;
  lastname: string;
  othername: string;
  email: string;
  user_id: string;
  createdAt: string;
  updatedAt: string;
  about: string;
}

export interface Auction {
  _id: string;
  terms_conditions_accepted: boolean;
  for_sale: boolean;
  deleted: boolean;
  user_id: string;
  name: string;
  itemName: string;
  story: string;
  artStory: string;
  value: number;
  creation_year: string;
  creationYear: string;
  code: string;
  dimensions: {
    length_in_cm: string;
    width_in_cm: string;
    depth_in_cm: string;
  };
  artist_id: Artist;
  artistName: string;
  artistImage: any;
  art_origin_id: {
    _id: string;
    name: string;
    creation_on: string;
  };
  art_type_id: {
    _id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
  };
  art_category_id: {
    _id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
  };
  creation_on: string;
  image_gallery: Image[];
  video_gallery: [];
  artworkImageGallery: Array<any>;
  createdAt: string;
  updatedAt: string;
  art_image: string;
  proof_of_ownership: ProofOfOwnership;
  artwork_id: string;
  auction_id: string;
  auction_start_time: string;
  auction_end_time: string;
  auction_active: boolean;
  auction_minimum_bid_amount: number;
  minimumBidAmount: number;
  highestBidder: number;
  auction_closed: boolean;
  listing_id: string;
  listing_status: string;
  total_units: number;
  subscribed_units: number;
  trade_mode: string;
  trade_mode_alias: string;
  trade_mode_id: string;
}

export interface LiveTrade {
  listingId: string;
  artworkId: string;
  artStory: string;
  itemImage: string;
  artistName: string;
  artistUserId: string;
  creationYear: string;
  creatorName: string;
  imageUrls: Image[];
  tradeMode: string;
  totalUnits: number;
  lease_duration_left: number;
  artworkImageGallery: Image[];
  _id: string;
  terms_conditions_accepted: boolean;
  for_sale: boolean;
  deleted: boolean;
  user_id: string;
  name: string;
  story: string;
  value: number;
  creation_year: string;
  code: string;
  dimensions: {
    length_in_cm: string;
    width_in_cm: string;
    depth_in_cm: string;
  };
  artist_id: Artist;
  art_origin_id: string;
  art_type_id: string;
  art_category_id: string;
  creation_on: string;
  image_gallery: Image[];
  video_gallery: [];
  createdAt: string;
  updatedAt: string;
  proof_of_ownership: {
    code: string;
    url: string;
    asset_id: string;
    public_id: string;
    height: number;
    width: number;
    format: string;
  };
  art_image: string;
  listing_id: string;
  listing_status: string;
  price: number;
  previous_price: number;
  total_units: number;
  subscribed_units: number;
  trade_mode: string;
  trade_mode_id: string;
  trade_mode_alias: string;
  subscribed_unit: number;
  listing_price: number;
  market_price: number;
  asset_type: string;
  picture_url: string;
  artwork_story: string;
  artwork_name: string;
  artist_name: string;
}
