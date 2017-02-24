(function () {
    let counter = 0;
    return class Record{
        constructor(temperature,humidity,pressure,windSpeed){
            this.id=counter++;
            this.temperature=temperature;
            this.humidity=humidity;
            this.pressure=pressure;
            this.windSpeed=windSpeed;

        }
        toString(){
            let weather='Not stormy';
            if(this.temperature<20&&(this.pressure>900||this.pressure<700)&&this.windSpeed>25){
                weather='Stormy'
            }
            return `Reading ID: ${this.id}\n
            Temperature: ${this.temperature}*C\n
Relative Humidity: ${this.humidity}%\n
Pressure: ${this.pressure}hpa\n
Wind Speed: ${this.windSpeed}m/s\n
Weather: ${weather}`
        }
    }
})();