// Q58 - Write a simple program that can take lots of scores and find their average.

const averageScore = (scores: number[]): number => {

    let total = scores.reduce((sum, score) => sum + score, 0)
    return total / scores.length

}

console.log(averageScore([75, 85, 95, 80, 70]))

