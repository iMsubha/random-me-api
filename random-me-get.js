fetch('https://randomuser.me/api/?gender=female')
.then(res => res.json())
.then(data => {
    const person = data.results[0];
    const name = person.name;
    const fullName = `${name.title} ${name.first} ${name.last}`
    showMe("fullname", fullName);
    showMe("gender", person.gender);
    showMe("phone-number", person.cell);
    showMe("email", person.email);
})

function showMe(id,setText){
    document.getElementById(id).innerText = setText;
}