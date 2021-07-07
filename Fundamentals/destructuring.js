const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar) // Tesla
console.log(otherRandomCar) // Mercedes

//**********************************************************************

const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
console.log(name); // 'name is not defined'
console.log(otherName); // Elon


//**********************************************************************

const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password); // 12345
console.log(hashedPassword); // undefined (password isn't a key in the person object)

//**********************************************************************

const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
console.log(first == second); // first = 2, second = 5 > false
console.log(first == third); // first = 2, third = 2 > true

//**********************************************************************

const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key); // key is not defined
console.log(secondKey); // secondKey is not defined
console.log(secondKey[0]); // 1 - nope... secondKey is not defined
console.log(willThisWork); // willThisWork is not defined






