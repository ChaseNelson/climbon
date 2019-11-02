import geolocator from 'geolocator';

geolocator.config({
  language: 'en',
  google: {
    version: '3',
    key: '',
  },
});

export default geolocator;
