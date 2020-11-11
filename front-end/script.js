const submit = document.getElementById("submit");
const datalist = document.getElementById("list");

//first fetch:
document.getElementById("text").addEventListener("keyup", (event) => {
  event.preventDefault();
  let request = event.target.value;
  if (request){
  fetch(`/submit?name=${request}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      myFun(data);
    })
    .catch(function (error) {
      console.log(error);
    });
}});

function myFun(objects) {
  datalist.innerHTML=''
  objects.forEach((element) => {
    var option = document.createElement("option");
    option.value = element.country;
    datalist.appendChild(option);
  });
}


//second fetch:
const text = document.getElementById('text');

document.getElementById("submit").addEventListener("click", (event) =>{
  event.preventDefault();
  let sec_request = text.value;
  fetch(`/getdata?name=${sec_request}`)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    myFun_2(data.body);
  })
  .catch(function (error) {
    console.log(error);
  });
})


function myFun_2(array) {
  var capital = document.getElementById('capital');
  var population = document.getElementById('population');
  var region = document.getElementById('region')
  var img = document.getElementById('flag');
    const finalData = array[0];
    capital.innerHTML = 'Capital: ' + finalData.capital;
    population.innerHTML = 'Population: ' + finalData.population;
    region.innerHTML = 'Region: ' + finalData.region;
    img.src = finalData.flag;
  };


// translation:
(() => {
  const appDrawerButton = document.querySelector('.app_drawer__button');
  const appDrawer = document.querySelector('.app_drawer');
  appDrawerButton.addEventListener('click', () =>
    toggleMenu(appDrawer, appDrawerButton)
  );
})();

function toggleMenu(drawer, button) {
  button.classList.toggle('app_drawer__button--visible');
  drawer.classList.toggle('app_drawer--visible');
}
