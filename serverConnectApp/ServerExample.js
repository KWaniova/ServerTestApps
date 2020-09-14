import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default class ServerExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: 'Click to connect to the server'      
    };
  }

  connect = () => {
      const URL = 'http://localhost:8080/welcome';
      fetch(URL).then(response => {
        if(response.status == 200){
            return response.text;
        }else{
            throw new Error ('Something is wrong');
        }
      }).then(responseText => {
          this.setState({responseText});
      }).catch(error => {
        console.error(error.message);    
      });
  }

  render() {
    return (
      <View>
        <Text style={styles.title}> {this.state.response} </Text>
        <Button title='connect' onPress={this.connect}></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        margin: 10,
        textAlign: 'center'
    }

})