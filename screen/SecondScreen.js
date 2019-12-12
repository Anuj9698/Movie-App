import * as React from 'react';
import { Text, View, StyleSheet,Alert,Image,ScrollView } from 'react-native';


export default class SecondScreen extends React.Component {
static navigationOptions = {
   title:'Description',
    headerStyle: {
      height:50,
    },
       
  };

constructor(props) {
  super(props);
  this.state={data:[]};
    console.log(props.navigation.state.params.id);
    var movId=props.navigation.state.params.id;
    var apiKey="08d6ed801ed595d91b05fda69b655f46";
    var apiString="https://api.themoviedb.org/3/movie/"+movId+"?api_key="+apiKey+"&language=en-US";
    var movieData=fetch(apiString)
      .then(response => response.json())
      .then(response => {
        console.log(response);
        this.setState({
          data:response
        });
      });
  }


  render(){
    return(
      <ScrollView>
      <Image
               style={{ flex: 1, height: 400,margin:2 }}
               source={{
                 uri:
                   'http://image.tmdb.org/t/p/w185/'+ this.state.data.poster_path,
               }}
             />
                <Text style={{margin:10}}>Movie Title: {this.state.data.original_title}</Text>
             <Text style={{margin:10}}>Overview: {this.state.data.overview}</Text>
             <Text style={{margin:10}}>Popularity: {this.state.data.popularity}</Text>
          

      </ScrollView>
    );
  }
}


