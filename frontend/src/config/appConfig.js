const LOCAL = "LOCAL";
const DEV = "DEV";
const PROD = "PROD";
const TEST = "TEST";


const environment = function () {
    switch (window.location.origin) {
        case ("http://localhost:3000"):
            return LOCAL;
        case("https://luke-dapuzzo-client.cfapps.io"):
            return DEV;
        case("https://luke-dapuzzo-client-static.cfapps.io"):
            return DEV;
        case("https://lukedapuzzo.com"):
            return PROD;
        case("https://www.lukedapuzzo.com"):
            return PROD;
        case("https://luke-dapuzzo-client-prod.cfapps.io"):
            return PROD;
        case("https://luke-dapuzzo-dot-com-prod.cfapps.io"):
            return PROD;
        default:
            return TEST
    }
}();


function loadEnv(options) {
    return options[environment] || options[LOCAL]
}

let LUKE_API = loadEnv({
    LOCAL: "http://localhost:8081",
    DEV: "https://luke-dapuzzo-api-dev.cfapps.io",
    PROD: "https://luke-dapuzzo-api.cfapps.io",
    TEST: "www.garbage-url.com"
});

export {LUKE_API}
