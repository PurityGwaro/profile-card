const displayCurrentTime = () =>{
    const now = new Date()
    const timeString = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  })

document.getElementById('clock').textContent = timeString
}

displayCurrentTime()
setInterval(displayCurrentTime, 1000)

document.getElementById('current-year').textContent = new Date().getFullYear()

const hobbies = ["Playing Chess", "Reading", "Watching Movies", "Evening Walks", "Cooking"]

const dislikes = ["Noise", "Crowded Places", "Drugs", "Slow Service"]

const hobbiesList = document.getElementById("hobbies-list")
hobbiesList.innerHTML = hobbies.map((hobby, index) => `<li class="list-item" data-testid="hobby-${index}">${hobby}</li>`).join("")

const dislikesList = document.getElementById("dislikes-list")
dislikesList.innerHTML = dislikes.map((dislike, index) => `<li class="list-item" data-testid="dislike-${index}">${dislike}</li>`).join("")