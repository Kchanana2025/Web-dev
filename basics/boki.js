const form = document.querySelector('.search-form')
const search = document.querySelector('.search-input')
const cityName = document.querySelector('.city-name')
const temperature = document.querySelector('.temperature')
const humidity = document.querySelector('.humidity')
const windSpeed = document.querySelector('.wind-speed')
const weatherImage = document.querySelector('.found-data img')
const description = document.querySelector('.description')

const weatherData = document.querySelector('.found-data')
const errorImg = document.querySelector('.error')
//  hmne inn classes ke  elements ko variables mein store kr lia taki hm javascript ke through unme manipulation skien



form.addEventListener('submit', (e) => {
    e.preventDefault();//prevents from refreshing the page,we dont want page to be refreshed taki data entered by user does not udd
    if (!search.value) {//search.value is a city name that user enters
        console.log('no city added')
        weatherData.classList.add('d-none')
        errorImg.classList.remove('d-none')
    }
    else {
        cityName.innerText = search.value;
        weatherData.classList.remove('d-none')
        errorImg.classList.add('d-none')//phle se dikh rhi ho toh error image htado
        getWeatherByCity(search.value)

    }

})



async function getWeatherByCity(myCity) {
    try {
        const url = https://api.openweathermap.org/data/2.5/weather?q=${myCity}&appid=573e5d92a653700269ea7f131aa47b11&units=metric
        const res = await fetch(url)
        const data = await res.json()//api call ka data json forma mein wapis aata hai (generally data sending recieving is done in json format)(javascript object notation)
        //res.json api dwara bhjeje gye json object ko js object mein convert kr dete hain
        console.log(data)
        temperature.innerText = ${ data.main.temp }°C;
        description.innerText = data.weather[0].description;
        humidity.innerText = ${ data.main.humidity }% humidity//inner text ka mtlb do tags ke beech jo text hai (wo ye daaldo)
        windSpeed.innerText = ${ ((data.wind.speed) * 3.6).toFixed(1) } km / h
        const imageName = data.weather[0].main;
        const imageArray = ['Clear', 'Clouds', 'Mist', 'Rain', 'Snow'];
        if (imageArray.includes(imageName)) {
            const imageSource = ./ images / ${ imageName }.png
            weatherImage.src = imageSource;
        }
        else {
            weatherImage.src = "./images/Clouds.png";
        }
        search.value = ''
    }
    catch (e) {
        console.log(e);
        weatherData.classList.add('d-none')//d-none is a class given by bootstrap which when applied to an element makes element's displaye none.classlist is list of classes that are applied on that element.here element(variable in js file) is weather data 
        errorImg.classList.remove('d-none')
    }
}