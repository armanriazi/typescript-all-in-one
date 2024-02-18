type Status = 'SUCCESS' | 'FAILED';
type Score = number;
function showResult(status: Status, score: Score) {
    if (status === 'SUCCESS' && score === 5) {
        console.log('Great, you got the highest possible score');
    } else if (status === 'SUCCESS') {
        console.log(`Nice, you got ${score}`);
    } else if (status === 'FAILED') {
        console.log('Sorry you failed');
    }
}
showResult('SUCCESS', 5);
showResult('FAILED', 5);