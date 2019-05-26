import React from 'react';
import PropTypes from 'prop-types';
import { Search, Icon } from 'semantic-ui-react';
import PlacesAutocomplete from 'react-places-autocomplete';
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import { geolocated } from "react-geolocated";
import './SearchBar.css';

const API_KEY = '?';
const urlMaps = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&libraries=places`;
const warningIcon = <Icon color='red' name='warning circle' />;
const geoLocTitle = 'Tu ubicacion';

class SearchBar extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      address: '',
      error: false,
    };
    // Bindeo las funciones para que puedan usar this
    this.handleChange = this.handleChange.bind(this);
    this.handleError = this.handleError.bind(this);
    this.transformSuggestions = this.transformSuggestions.bind(this);
  }

  transformSuggestions(suggs) {
    // Le doy formato a las suggestions del pleaces-autocomplete
    const map = this.state.error ? [] :
    (this.props.isGeolocationAvailable && this.props.isGeolocationEnabled ? [{title: geoLocTitle}] : []).concat(
      suggs.map((place) => {
        return(
          {title: place.description.substring(0,30)}
        )
      })
    );
    return map;
  }

  handleChange(address) {
    this.setState({ address: address, error: false });
  }

  handleError(error) {
    this.setState({ error: true });
    this.props.handleError();
  }

  handleSelect(address) {
    this.handleChange(address);
    // If address === geoLocTitle then location is available
    if(address === geoLocTitle){
      const coords = {
        lat: this.props.coords.latitude,
        lng: this.props.coords.longitude
      };
      console.log(coords);
      this.props.handleSelect(coords);
    } else {
      geocodeByAddress(address)
        .then(results => getLatLng(results[0]))
        .then(latLng => {
          console.log(latLng);
          this.props.handleSelect(latLng);
        });
        //.catch(error => this.handleError());
    }
  }


  render() {
    return (
      <div className='searchContainer' >
        <script src={urlMaps}></script>
        <PlacesAutocomplete
          value={this.state.address}
          onChange={this.handleChange}
          onSelect={this.handleSelect}
          onError={this.handleError}
        >
          {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
            <Search
              // Obtengo los props de PlacesAutocomplete
              { ...getInputProps() }
              // Adapto la funcion onSearchChange para use el onChange de PlacesAutocomplete
              onSearchChange={(e, value) => {
                getInputProps().onChange({target: value})}
              }
              // Esta funcion llama al handler de seleccion de un item
              onResultSelect={(e, data) => {
                this.handleSelect(
                   data.result.title
                )}
              }
              fluid={true}
              className='bar'
              icon={this.state.error ? warningIcon : 'search'}
              results={this.transformSuggestions(suggestions)}
              id='searchInput'
              value={this.state.address}
              size='big'
              noResultsMessage='No se encontraron resultados'
              minCharacters={2}
              loading={loading}
            />
          )}
        </PlacesAutocomplete>  
      </div>
    );
  }
}

SearchBar.defaultProps = {
  handleSelect: () => {},
};

SearchBar.propTypes = {
  handleError: PropTypes.func,
  handleSelect: PropTypes.func,
};

// Agrego los props de react-geolocated 
export default geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
})(SearchBar);
