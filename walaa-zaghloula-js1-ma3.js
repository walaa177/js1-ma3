// question 1
(a,b) => {
    return a - b;
}

// question 2
const gamsUrl = "https://api.rawg.io/api/games?genres=sports";
fetch (gamsUrl)
.then(function(respose){
    return respose.json();
})
.then(function(json){
    json.result.forEach(game => {
        console.log(game.name);
    });
})
.catch(function(error){
    document.location.href = "error.html";
});



// question 3
let string = "These cats are outrageous.";

string.replace("cats", "giraffes");

// question 4
// comment : url is https://my.site.com?userId=7

const queryString = '?userId=7';
const params = new URLSearchParams(queryString);
let id ="";

if(params.has('userID') === false) {
    document.location.href ="third.html";
} else {
    if(params.get('userID') < 10) {
        document.location.href ="first.html";
    } else if(params.get('userID') >= 10) {
        document.location.href ="second.html";
    }
}


// question 5
const container = document.querySelector(".container");
const btn = document.querySelector(".btn");
container.removeChild(btn);


// question 6
const animal = document.querySelector(".animals");
const li = document.createElement('li');
const cows = document.querySelector('.cows');
li.innerText = "Parrots";
li.className = "Parrots";

animal.appendChild(li);
li.after(cows);

// question 7

const endpoint = "https://api.rawg.io/api/games/3801";
const div = document.querySelector('.rating');

fetch(endpoint)
.then((response) => {
    return response.json();
})
.then((json) => {
    div.innerText = json.rating;
})
.catch((error) => {
    console.log(error);
});