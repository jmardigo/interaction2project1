const chickenCase = str => str
  .split('')
  .map(l => Math.random() < 0.5 &&
    l.toUpperCase() ||
    l.toLowerCase()
  )
.join('')
//honestly idk how the code above works but shoutout jakob on stackoverflow


console.log(title) //debug


function replaceTitle(){
  let title = chickenCase("triumph of culture");
  document.getElementById("title").innerHTML = title;
  console.log(title)
}


//calls the function at intervals of 300ms
setInterval(replaceTitle, 300)