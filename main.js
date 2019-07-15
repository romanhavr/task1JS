const contacts = [{
        "user": "Igor V",
        "brand": ["VW Golf", "Renault Symbol"],
        "phones": ["380684567934"]
    },
    {
        "user": "Igor S",
        "brand": ["Mazda CX-5", "VV bora"],
        "phones": ["380685438903"]
    },
    {
        "user": "Ruslan",
        "brand": ["Mazda 3", "VV bora", "VAZ 2111"],
        "phones": ["380986784345"]
    },
    {
        "user": "Roman",
        "brand": ["Mercedes GL", "Skoda Roomster"],
        "phones": ["380989909876"]
    },
    {
        "user": "Andriy",
        "brand": ["Peugeot Expert", "Skoda Roomster"],
        "phones": ["380681687096"]
    },
    {
        "user": "Bohdan",
        "brand": ["Volkswagen Polo", "Dacia Logan"],
        "phones": ["380979399997", "380959388887"]
    },
    {
        "user": "Vasya",
        "brand": ["Renault Kadjar", "Dacia Logan"],
        "phones": ["380970999997"]
    },
    {
        "user": "Dmytro",
        "brand": ["KIA Sorento", "Dacia Logan", "Mitsubishi Outlander"],
        "phones": ["380979889977"]
    },
    {
        "user": "Oleksiy",
        "brand": ["Nissan Qashqai", "Mitsubishi Outlander"],
        "phones": ["380998899990"]
    },
    {
        "user": "Yuriy",
        "brand": ["Toyota Camry"],
        "phones": ["380957899632"]
    }
];

let users = new Map();
let uniqueCarsSet = new Set();
let mobileOperatorsSet = new Set();
let groupedUsersByMobileOperator = {};

contacts.map(contact => {
    users.set(contact.user, {
        'brand': contact.brand,
        'phones': contact.phones
    })
});

console.log('Users map: ', users);

users.forEach(val => {
    val.brand.map(carBrand => {
        uniqueCarsSet.add(carBrand)
    })
});
console.log('Unique cars: ', [...uniqueCarsSet]);

users.forEach(val => {
    val.phones.map(phoneNumber => {
        mobileOperatorsSet.add(phoneNumber.slice(0, 5))
    })
});
console.log('Mobile operators: ', mobileOperatorsSet);

mobileOperatorsSet.forEach(operator => {
    groupedUsersByMobileOperator[operator] = [];
    users.forEach(user => {
        user.phones.forEach(phoneNumber => {
            if (phoneNumber.slice(0, 5) === operator) {
                groupedUsersByMobileOperator[operator].push(user)
            }
        })
    })
});

console.log('Users grouped by mobile operators: ', groupedUsersByMobileOperator);

// using REDUCE

let usersReduce = new Map();
let uniqueCarsSetReduce = new Set();
let mobileOperatorsSetReduce = new Set();
let groupedUsersByMobileOperatorReduce = {};

contacts.reduce((acc, curr) =>  acc.set(curr.user, {
            'brand': curr.brand,
            'phones': curr.phones
        }), usersReduce);

console.log('Users map (using REDUCE): ', usersReduce);

usersReduce.forEach(val => {
    val.brand.reduce((acc, curr) => acc.add(curr), uniqueCarsSetReduce)
});

console.log('Unique cars (using REDUCE): ', [...uniqueCarsSetReduce]);

usersReduce.forEach(user => {
    user.phones.reduce((acc, curr) => acc.add(curr.slice(0, 5)), mobileOperatorsSetReduce)
});
console.log('Mobile operators (using REDUCE): ', mobileOperatorsSetReduce);

// mobileOperatorsSetReduce.forEach(operator => {
//     groupedUsersByMobileOperatorReduce[operator] = [];
//     usersReduce.forEach(user => {
//         user.phones.reduce((acc, curr) => {
//             if (curr.slice(0, 5) === operator) {
//                 acc.push(user)
//             }
//         }, groupedUsersByMobileOperatorReduce[operator])
//     })
// });

// console.log('Users grouped by mobile operators (using REDUCE): ', groupedUsersByMobileOperatorReduce);

// не ПОВНІСТЮ працює з reduce. Для останнього "оператора" каже, що "acc" - undefined.

//------------------------------------------

function getUserByPhoneNumber(num) {
    let matchedUserObject = {};
    contacts.map(contact =>  {
        if (contact.phones[0].includes(num)) {
            matchedUserObject[contact.user] = contact
        }
    });    
    return matchedUserObject
};

console.log('Users with matched phone number to "456" - ',getUserByPhoneNumber(456));

const allCars = contacts.reduce((acc, curr) => [...acc, ...curr.brand], []);
function uniqueCars() {
    let carsSet = new Set();
    allCars.map(car => carsSet.add(car));
    return [...carsSet]
}

console.log('All cars: ',allCars);
console.log('Unique cars: ', uniqueCars());
