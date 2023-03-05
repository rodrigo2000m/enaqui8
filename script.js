const SPEAKERS_URL = "https://rodrigo2000m.github.io/enaqui8/data/speakers.json"

var getJSONData = function(url){
    var result = {};
    return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }else{
        throw Error(response.statusText);
      }
    })
    .then(function(response) {
          result.status = 'ok';
          result.data = response;
          return result;
    })
    .catch(function(error) {
        result.status = 'error';
        result.data = error;
        return result;
    });
}


// Funciones
function showSpeakers(array){
    let htmlContentToAppend = "";

    for(let i=0; i < array.length; i++ ){
        htmlContentToAppend += `
        <div class="col-sm-3 p-2 col-6">
        <div class="card w-100" style="width:400px">
            <img class="card-img-top" src="${array[i].photo}" alt="Card image">
            <div class="card-body">
                <h4 class="card-title">${array[i].name}</h4>
                <p class="card-text">${array[i].description}</p>
            </div>
        </div>
        </div>
        `

    }
    document.getElementById("speakers-content").innerHTML = htmlContentToAppend;
}



document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(SPEAKERS_URL).then(function(resultObj){
        if(resultObj.status=="ok"){
            showSpeakers(resultObj.data.speakers)
        }
    })

  });  