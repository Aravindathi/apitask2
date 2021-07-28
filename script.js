
 
fetch('https://api.aniapi.com/v1/anime')
  .then((response) => response.json())
  .then((data) =>getData(data))

  const source = []
  function getData(data){
    data.data.documents.forEach((el) => {source.push(el)})
    console.log(source)



    // creating a individual element for each anime
      loadData(source)
      function loadData(array)
      {
         array.forEach(elem =>{
         const card = document.createElement("div")
         content.append(card)
         card.setAttribute("class","card")
         card.innerHTML =`
         <img src="${elem.cover_image}" alt="Image missing">
         <h3>ANIME NAME </br></br>${elem.titles.en}</h3>
         <p>SEASONED YEAR</br>${elem.season_year}</p>
         <a href="${elem.trailer_url}">Click for Trailer</a>`
          })
       }
      }

// Creating overall layout 
  const header = document.createElement("div")
  header.setAttribute("class","head")
  header.innerHTML =`<h1>LIST OF ANIME....</h1>
  <input type="search" name="Search Anime" id="ser" placeholder="Search your anime">
    <button type="submit">Search</button>`
  document.body.append(header)

  const content = document.createElement("div")
  content.setAttribute("class","content")
  document.body.append(content)





 




