'use strict'

//Создать массив объектов Passport

let passport = [
    {
        name: "Ivan",
        lastname: "Ivanov",
        fatheName: "Ivanovich",
        dateOfBirth: "01.01.1970",
        registrationCountry: "Belarus",
        registrationCity: "Minsk",
        registrationAddress: "Lenina st.,21",
        issuedByDepartment: "Leninsky district police department",
        dateOfIssue: "02.03.1985",
        validBefore: "02.03.2000"
    },
    {
        name: "Mike",
        lastname: "Smith",
        fatheName: "Petrovich",
        dateOfBirth: "18.10.1999",
        registrationCountry: "Belarus",
        registrationCity: "Grodno",
        registrationAddress: "Stalina st.,27",
        issuedByDepartment: "Stalinsky district police department",
        dateOfIssue: "01.05.2013",
        validBefore: "01.05.2023"
    },
    {
        name: "John",
        lastname: "Johnson",
        fatheName: "Johnsovich",
        dateOfBirth: "27.11.2000",
        registrationCountry: "Italy",
        registrationCity: "Rome",
        registrationAddress: "Some st.,21",
        issuedByDepartment: "Some district police department",
        dateOfIssue: "11.11.2014",
        validBefore: "11.11.2024"
    }
];



//Функция сортировки массива по переданному имени поля
function sortByParam(passportList, paramName){
}

function byField(field) {
    return (a, b) => a[field] > b[field] ? 1 : -1;
}
  
passport.sort(byField('name'));
passport.forEach(user => console.log(user.name));


//Функция вывода одного элемента на страницу
function displayPassport(passport){

}



//Функция вывода всех элементов массива по средствам отрисовки html-таблицы
function displayPassportAsTable(passportList){

}

function sortByParam(passportList, paramName){
    let sortFunc = function(a, b){
        if (a[paramName] > b[paramName]) {return 1;}
        if (a[paramName] < b[paramName]) {return -1;}
        return 0;}
    return passportList.sort(sortFunc);
}
sortByParam(passport, "name"); 


/* passport.sort(function(a, b){
    if (a.name > b.name) {return 1;}
    if (a.name < b.name) {return -1;}
    return 0;
})
console.log(passport); */




function displayPassport(arr, i){
        let out_arr = document.getElementById('out_arr');
        out_arr.innerHTML = JSON.stringify(arr[i], ' ');
}

displayPassport(passport, 2);