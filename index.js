// Fetch the data from the server
fetch('db.json')
  .then(response => response.json())
  .then(data => {
    // print the data to the console
    console.log(data);
    // Get a reference to the container element where we'll insert the rental houses
    const container = document.getElementById('rentalHousesContainer');
    
    // Loop through the rental houses and generate HTML for each one
    data.RentalHouses.forEach(rentalHouse => {
      // Create a div element to hold the rental house details
      const rentalHouseDiv = document.createElement('div');
      
      // Add the rental house image
      const img = document.createElement('img');
      img.src = rentalHouse.image;
      rentalHouseDiv.appendChild(img);
      
      // Add the rental house name
      const name = document.createElement('h2');
      name.textContent = rentalHouse.name;
      rentalHouseDiv.appendChild(name);
      
      // Add the rental house price
      const price = document.createElement('p');
      price.textContent = `Price: ${rentalHouse.price}`;
      rentalHouseDiv.appendChild(price);
      
      // Add the rental house description
      const description = document.createElement('p');
      description.textContent = rentalHouse.description;
      rentalHouseDiv.appendChild(description);
      
      // Add the rental house reviews
      const reviews = document.createElement('ul');
      rentalHouse.review.forEach(review => {
        const li = document.createElement('li');
        li.textContent = review;
        reviews.appendChild(li);
      });
      rentalHouseDiv.appendChild(reviews);
      
      // Add the rental house div to the container
      container.appendChild(rentalHouseDiv);
    });
  })
  .catch(error => {
    console.error(error);
  });


  document.querySelector('#orderBtn').addEventListener('click', handleOrder)
function handleOrder() {
    document.querySelector('#description').textContent = 'Waiting for Approval'
}
document.querySelector('#reviewForm').addEventListener('submit', handleSubmit)
function handleSubmit(e) {
    e.preventDefault()
    let li = document.createElement('li')
    li.textContent = e.target.review.value
    document.querySelector('#reviewList').appendChild(li)
    document.querySelector('#reviewForm').reset()
    let btn = document.createElement('button')
    btn.id = 'deletebtn'
    btn.textContent = '  X  '
    li.append(btn)
    btn.addEventListener('click', () => e.target.review.value.remove())
    li.addEventListener('click', () => li.remove())
}

const allStars = document.querySelectorAll('.star')
const currentRating = document.querySelector('.currentstarrating')
allStars.forEach((star, i) => {
    star.onclick = function () {
        let currentStar = i + 1;
        currentRating.innerHTML = `${currentStar} of 5`
        allStars.forEach((star, j) => {
            if (currentStar >= j + 1) {
                star.innerHTML = '&#9733';
            } else {
                star.innerHTML = '&#9734';
            }

        })

    }
})
document.addEventListener('DOMContentLoaded', function () {
    getData();
    getFirstObject();
})
