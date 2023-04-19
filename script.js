function fetchUser(){
    fetch('https://randomuser.me/api')
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        console.log(data.results[0])
        displayUser(data.results[0]);
    });
}

function displayUser(user){
    if(user.gender === "male"){
        document.body.style.backgroundColor = 'blue'
    }
    if(user.gender === "female"){
        document.body.style.backgroundColor = 'purple'
    }
    
    document.querySelector('#name').innerHTML = user.name.first + " " + user.name.last

    document.querySelector('#email').innerHTML = user.email

    document.querySelector('#phone').innerHTML = user.phone

    document.querySelector('#location').innerHTML = user.location.city + " " + user.location.state

    document.querySelector('#age').innerHTML = user.dob.age

    document.querySelector('#picture').src = user.picture.large
}


document.querySelector('#generate').addEventListener('click', fetchUser);



document.addEventListener('DOMContentLoaded', fetchUser);