import React from 'react';
import {connect} from 'react-redux';

class WeatherList extends React.Component{

    renderWeather(cityData){
        const name=cityData.city.name;
        const pop=cityData.city.population;
        const country = cityData.city.country;
        const temp = cityData.list[0].main.temp;
        return(
            <tr>
                <td key={name}>{name}</td>
                <td key={pop}>{pop}</td>          
                <td key={country}>{country}</td>
                <td key={temp}>{temp}</td>
            </tr>
        )
    }

    render(){
        return(
            <div className="w3-container">
            <table className="w3-table-all">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Population</th>
                        <th>Country</th>
                        <th>Temp (Kalvin)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
            </div>
        )
    }
}
function mapStateToProps({weather}){
    return { weather }
}


export default connect(mapStateToProps)(WeatherList);