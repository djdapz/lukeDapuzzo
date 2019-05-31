const LOCAL = "LOCAL";
const DEV = "DEV";
const PROD = "PROD";
const TEST = "TEST";

console.log(process.env);
console.log(process.env.LUKE_ENV);

module.exports.environment =(process.env.LUKE_ENV || LOCAL).toUpperCase();

