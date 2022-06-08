let menu = document.querySelector('.menu-icon')
let navbar = document.querySelector('.menu')

menu.onclick = () => {
  navbar.classList.toggle('active')
  menu.classList.toggle('move')
  bell.classList.remove('active')
}

let bell = document.querySelector('.notification')
document.getElementById('bell-icon').onclick = () => {
  bell.classList.toggle('active')
}

var swiper = new Swiper('.trending-content', {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    1068: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
})

// Custom Scroll Bar

window.onscroll = function() {
  scrollFunction()
}

const scrollFunction = () => {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight
  var scrolled = (winScroll / height) * 100
  document.getElementById('scroll-bar').style.width = scrolled + '%'
}

// API
// NOTA: DEBES QUITAR LOS SLIDER DEL HTML
// const getGames = async () => {
//   const res = await fetch('http://localhost:3000/api/games')
//   const games = await res.json()
//   const wrapper = document.getElementById('games-list')

//   const template = (game) => `
//     <div class="swiper-slide">
//       <div class="box">
//         <img src="${game.imgURL}" alt="${game.title}">
//         <div class="box-text">
//           <h2>${game.title}</h2>
//           <h3>Action</h3>
//           <div class="rating-download">
//             <div class="rating">
//               <i class='bx bxs-star' ></i>
//               <span>4.7</span>
//             </div>
//             <a href="#" class="box-btn"><i class='bx bx-down-arrow-alt' ></i></a>
//           </div>
//         </div>
//       </div>
//     </div>
//   `
//   wrapper.innerHTML = games.map(template).join('')
  
// }

// getGames()