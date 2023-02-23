// API keys NU!!! ar trebui sa fie stocate in forma de text, deoarece nu este sigur
// Fara server propriu, nu putem fi 100% safe. Dar avand in vedere ca OpenWeather este gratit, cel mai rau caz ramanem cu cheia blocata
const API_KEY = "02af79c812b06f74199e287583d73e2c";
const API_URL = "https://api.openweathermap.org/data/2.5";
const DEFAULT_QUERY_PARAMETERS = "lang=ro&units=metric";


function getCurrentWeather(city) {
    return fetchAndParse(`${API_URL}/weather?q=${city}&${DEFAULT_QUERY_PARAMETERS}&appid=${API_KEY}`);
}
