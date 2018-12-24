function climbingLeaderboard(scores, alice) {
    let key;
    let obj = {};
    for (let i = 0; i < scores.length; i++) {
        key = i;
        obj[key] = scores[i];
    }
    console.log(obj)
}
climbingLeaderboard([100, 100, 50, 40, 40, 20, 10], [5, 25, 50, 120])

//6, 4, 2, 120