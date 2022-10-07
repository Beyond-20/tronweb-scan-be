import { func } from "joi";



export enum Winner {
    Player = "P",
    Banker = "B",
    Tie = "T",
    NONE = ""
}

export enum GameMode {
    CashPlay = "C", 
    DemoPlay = "D", 
    FreeCreditPlay = "F",
    
    Competition = "C",
    UltraPlay = "U",
    DemoGame = "DM"
}
export function GetGameMode(mode: GameMode) {
    switch (mode.toUpperCase()) {
        case GameMode.CashPlay:
            return "cash_play";
        case GameMode.DemoPlay:
            return "demo_play";
        case GameMode.FreeCreditPlay:
            return "free_credit_play";            
        case GameMode.UltraPlay:
        case GameMode.DemoGame:
            return "ultra_play";                
        default: return "";

    }
}