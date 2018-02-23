import React from 'react';
import SearchBar from './src/container/search_bar.jsx';
import WeatherList from './src/container/weather_list.jsx'

class App extends React.Component {
   render() {
      return (
         <div>
             <SearchBar />
             <WeatherList /> 
         </div>
      );
   }
}
export default App;