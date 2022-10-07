import { ObjectId } from "mongoose"

export type ReturnData = {
    error: string,
    description: string,
}


export type TokenValidatationRequest = {
    token: string,
    hash: string,
}

export type TicketDocument = {
    api_type: string,
    external_player_id: string,
    end_time: Date,
    start_time: Date,
    game_name:string,
    game_id: string,
    merchant_id: string,
    player_id: string,
    min_bet: number,
    max_bet: number,
    balance: number,
    currency: string,
    language: string,
    possible_bets: Array<number>,
    game_mode: string,
    status: string,
    merchant_name:string
}
 

export type ResultDocument = {
    bet: number,
    game_id: string,
    player_id: string,
    game_name: string,
    symbols: Array<string>,
    date: Date,
    winning_places: Array<string>,
    total_win: number,
    balance: number,
    game_result: any,
    round_id: string,

    id?: string
}


export type PlayerDocument = {
    balance: number,
    currency: string,
    external_player_id: string,
    date: Date,
    merchant_id: string,
    id?: string
}

export type PlayerBalance = {
    balance: number,
    player_id: string,
}

export type seamlessPlayerDocument = {
    balance: number,
    currency: string,
    external_player_id: string,
    date: Date,
    merchant_id: string,
    id?: string
}

export type seamlessPlayerBalance = {
    balance: number,
    player_id: string,
}

export type MerchantResponse = {
    secret_key :string,
    url :string,
    authenticate_url :string,
    result_url :string,
    balance_url :string,
    refund_url:string,
    bet_url :string,
    api:string,
    name :string,
    id?: string,
    merchant_token?:string,
    currency:Array<string>
}


export type GameResponse = {
    id?:string,
    game_name:   string,
    game_type_id:  string,
    game_type_desc: string,
    game_url:   string,
    secret_key: string,
    possible_bets?:Array<number>
}

export type GetAllGameResponse = {
    id?:string,
    game_name:   string,
    game_type_id:  string,
    game_type_desc: string,
    //game_url:   string,
    demo_available:boolean
}


export type MerchantGame = {
    id?:string,
    possible_bets?:Array<number>
}

export type BalanceTransferDocument = {
  amount:number, 
  balance:number, 
  date: Date, 
  external_player_id:string, 
  external_transaction_id : string, 
  merchant_id :string, 
  player_id:string

}

export type BalanceTransferResponse = {
    transaction_id:string, 
    balance:number, 
    amount:number, 
    date: Date, 
  
  }
  
  