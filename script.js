// const requestAPI = "https://api.github.com/users/razacodedev"

// const xhr = new XMLHttpRequest();
// xhr.open('GET', requestAPI)
// // console.log(xhr);
// xhr.onreadystatechange = function()
// {
//     console.log(xhr.readyState);
    
//     if (xhr.readyState === 4) {
//         const data = JSON.parse(this.responseText)
//         console.log(typeof data);
//         console.log(data.followers);
//     }
// }

// xhr.send();

const APIUrl = "https://api.github.com/users/razacodedev"

const xhr = new XMLHttpRequest();
xhr.open('GET', APIUrl)
// console.log(xhr);
xhr.onreadystatechange = function()
{
    console.log(xhr.readyState);
    
    if (xhr.readyState === 4 && xhr.status === 200) {
        const data = JSON.parse(this.responseText)
        // console.log(typeof data);
        // console.log(data.followers);
        let followers = document.getElementById('followers')
        let repos = document.getElementById('repos')
        let following = document.getElementById('following')
        let location = document.getElementById('location')
        let name = document.getElementById('name')
        let bio = document.getElementById('bio')
        let profileLink = document.getElementById('profile-link')
        let joined = document.getElementById('joined')
        let avatar = document.getElementById('avatar')
        followers.innerHTML = `${data.followers}`
        repos.innerHTML = `${data.public_repos}`
        following.innerHTML = `${data.following}`
        location.innerHTML = `${data.location}`
        name.innerHTML = `${data.name}`
        bio.innerHTML = `${data.bio}`
        avatar.src = data.avatar_url;
        
        let date = new Date(data.created_at);
        joined.innerHTML = date.toLocaleDateString('en-US', {
            day: "numeric",
            month: "short",
            year: "numeric", 
            // time
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        });
        
        profileLink.addEventListener("click", (e) => {
            // e.preventDefault();
            window.open(data.html_url, "_blank");
        });
    }
}
xhr.send();

