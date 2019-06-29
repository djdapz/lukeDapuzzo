const LOCAL = "LOCAL"
const DEV = "DEV"
const PROD = "PROD"
const TEST = "TEST"
const CYPRESS = "CYPRESS"

const environment = function () {
  switch (window.location.host) {
    case ("localhost:3000"):
      return LOCAL
    case ("localhost:3210"):
      return CYPRESS
    case("luke-dapuzzo-client.cfapps.io"):
      return DEV
    case("luke-dapuzzo-client-static.cfapps.io"):
      return DEV
    case("lukedapuzzo.com"):
      return PROD
    case("www.lukedapuzzo.com"):
      return PROD
    case("luke-dapuzzo-client-prod.cfapps.io"):
      return PROD
    case("luke-dapuzzo-dot-com-prod.cfapps.io"):
      return PROD
    default:
      return TEST
  }
}()

function loadEnv (options) {
  return options[environment] || options[LOCAL]
}

export const LUKE_API = loadEnv({
  LOCAL: "http://localhost:8081",
  DEV: "https://luke-dapuzzo-api-dev.cfapps.io",
  PROD: "https://luke-dapuzzo-api.cfapps.io",
  TEST: "www.garbage-url.com",
  CYPRESS: "http://localhost:3210"
})

export const GOOGLE_ANALYTICS_ID = loadEnv({
  LOCAL: "UA-143002675-1",
  DEV: "UA-143002675-1",
  PROD: "UA-143002675-2",
  TEST: "UA-143002675-1",
  CYPRESS: "UA-143002675-1"
})
