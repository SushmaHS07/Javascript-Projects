function WeatherData(cityName, description) {
    this.cityName = cityName;
    this.description = description;
    this._temperature = '' ;
}

Object.defineProperty(WeatherData.prototype, 'temparature', {
    get: function() {
        return this._temperature;
    },
    set: function(value) {
        this._temperature = (value * 1.8 + 32).toFixed(2) + 'F.';
    }
})
