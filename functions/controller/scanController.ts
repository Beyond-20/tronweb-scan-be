import { Request, Response } from 'express'
//import axios from 'axios';
import * as env from "dotenv";
import { Tron } from "../services/Tron";
import { BaccaratResult} from "../services/BctResult";
import {Winner} from "../type/variable";


env.config();

// for Casino Operator to deposit/withdraw player's balance
export async function ScanLatestTX  (req:Request, res:Response) {
     try {      
      const CurrBlock = await Tron.getCurrentBlock();      
      console.log(CurrBlock.block_header.raw_data.number);
      let BlockInfo = await Tron.getTransactionFromBlock(Number(CurrBlock.block_header.raw_data.number));            
      BlockInfo = BlockInfo.slice(0,3);

      //res.send(BlockInfo)
      var _PlayerWin = 0;
      var _BankerWin = 0;
      var _TieWin = 0;
      var _NoResult = 0;      

      var _results: any = [];      
      BlockInfo?.forEach((doc:any) => { 
        var WinResult:any = BaccaratResult.getWinner(doc.txID);       
        console.log(WinResult)    
        // switch(WinResult)
        // {
        //   case Winner.Banker:
        //      _BankerWin += 1;     
        //      break;       
        //   case Winner.Player:
        //     _PlayerWin += 1;
        //     break;
        //   case Winner.Tie:
        //       _TieWin += 1;
        //       break;
        //       case Winner.NONE:
        //         _NoResult += 1;
        //         break;
        // }
        var tx = {
          txid : doc.txID,
          win:WinResult,      
        }      
        _results.push(tx);               
      });
      
      var _stat = 
      {

        PlayerWin:_PlayerWin,
        BankerWin:_BankerWin,
        TieWin:_TieWin,
        NoResult:_NoResult,
        Sum:(_PlayerWin + _BankerWin + _TieWin)
      }      
      res.send({ error: "", description: "ok", results: _results, stat: _stat });

    } catch (error) {
      console.log("ERROR", error)
    }   
}

