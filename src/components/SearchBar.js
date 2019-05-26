import React from 'react';
import { Search, Container, Icon } from 'semantic-ui-react';
import PlacesAutocomplete from 'react-places-autocomplete';
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import './SearchBar.css';

const API_KEY = 'AIzaSyApEX5191ILsOjumcklpFwqrx0AT8glUr4';
const warningIcon = <Icon color='red' name='warning circle' />;

class SearchBar extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      address: '',
      hide: false,
      error: false
    };
    // Bindeo las funciones para que puedan usar this
    this.handleChange = this.handleChange.bind(this);
    this.handleError = this.handleError.bind(this);
  }

  transformSuggestions(suggs) {
    console.log(suggs);
    // Le doy formato a las suggestions del pleaces-autocomplete
    const map = this.state.hide ? [] :
    suggs.map((place) => {
      return(
        {title: place.description.substring(0,30)}
      )
    });
    return map;
  }

  handleChange(address) {
    this.setState({ address: address, hide: false, error: false });
  }

  handleError(error) {
    this.setState({hide: true, error: true});
  }

  handleSelect(address) {
    this.handleChange(address);
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log('Success', latLng))
      .catch(error => this.handleError());
  }


  render() {
    return (
      <div className='searchContainer' >
        <script src={`https://maps.googleapis.com/maps/api/js?key=${API_KEY}&libraries=places`}></script>
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

export default SearchBar;
