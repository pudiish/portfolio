
function getWeatherData() {
    var api_key = "b71bd37c34ad6762415d8f3fb7410bc6";
    var city = "Jamshedpur,Jharkhand";
    var url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;

    // Send API request to OpenWeatherMap
    $.get(url, function(data) {
        var weather_condition = data.weather[0].main;
        var sentiment_prompt = generateSentimentPrompt(weather_condition);
        $("#prompt").text(sentiment_prompt);
    });
}

// Function to generate sentiment prompt based on weather conditions
function generateSentimentPrompt(weather_condition) {
    var weather_conditions = {
        "Clear": "It's a beautiful day! ☀️ Feeling: Happy, Energetic",
        "Clouds": "It's a cloudy day. ☁️ Feeling: Calm",
        "Rain": "It's raining. ☔ Feeling: Cozy",
        "Drizzle": "It's drizzling outside. 🌧️ Feeling: Cozy, Melancholic",
        "Thunderstorm": "There's a thunderstorm. ⛈️ Feeling: Concerned, Anxious",
        "Snow": "It's snowing! ❄️ Feeling: Excited, Playful",
        "Mist": "There's mist in the air. 🌫️ Feeling: Calm",
        "Haze": "It's hazy outside. 🌫️ Feeling: Calm",
        "Fog": "There's fog. 🌫️ Feeling: Calm",
        "Smoke": "There's smoke in the air. 🌫️ Feeling: Calm",
        "Dust": "It's a dusty day. 🌫️ Feeling: Calm",
        "Sand": "There's sand in the air. 🌫️ Feeling: Calm"
    };

    if (weather_condition in weather_conditions) {
        return weather_conditions[weather_condition];
    } else {
        return "The weather is currently " + weather_condition + ". How does this weather make you feel?";
    }
}

// Call the function to fetch weather data on page load
$(document).ready(function() {
    getWeatherData();
});
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// navbar toggle
$('#nav-toggle').click(function(){
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
});
