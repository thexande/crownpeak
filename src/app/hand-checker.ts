export class HandChecker {
    hands = [
        {
            hand_name: "Three of a Kind",
            appendex: null,
            cases: {
                match: 3
            }  
        },
        {
            hand_name: "Two Pair",
            appendex: null,
            cases: {
                match: 2
            }
        }
    ]
    // function to loop through our cards and return which hand we have
    checkHand(hand){
        console.log(hand);
    
    }

}
