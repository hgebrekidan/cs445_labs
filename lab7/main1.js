window.onload = function(){
    refreshUser1();

    document.getElementById("refreshBtn").onclick = refreshUser1;
}

function refreshUser1(){
    
    fetchUser1('https://randomuser.me/api/')
}



async function fetchUser1(URL) {
    let response = await fetch(URL);
    let jsonObj = await response.json();
    let firstName = jsonObj.results[1].name.first;
    let lastName = jsonObj.results[1].name.last;
    let profileImageURL = jsonObj.results[1].picture.large;

    document.getElementById("name1").innerHTML = firstName + " " + lastName;
    document.getElementById("profileImage1").src = profileImageURL;
       
}