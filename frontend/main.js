const addFormListener = () => {
  const gameForm = document.getElementById('game-form')
  gameForm.onsubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(gameForm)
    const { title, price, imgURL, description } = Object.fromEntries(formData)
    let newPrice = parseInt(price)

    const newData = {
      title,
      price: newPrice,
      imgURL,
      description,
    }

    await fetch('http://localhost:3000/api/games', {
      method: 'POST',
      body: JSON.stringify(newData),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    gameForm.reset()
    getGames()
  }
}

const getGames = async () => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  })

  const res = await fetch('http://localhost:3000/api/games')
  const games = await res.json()
  console.log(games)
  const gamesList = document.getElementById('games')
  const template = (game) => `
    <div class="game">
      <h2 class='title'>${game.title}</h2>
      <img src="${game.imgURL}" alt="${game.title}">
      <p>${game.description.substring(0, 120)}...</p>
      <p class="price">${
        game.price == 0 ? 'Free' : formatter.format(game.price)
      }</p>
    </div>      
    `
  gamesList.innerHTML = games.map(template).join('')
}

// {title.length > 30 ? `${title.substring(0, 30)}...` : title}

window.onload = () => {
  getGames()
  addFormListener()
}
