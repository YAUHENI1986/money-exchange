// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    let H, Q, D, N, P;
    // 50¢25¢10¢ 5¢ 1¢
    let ostatok;
    if(currency<=0){return {};}
    if(currency>10000){return {error: "You are rich, my friend! We don't have so much coins for exchange"};} else {
        H = (currency - currency%50)/50;
        ostatok = currency - H*50;
        Q = (ostatok - ostatok%25)/25;
        ostatok = ostatok - Q*25;
        D = (ostatok - ostatok%10)/10;
        ostatok = ostatok - D*10;
        N = (ostatok - ostatok%5)/5;
        ostatok = ostatok - N*5;
        P = ostatok/1;

        let answer = {};
        if(H != 0){answer.H = H}
        if(Q != 0){answer.Q = Q}
        if(D != 0){answer.D = D}
        if(N != 0){answer.N = N}
        if(P != 0){answer.P = P}
        return answer;
    }
}
