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

console.log('Users map: ',users);

users.forEach(val => {
    val.brand.map(carBrand => {
        uniqueCarsSet.add(carBrand)
    })
});
console.log('Unique cars: ',[...uniqueCarsSet]);

users.forEach(val => {
    val.phones.map(phoneNumber => {
        mobileOperatorsSet.add(phoneNumber.slice(0, 5))
    })
});
console.log('Mobile operators: ',mobileOperatorsSet);

mobileOperatorsSet.forEach(operator => {
    groupedUsersByMobileOperator[operator] = [];
    users.forEach(user => {
        user.phones.forEach(phoneNumber => {
            if (phoneNumber.slice(0, 5) === operator) {
                groupedUsersByMobileOperator[operator][groupedUsersByMobileOperator[operator].length] = user
            }
        })
    })
});

console.log('Users grouped by mobile operators: ',groupedUsersByMobileOperator);