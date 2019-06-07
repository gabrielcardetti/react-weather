/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Button, Search, Icon, Container,
} from 'semantic-ui-react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import { geolocated } from 'react-geolocated';
import './SearchBar.css';

const geoLocTitle = 'Tu ubicacion';
const warningIcon = <Icon color="red" name="warning circle" />;

class SearchBar extends Component {
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
    const { error } = this.state;
    const { isGeolocationAvailable, isGeolocationEnabled } = this.props;
    const map = error ? []
      : (isGeolocationAvailable && isGeolocationEnabled ? [{ title: geoLocTitle }] : []).concat(
        suggs.map(place => (
          { title: place.description.substring(0, 30) }
        )),
      );
    return map;
  }

  handleChange(address) {
    this.setState({ address, error: false });
  }

  handleError() {
    const { onError } = this.props;
    this.setState({ error: true });
    onError();
  }

  handleSelect(address) {
    const { onSelect, coords } = this.props;
    if (address.length < 3) {
      this.handleError();
      return;
    }
    this.handleChange(address);
    // If address === geoLocTitle then location is available
    if (address === geoLocTitle) {
      onSelect({
        lat: coords.latitude,
        lng: coords.longitude,
      });
    } else {
      geocodeByAddress(address)
        .then(results => getLatLng(results[0]))
        .then(latLng => onSelect(latLng))
        .catch(() => this.handleError());
    }
  }

  render() {
    const { address, error } = this.state;
    return (
      <Container>
        <PlacesAutocomplete
          value={address}
          onChange={this.handleChange}
          onSelect={this.handleSelect}
          onError={this.handleError}
        >
          {({ getInputProps, suggestions, loading }) => (
            <div className="searchContainer">
              <Search
                // Obtengo los props de PlacesAutocomplete
                {...getInputProps()}
                // Adapto la funcion onSearchChange para use el onChange de PlacesAutocomplete
                onSearchChange={(e, value) => {
                  getInputProps().onChange({ target: value });
                }
                }
                // Esta funcion llama al handler de seleccion de un item
                onResultSelect={(e, data) => {
                  this.handleSelect(
                    data.result.title,
                  );
                }
                }
                fluid
                className="bar"
                icon={error ? warningIcon : 'search'}
                results={this.transformSuggestions(suggestions)}
                id="searchInput"
                value={address}
                size="big"
                noResultsMessage="No se encontraron resultados"
                minCharacters={2}
                loading={loading}
              />
              <Button
                id="searchButton"
                loading={false}
                basic
                color="black"
                size="large"
                onClick={() => this.handleSelect(address)}
                disabled={error}
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
  coords: null,
};

SearchBar.propTypes = {
  onError: PropTypes.func,
  onSelect: PropTypes.func,
  coords: PropTypes.object,
  isGeolocationAvailable: PropTypes.bool.isRequired,
  isGeolocationEnabled: PropTypes.bool.isRequired,
};

// Agrego los props de react-geolocated
export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(SearchBar);
