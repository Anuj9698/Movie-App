import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
} from 'react-native';
import { black } from 'ansi-colors';


export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'MOVIES',
    headerStyle: {
      height: 50,
     },
     headerTitleStyle: {
     color: 'black',
     textAlign: 'center',
     alignSelf:'center'
    },
  };

  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    return fetch(
      'https://api.themoviedb.org/3/discover/movie?api_key=08d6ed801ed595d91b05fda69b655f46&language=en-US& sort_by=popularity.desc'
    )
      .then(response => response.json())
      .then(response => {
        //  let count=1;
        //  let newData=this.state.data;
        //  for(var i=0;i<response.results.length;i++)
        //  {

        //    newData.push(response.results.splice(0,2))
        //    console.log(newData);

        //  }

        this.setState({
          // data: newData,
          data: response.results,
        });
      });
  }

  render() {
    return (
      <ScrollView>
        <View>
          <Button
            onPress={() => this.props.navigation.navigate('Search')}
            title="Search"
          />
        </View>
        <View style={{ flex:1, flexDirection: 'row',flexWrap:'wrap' }}>
          {this.state.data.map((data, index) => {
              
            if (index % 2 === 0) {
              return (
                <View
                  style={{
            
                    flexDirection: 'row',
                     backgroundColor: 'white',
                    width: '50%',
                    padding:20,
                    borderRadius: 0.5,
                    borderWidth: 1,
                    borderColor: '#d6d7da',
                  }}>
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate('Second', { id: data.id })
                    }>
                    <ScrollView>
                      <View>
                        <Image
                          style={{ width: 120, height: 120,margin:10}}
                          source={{
                            uri:
                              'http://image.tmdb.org/t/p/w185/' +
                              data.poster_path,
                          }}
                        />
                        <Text style={{textAlign:"center"}}>
                          Movie:
                          {data.title}
                        </Text>
                        <Text style={{textAlign:"center"}}>Rating :{data.vote_average}/10</Text>
                      </View>
                    </ScrollView>
                  </TouchableOpacity>
                </View>
              );
            }
            else{
              return(
                <View
                  style={{
                    flexDirection: 'row',
                     backgroundColor: 'white',
                    width: '50%',
                    padding:20,
                    borderRadius: 0.5,
                    borderWidth: 1,
                    borderColor: '#d6d7da',
                    
                  }}>
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate('Second', { id: data.id })
                    }>
                    <ScrollView>
                      <View>
                        <Image
                          style={{width: 120, height: 120,margin:10}}
                          source={{
                            uri:
                              'http://image.tmdb.org/t/p/w185/' +
                              data.poster_path,
                          }}
                        />
                        <Text style={{textAlign:"center"}}>
                          Movie:
                          {data.title}
                        </Text>
                        <Text style={{textAlign:"center"}}>Rating :{data.vote_average}/10</Text>
                      </View>
                    </ScrollView>
                  </TouchableOpacity>
                </View>
              )
            }
          })}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  
});
