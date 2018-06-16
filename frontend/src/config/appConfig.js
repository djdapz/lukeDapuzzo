const LOCAL = "LOCAL";
const DEV = "DEV";
const PROD = "PROD";
const TEST = "TEST";

console.log(env);

function loadEnv(options) {
    return options[env.environment] || options[LOCAL]
}

let LUKE_API = loadEnv({
    LOCAL: "http://localhost:8080",
    DEV: "https://luke-dapuzzo-api-dev.cfapps.io",
    PROD: "https://luke-dapuzzo-api.cfapps.io",
    TEST: "www.garbage-url.com"
});

export {LUKE_API}
