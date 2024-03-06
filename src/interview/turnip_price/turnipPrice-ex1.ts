///
/// ```bash
/// pnpm ts-node ./src/interview/turnip_price/turnipPrice-ex1.ts --outfile  ./dist/turnipPrice-ex1.js
/// ```
///
/// [Modern-Portfolio-Theory-a-Case-Study-on-Turnips](https://www.shawenyao.com/Modern-Portfolio-Theory-a-Case-Study-on-Turnips/)
/// [Live of ac-turnip](https://ac-turnip.com/)

function waitTimes(prices: number[]): number[] {
    const n: number = prices.length;
    const wait: number[] = new Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        const currentPrice: number = prices[i];
        let daysToWait: number = 0;
        for (let j = i + 1; j < n; j++) {
            if (prices[j] > currentPrice) {
                daysToWait = j - i;
                break;
            }
        }
        wait[i] = daysToWait;
    }
    return wait;
}


let prices = [20, 5, 50, 35, 60, 10];
let wait = waitTimes(prices);
console.log(prices) ;// [20, 5, 50, 35, 60, 10]
console.log(wait);   // [2, 0, 1, 1, 0, 0]

console.log('\n');
prices = [12,0,15,16,12,10,13,21,14,20,19];
wait = waitTimes(prices);
console.log(prices) ;
console.log(wait);   // [1,1,4,2,1,1,0,1,0,0]