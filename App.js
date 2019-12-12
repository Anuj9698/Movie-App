import * as React from 'react';
import { Text, View, StyleSheet, Button, Image,Alert ,TouchableOpacity} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import HomeScreen from './screen/HomeScreen';
import SecondScreen from './screen/SecondScreen';
import SearchScreen from './screen/SearchScreen';

const App1 = createStackNavigator({
  Home: {screen: HomeScreen},
  Second:{screen:SecondScreen},
  Search:{screen: SearchScreen}
});

const App = createAppContainer(App1);

export default App;

class Screen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [], 
    };
  }

  componentDidMount() {
    return fetch(
      'https://api.themoviedb.org/3/discover/movie?api_key=08d6ed801ed595d91b05fda69b655f46&language=en-US& sort_by=popularity.desc'
    )
      .then(response => response.json())
      .then(response => {
        this.setState({
          data: response.results,
        });
      });
  }

  render() {
    
    return (
      <View style={styles.container}>
      <App /></View>)
  }

  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});


