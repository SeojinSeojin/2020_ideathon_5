function getUrlParams() {
    let params = {};
    window.location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(str, key, value) { params[key] = value; });
    return params;
}

const pr = getUrlParams();
console.log(pr);

//window.location.href = `127.0.0.1:5500/2020_ideathon_5/result.html?result=${result}`