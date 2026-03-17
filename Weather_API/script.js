// --- Weather API Function ---

const weatherKey = "03c3299e4b81da6f25545917d41bf7f4";

async function getWeather() {
  const city = document.getElementById("city").value.trim();

  if (!city) {
    alert("Please enter a city name!");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherKey}&units=metric`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    if (data.cod === 200) {
      document.getElementById("cityName").innerText = "City: " + data.name;
      document.getElementById("temp").innerText = "Temperature: " + data.main.temp + "°C";
      document.getElementById("desc").innerText = "Condition: " + data.weather[0].description;
    } else {
      alert("City not found!");
    }

  } catch (error) {
    console.error(error);
    alert("Something went wrong!");
  }
}

//--corona API----
async function getCoronaData(){

  let country = document.getElementById("country").value
  
  let res = await fetch(`https://disease.sh/v3/covid-19/countries/${country.toLowerCase()}`)
  let data = await res.json()
  console.log(data);
  
  document.getElementById("cases").innerText =  data.cases 
  document.getElementById("deaths").innerText =  data.deaths 
  document.getElementById("recovered").innerText =  data.recovered
}

//--DOG API--

async function getDog() {
  try {
    const res = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await res.json();
    document.getElementById("dogImage").src = data.message;
  } catch (err) {
    console.error("Dog API Error:", err);
  }
}


// --- Movie API Function ---
async function getMovie() {
    const movie = document.getElementById('movieInput').value.trim();

    if (!movie) {
        alert("Please enter a movie name!");
        return;
    }

    const apiKey = "8e45dd54";
    const url = `https://www.omdbapi.com/?t=${encodeURIComponent(movie)}&apikey=${apiKey}`;

    console.log("Fetching:", url);

    try {
        const response = await fetch(url);
        console.log("Response status:", response.status);

        const data = await response.json();
        console.log("API Data:", data);

        if (data.Response === "True") {
            document.getElementById('Title').innerText = data.Title;
            document.getElementById('Year').innerText = data.Year;
            document.getElementById('imdbRating').innerText = data.imdbRating;

            const posterElement = document.getElementById('Poster');
            if (posterElement) {
                posterElement.src = data.Poster !== "N/A"
                    ? data.Poster
                    : "https://via.placeholder.com/150?text=No+Image";
            }

            console.log(data.poster);
        } else {
            alert("Movie not found: " + data.Error);
        }

    } catch (error) {
        console.error("FULL ERROR:", error);
        alert("Error: " + error.message);
    }
}