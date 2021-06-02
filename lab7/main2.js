window.onload = function(){
    refreshUser2();
    
    document.getElementById("refreshBtn").onclick = refreshUser2;
    
}

function refreshUser2(){
    fetchUser2('https://randomuser.me/api/');
    
}
function refreshUser2(){
    
    fetchUser2('https://randomuser.me/api/')
}


async function fetchUser2(URL) {
    let response = await fetch(URL);
    let jsonObj = await response.json();
    let firstName = jsonObj.results[2].name.first;
    let lastName = jsonObj.results[2].name.last;
    let profileImageURL = jsonObj.results[2].picture.large;

    document.getElementById("name2").innerHTML = firstName + " " + lastName;
    document.getElementById("profileImage2").src = profileImageURL;
       
}