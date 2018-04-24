const environment = process.env.LUKE_ENV.toUpperCase();

const LOCAL = "LOCAL";
const DEV = "DEV";
const PROD = "PROD";
const TEST = "TEST";

function loadEnv(options) {
    return options[environment] || options[LOCAL]
}

let LUKE_API = loadEnv({
    LOCAL: "http://localhost:8080",
    DEV: "https://luke-dapuzzo-api-dev.cfapps.io",
    PROD: "https://luke-dapuzzo-api.cfapps.io",
    TEST: "www.garbage-url.com"
});

export  {LUKE_API}
