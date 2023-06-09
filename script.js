const leoName = "Leo Musvaire";
const leoNumber = "2";
const leoStreet = "Church St.";
const leoPostal = "3105";
const leoBalance = "-10";

const sarahName = "Sarah    ";
const sarahSurname = "Kleinhans";
const sarahNumber = "13";
const sarahStreet = "William Close";
const sarahPostal = "0310";
const sarahBalance = "-5";

// Only change below this line

const leo = {
  name: leoName,
  balance: parseInt(leoBalance),
  "access id": "47afb389-8014-4d0b-aff3-e40203d2107f",
  age: 24,
  address: {
    number: parseInt(leoNumber),
    street: leoStreet,
    "postal-code": parseInt(leoPostal),
  },
};

const sarah = {
  name: sarahName + sarahSurname,
  age: 62,
  "access id": "6b279ae5-5657-4240-80e9-23f6b635f7a8",
  balance: parseInt(sarahBalance),
  address: {
    number: parseInt(sarahNumber),
    street: sarahStreet,
    "postal-code": parseInt(sarahPostal),
  },
};

console.log(leo);
console.log(sarah);
