window.onload = function(){
    refreshUser();
    document.getElementById("refreshBtn").onclick = refreshUser;
    
    
}

function refreshUser(){
    fetchUser('https://randomuser.me/api/');
    fetchUser1('https://randomuser.me/api/');
    fetchUser2('https://randomuser.me/api/');
    
    
}


async function fetchUser(URL) {
    let response = await fetch(URL);
    let jsonObj = await response.json();
    let firstName = jsonObj.results[0].name.first;
    let lastName = jsonObj.results[0].name.last;
    let profileImageURL = jsonObj.results[0].picture.large;

    document.getElementById("name").innerHTML = firstName + " " + lastName;
    document.getElementById("profileImage").src = profileImageURL;
       
}
async function fetchUser1(URL) {
    let response = await fetch(URL);
    let jsonObj = await response.json();
    let firstName = jsonObj.results[0].name.first;
    let lastName = jsonObj.results[0].name.last;
    let profileImageURL = jsonObj.results[0].picture.large;

    document.getElementById("name1").innerHTML = firstName + " " + lastName;
    document.getElementById("profileImage1").src = profileImageURL;
       
}
async function fetchUser2(URL) {
    let response = await fetch(URL);
    let jsonObj = await response.json();
    let firstName = jsonObj.results[0].name.first;
    let lastName = jsonObj.results[0].name.last;
    let profileImageURL = jsonObj.results[0].picture.large;

    document.getElementById("name2").innerHTML = firstName + " " + lastName;
    document.getElementById("profileImage2").src = profileImageURL;
       
}
