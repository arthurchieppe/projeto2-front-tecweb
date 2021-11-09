export function getRiverInformation() {
    return new Promise((resolve) => {
    resolve(


        
        for (let city of cityNames) {
        promises.push(
            await axios
            .get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=b41e25882385ee402f115680cb550c54`)
            .then((response) => {
            getCities.push(response.data);
            })
        );
        }
        setCities(getCities);
        Promise.all(promises).then(() => console.log(getCities));
        return getCities
    
    );
}