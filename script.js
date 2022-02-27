/* Get user data through input field */
$(document).ready(function() {
  $(document).on('keypress', '#username', function(event) {
    if (event.which === 13) { // check the key was <enter>
      const input = $(this)
      const username = input.val()

      console.log(`Username was: ${username}`)
      getGithubInfo(username)
    }
  });
});

/* Pass this username through to GitHub */
function getGithubInfo(username) {
   const url = `https://api.github.com/users/${username}`

   const xmlhttp = new XMLHttpRequest();
   xmlhttp.open('GET', url, false)
   xmlhttp.send()

   const data = xmlhttp.responseText;
   console.log(data)

   // Get response from the server, including the HTTP status:
  showUser(xmlhttp)
}


/* Handling a successful response from API */
function showUser(xmlhttp) {
  if(xmlhttp.status === 200) {
   // Decode json data as JS object. 
    const json = xmlhttp.responseText;
    const user = JSON.parse(json);
    
    // show the user details
    $('#profile h2').text(`${user.login} is GitHub user #${user.id}`)
    $('#profile .information').append(`<a href=${user.url} class="profile">My GitHub Profile</a>`)
    $('#profile .avatar').append(`<img src=${user.avatar_url}"</img>`)
    console.log('user', user)
  } else {
   // show an error
   $('#profile h2').text('No such user!')
  }
}


// BONUS: switch your getGithubInfo method to run asynchronously 


