/* Pass the username to GitHub */
$(document).ready(function() {
  $(document).on('keypress', '#username', function(event) {
    if (event.which === 13) { // check the key was <enter>
      const input = $(this)
      const username = input.val()

      console.log(`Username was: ${username}`)
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
}






