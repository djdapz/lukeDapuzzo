const LOCAL = "LOCAL";
const DEV = "DEV";
const PROD = "PROD";
const TEST = "TEST";


const environment = function () {
    switch (window.location.origin) {
        case ("localhost:3000"):
            return LOCAL;
        case("luke-dapuzzo-client.com"):
            return DEV;
        case("lukedapuzzo.com"):
            return PROD;
        case("luke-dapuzzo-client-prod.com"):
            return PROD;
        case("luke-dapuzzo-dot-com-prod.com"):
            return PROD;
        default:
            return TEST
    }
}();


function loadEnv(options) {
    return options[environment] || options[LOCAL]
}

let LUKE_API = loadEnv({
    LOCAL: "http://localhost:8080",
    DEV: "https://luke-dapuzzo-api-dev.cfapps.io",
    PROD: "https://luke-dapuzzo-api.cfapps.io",
    TEST: "www.garbage-url.com"
});

export {LUKE_API}
