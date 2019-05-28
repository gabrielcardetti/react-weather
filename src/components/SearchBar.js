import React from 'react';
import PropTypes from 'prop-types';
import { Button, Search, Icon, Container } from 'semantic-ui-react';
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
    this.props.onError();
  }

  handleSelect(address) {
    if(address.length < 3) {
      this.handleError();
      return;
    }
    this.handleChange(address);
    // If address === geoLocTitle then location is available
    if(address === geoLocTitle){
      this.props.onSelect({
        lat: this.props.coords.latitude,
        lng: this.props.coords.longitude,
      });
    } else {
      geocodeByAddress(address)
        .then(results => getLatLng(results[0]))
        .then(latLng => this.props.onSelect(latLng));
        //.catch(error => this.handleError());
    }
  }


  render() {
    return (
      <Container>
        <script src={urlMaps}></script>
        <PlacesAutocomplete
          value={this.state.address}
          onChange={this.handleChange}
          onSelect={this.handleSelect}
          onError={this.handleError}
        >
          {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
            <div className='searchContainer'> 
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
              <Button 
                id='searchButton' 
                loading={false} 
                basic 
                color='green' 
                size='large' 
                onClick={() => this.handleSelect(this.state.address)}
                disabled={this.state.error}
              >
                Buscar
              </Button>
            </div>
          )}
        </PlacesAutocomplete>  
      </Container>
    );
  }
}

SearchBar.defaultProps = {
  onSelect: () => {},
  onError: () => {},
};

SearchBar.propTypes = {
  onError: PropTypes.func,
  onSelect: PropTypes.func,
};

// Agrego los props de react-geolocated 
export default geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
})(SearchBar);
