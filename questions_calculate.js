function getUrlParams() {
    let params = {};
    window.location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(str, key, value) { params[key] = value; });
    return params;
}

const pr = getUrlParams();
const pr_len = Object.keys(pr).length;

const suffixes = ['s', 'r', 'p', 'c', 'a'];

if (pr_len > 0) {
    console.log(pr);
    info = sumPR(pr);
    console.log(info);
    const prefix = (findIndexOfMax(info.slice(0, 2)) == 0) ? 'r' : 'i';
    const suffix = suffixes[findIndexOfMax(info.slice(2, 7))];
    const personality = prefix + suffix;
    console.log(personality);
    location.href = `result.html?personality=${personality}`
}

function sumPR(inputs) {
    scoreList = [0, 0, 0, 0, 0, 0, 0];
    for (let i = 0; i < pr_len; i++) {
        scoreList[Math.floor(i / 4)] += Number(inputs[i]);
    }
    return scoreList;
}

function findIndexOfMax(array) {
    let max = array[0];
    let maxIndex = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            maxIndex = i;
            max = array[i];
        }
    }
    return maxIndex;
}