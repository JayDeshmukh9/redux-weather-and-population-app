import React from 'react';
import { connect } from 'react-redux' ;
import { bindActionCreators } from 'redux' ; //* !ask  */
import { fetchWeather } from '../actions/index' ;


class SearchBar extends React.Component {

    constructor(props){
        super(props);

        this.state = {term : ''}
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        
    }
    onInputChange(event) {
        this.setState({ term : event.target.value })
    }
    onFormSubmit(event){
        event.preventDefault();
        this.props.fetchWeather(this.state.term);
        this.setState({term:''})
    }

     render(){
         return(
             <div className="w3-center w3-padding" >
                <form onSubmit={this.onFormSubmit} action="">
                    <input 
                        className="w3-imput" 
                        type="text" 
                        placeholder="Search " 
                        value={this.state.term}
                        onChange={this.onInputChange}
                    />
                    <p> </p><button>Search</button>
                </form>
             </div>
         );
     }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchWeather},dispatch) // !ask
}

export default connect(null , mapDispatchToProps)(SearchBar) //!ask