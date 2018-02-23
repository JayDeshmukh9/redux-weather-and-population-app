import React from 'react';
import {connect} from 'react-redux';
// import { Sparklines , SparklinesLine }  from 'react-sparklines';

class WeatherList extends React.Component{

    renderWeather(cityData){
        const name=cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp);
        return(
            <div>
                <td key={name}>{name}</td>
                <td>
                    {/* <Sparklines height={120} width={180} data={temps} >
                        <SparklinesLine color="red" />
                    </Sparklines> */}
                </td>
            </div>
        )
    }

    render(){
        return(
            <div className="w3-container">
            <table className="w3-table-all">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temprature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
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