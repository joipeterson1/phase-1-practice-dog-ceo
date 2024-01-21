document.addEventListener("DOMContentLoaded", function() {
      fetch("https://dog.ceo/api/breeds/image/random/4")
        .then(res => res.json())
        .then(data => {
          const picturesContainer = document.getElementById("dog-image-container");
          data.message.forEach(image => {
            const img = document.createElement("img");
            img.src = image
            picturesContainer.appendChild(img);
          });
        });
  
    function dogBreeds() {
      fetch("https://dog.ceo/api/breeds/list/all")
        .then(res => res.json())
        .then(data => {
          let breedContainer = document.getElementById('dog-breeds')
          const breeds = Object.entries(data.message)
          breeds.forEach(breed => {
            const li = document.createElement('li');
            li.innerHTML = breed
            breedContainer.appendChild(li);
            li.addEventListener('click', breedFontColor); // Add event listener here

            const filterDropdown = document.getElementById('breed-dropdown')

         filterDropdown.addEventListener('change', filterBreeds)
         function filterBreeds(event){
          const filterTarget = event.target.value
          const filteredBreeds = breeds.filter(breed => breed[0].startsWith(filterTarget))
         
          breedContainer.innerHTML = ''

          filteredBreeds.forEach(breed => {
            const li = document.createElement('li')
            li.innerHTML = breed[0]
            breedContainer.appendChild(li)
            li.addEventListener('click', breedFontColor)
          })
         }
          })
        })
        function breedFontColor(event) {
          event.target.style.color = 'purple'
        }
        }
    dogBreeds()
  })
