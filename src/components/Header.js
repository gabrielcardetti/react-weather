import React from 'react';
import { Search, Grid } from 'semantic-ui-react';
import PlacesAutocomplete from 'react-places-autocomplete';
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

const API_KEY = 'TU_KEY';

class Header extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      address: '',
      hide: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleError = this.handleError.bind(this);
  }

  transformSuggestions(suggs) {
    const map = this.state.hide ? [] :
    suggs.map((place) => {
      return(
        {title: place.description.substring(0,30)}
      )
    });
    return map;
  }

  handleChange(address) {
    this.setState({ address: address, hide: false });
  }

  handleError(error) {
    this.setState({hide: true});
    console.error("Error");
  }

  handleSelect(address) {
    this.handleChange(address);
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log('Success', latLng))
      .catch(error => console.error('Error', error));
  }

  render() {
    return (
      <Grid centered={false}>
        <script src={`https://maps.googleapis.com/maps/api/js?key=${API_KEY}&libraries=places`}></script>
        <Grid.Row>
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
                results={this.transformSuggestions(suggestions)}
                id="Searchbar"
                value={this.state.address}
                size="large"
                noResultsMessage="No se encontraron resultados"
                minCharacters={3}
                loading={loading}
              />
            )}
          </PlacesAutocomplete>  
        </Grid.Row>
      </Grid>
    );
  }
}

export default Header;
