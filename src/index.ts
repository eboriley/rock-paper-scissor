const items : string[] = ["🪨","📃","✂️"]

function randomItem (item: string[]) : string {
    const randomInt : number = Math.floor(Math.random() * 3)
    return item[randomInt]
}

let hand1 : string = randomItem(items)
let hand2 : string = randomItem(items)

let pair : string[] = [hand1,hand2]
console.log(pair)
pair = pair.sort()

interface Outcome {
    winner: string
    combination: string[]
}

const outcomes : Outcome[] = [
    {winner:"🪨" , combination :["🪨","✂️"] },
    {winner:"✂️" , combination :["📃","✂️"] },
    {winner:"📃" , combination :["🪨","📃"] }
]

outcomes.forEach(x => {
    x.combination.sort()
    if(pair[0] === pair[1]){
        console.log("Its a tie")
    }
    if(pair[0] === x.combination[0] && pair[1] === x.combination[1]) {
        announceWinner(x)
    }
})

function announceWinner(outcome: Outcome) : void {
    if(outcome.winner === "🪨"){
        if(hand1 === "🪨"){
            console.log("hand one wins")
        }
        if(hand2 === "🪨")
        console.log("hand two wins")
    }

    if(outcome.winner === "✂️"){
        if(hand1 === "✂️"){
            console.log("hand one wins")
        }
        if(hand2 === "✂️"){
            console.log("hand two wins")
        }
    }

    if(outcome.winner === "📃"){
        if(hand1 === "📃"){
            console.log("hand one wins")
        }
        if(hand2 === "📃"){
            console.log("hand two wins")
        }
    }
}


