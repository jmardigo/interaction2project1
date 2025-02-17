const chickenCase = str => str
  .split('')
  .map(l => Math.random() < 0.5 &&
    l.toUpperCase() ||
    l.toLowerCase()
  )
.join('')
//shoutout jakob on stackoverflow. you have saved this entire operation
//sara just said i could've just made a gif in photoshop and then plopped it in. 
//WHY DIDN'T I THINK OF THAT


console.log(title) //debug


function replaceTitle(){
  let title = chickenCase("classical punk");
  document.getElementById("title").innerHTML = title;
  console.log(title)
}


//calls the function at intervals of 300ms
setInterval(replaceTitle, 300)