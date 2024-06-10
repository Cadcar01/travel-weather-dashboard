const cityForm = $('#form')
const hourlyDataEl = $('#currentConditions')
const forecastDataEl = $('forecastConditions')
today = dayjs().format('DD/MM/YYYY')

function getApi() {
    fetch('https://api.openweathermap.org/data/2.5/forecast?units=imperial&lat=44.64024&lon=-93.14355&appid=26f230ac3013feda83ce2e5b685b9913')
    .then(function (response) {
    return response.json();
    })
    .then(function (data) {
        console.log(data);
        console.log(data.list[0])
        const weatherNow = data.list[0]
        
        const currentWeather = document.createElement('div')
    const currentCity = document.createElement('h2')
    const currentIcon = document.createElement('img')
    const currentList = document.createElement('ul')
    const currentTemp = document.createElement('li')
    const currentHumidity = document.createElement('li')
    const currentWind = document.createElement('li')

    currentCity.textContent = `${data.city.name} ${dayjs(weatherNow.dt_txt).format('DD/MM/YY')}`
    currentIcon.src = 'placeholder.jpeg'
    currentTemp.textContent = `Temp: ${weatherNow.main.temp}°F`
    currentHumidity.textContent = `Humidity: ${weatherNow.main.humidity}%`
    currentWind.textContent = `Wind Speed: ${weatherNow.wind.speed} MPH`
        
    currentList.append(currentTemp)
    currentList.append(currentHumidity)
    currentList.append(currentWind)
    currentWeather.append(currentCity)
    currentWeather.append(currentIcon)
    currentWeather.append(currentList)
    hourlyDataEl.append(currentWeather)

        handleWeatherCard(data.list[7])
        handleWeatherCard(data.list[13])
        handleWeatherCard(data.list[19])
        handleWeatherCard(data.list[25])
        handleWeatherCard(data.list[31])
    })
}
getApi()

function getCoordinates() {
    fetch('http://api.openweathermap.org/geo/1.0/direct?q=farmington&appid=26f230ac3013feda83ce2e5b685b9913')
        .then(function (response) {
        return response.json();
    })
      .then(function (data) {
        for (const location of data) {
        console.log(location.lat)
        console.log(location.lon)
        console.log(location)
        }
      })
}
getCoordinates()

function handleWeatherCard(array) {
    const Weather = document.createElement('div')
    const City = document.createElement('h2')
    const Icon = document.createElement('img')
    const List = document.createElement('ul')
    const Temp = document.createElement('li')
    const Humidity = document.createElement('li')
    const Wind = document.createElement('li')

    City.textContent = `${dayjs(array.dt_txt).format('DD/MM/YY')}`
    Icon.src = 'placeholder.jpeg'
    Temp.textContent = `Temp: ${array.main.temp}°F`
    Humidity.textContent = `Humidity: ${array.main.humidity}%`
    Wind.textContent = `Wind Speed: ${array.wind.speed} MPH`
        
    List.append(Temp)
    List.append(Humidity)
    List.append(Wind)
    Weather.append(City)
    Weather.append(Icon)
    Weather.append(List)
    forecastDataEl.append(Weather)
}