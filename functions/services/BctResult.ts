import {Winner} from "../type/variable";

export class BaccaratResult {
    public static  getWinner(hash: string) {
      try {
        //const result = await tronWeb.trx.getTransactionInfo(hash)  
        const CardNumber = new RegExp('^[1-9]+$');
        var ReturnWinner :Winner = Winner.NONE;
        var BankerCard = 0;
        var PlayerCard = 0;    
        let AddIndex :number = 0;

        console.log('------------------------------------------------')
        console.log(hash)        

        let FinalHashToCalculate ='';
        let PlayerCardCombinations = '';
        let BankerCardCombinations = '';
        let AddPlayerCard = false; 
        let AddBankerCard = false;
        let CheckWinner = false;
        for (let c of hash) {
            let CardFigure = 0;
         
            
            if (CardNumber.test(c)) { CardFigure = Number(c); }
            else 
            {
                if ((c === "j") || (c === "q") || (c === "k") || (c === "a"))
                { CardFigure = 10; }
                else if (c === "a") 
                { CardFigure = 10; }
            }

            if (CardFigure > 0)
            {                              
                FinalHashToCalculate += c;

                //First Card 
                if (AddIndex === 0)
                {PlayerCard += CardFigure;  AddIndex += 1; PlayerCardCombinations += c; }
                                
                //Second Card
                else if (AddIndex === 1)
                { BankerCard += CardFigure; AddIndex += 1;BankerCardCombinations += c; }                
                
                //Third Card
                else if (AddIndex === 2)
                {PlayerCard += CardFigure;  AddIndex += 1;PlayerCardCombinations += c ; }

                //Fourth Card
                else if (AddIndex === 3)
                {
                    BankerCard += CardFigure;  AddIndex += 1; BankerCardCombinations += c ;

                    //Decide If To Add Card For Dealer / Player
                    let playerHandTotal = (PlayerCard  % 10);
                    let bankerHandTotal = (BankerCard  % 10);
                    if (!(playerHandTotal >= 8 || bankerHandTotal >= 8)) {
                        if (playerHandTotal <= 5) { AddPlayerCard = true;}
                        else {
                            if (bankerHandTotal <= 5) {AddBankerCard = true;}
                        }
                    }
                    else { CheckWinner = true;}                    
                }
                else if (AddIndex === 4)
                {
                    AddIndex += 1;

                    if (AddPlayerCard)
                    {PlayerCard += CardFigure;   PlayerCardCombinations += c ; }

                    if (!AddBankerCard)
                    { CheckWinner = true;}  
                }

                else if (AddIndex === 5)
                {
                    if (AddBankerCard) { BankerCard += CardFigure; AddIndex += 1; CheckWinner = true; BankerCardCombinations += c ;}                
                }
                
                if (CheckWinner)
                {
                    console.log("CheckWinner")
                    let playerHandTotal = (PlayerCard  % 10);
                    let bankerHandTotal = (BankerCard  % 10);
                    ReturnWinner = this.determineWinner(bankerHandTotal, playerHandTotal); 
                    
                    console.log('FinalHash:' + FinalHashToCalculate)
                    console.log('PlayerHandTotal: ' + PlayerCard);
                    console.log('BankerHandTotal: ' + BankerCard);                                        
                    console.log('PlayerCardCombinations : ' + PlayerCardCombinations);
                    console.log('BankerCardCombinations : ' + BankerCardCombinations);
                    console.log('Winner : ' + ReturnWinner);
                    break;
                }
                
            }
            
        }
        console.log('------------------------------------------------')
        return ReturnWinner;
      } catch (error) {      
        return "ERROR";
      }
    }

    public static  determineWinner(banker: Number, player: Number) 
    {

      if (banker == player) {return Winner.Tie;}
      else if (player > banker) {return Winner.Player;}      
      else if (player < banker) {return Winner.Banker;}
      else {return Winner.NONE;}
    }
}