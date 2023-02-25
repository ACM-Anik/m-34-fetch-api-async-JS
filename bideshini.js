const loadUser = () => {
    fetch('https://randomuser.me/api/?gender=female')
    .then(res => res.json())
    .then(data => displayUser(data))
}

function displayUser(user){
    const nameTag = document.getElementById('name');
    nameTag.innerHTML = user.results[0].name.first + ' ' + user.results[0].name.last;
    const genderTag = document.getElementById('gender');
    genderTag.innerHTML = user.results[0].gender;
    // console.log(user);
}

loadUser();