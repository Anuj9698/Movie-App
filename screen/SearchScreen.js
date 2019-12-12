import * as React from 'react';
import { Text, View, StyleSheet,Button,TouchableOpacity,Image,Alert,ScrollView,TextInput} from 'react-native';


export default class SearchScreen extends React.Component {
constructor(props) {
    super(props);
    this.state = { 
      data:[],
      text:''
    };
  }
static navigationOptions = {
   title:'Search Movies',
    headerStyle: {
      height:50,
    },
  };

  handleSearch=()=> {
    let a=this.state.text;
    console.log(a)
   return fetch(
      'https://api.themoviedb.org/3/search/company?api_key=08d6ed801ed595d91b05fda69b655f46&query='+a
    )
      .then(response => response.json())
      .then(response => {
      this.setState({
        data:response.results
      }) 
      })
      .catch((error) => {
      console.error(error);
    });
  }

  render() {
    return (
       <View>  
        <TextInput
       onChangeText={(text) => this.setState({text})}
        style={{height: 50, borderColor: 'gray', borderWidth: 1,fontSize:20 ,marginTop:4}} 
        value={this.state.text}
      />
      <View style={{backgroundColor:'lightblue'}}>
      <Button title="Search" onPress={this.handleSearch} color="black"></Button>
      </View>
      <View>
       {this.state.data.map((data,index)=>(
<Text>{data.name}</Text>
      )

       )}
      
      </View>
        </View>
    );
  }
}

