import React, { Component } from 'react';


import { StyleSheet, TextInput, View, Alert, TouchableOpacity, Text, Image } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default class Booking extends Component {

  constructor(props) {
    super(props)

    this.state = {
      name: '',
      package: '',
    }
  }

  registration_Function = () => {

    fetch('http://172.20.10.5/Forest_Tour/Booking.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({

        booking_name: this.state.name,

        package_name: this.state.package

      })

    }).then((response) => response.json())
      .then((responseJson) => {
        // Showing response message coming from server after inserting records.
        Alert.alert(responseJson);
      }).catch((error) => {
        console.error(error);
      });


  }


  render() {
    return (
      

      <View style={styles.MainContainer}>
        <View style={{alignItems:'center'}}>
          <Text style={styles.txt}>Booking</Text>
        </View>
        
          <Text style={styles.text_footer}>Name</Text>
          <View style={styles.action}>
            <FontAwesome
              name="user-o"
              color='#05375a'
              size={20}
            
            />
            <TextInput
              placeholder="Name"
              autoCapitalize="none"
              onChangeText={data => this.setState({ name: data })}
              underlineColorAndroid='transparent'
              style={styles.textInput}
            />
          </View>
          <Text style={styles.text_footer}>Packag Name</Text>
          <View style={styles.action}>
            <FontAwesome
              name="book"
              color='#05375a'
              size={20}
            
            />
            <TextInput
              placeholder="Package Name"
              onChangeText={data => this.setState({ package: data })}
              underlineColorAndroid='transparent'
              style={styles.textInput}
            />
           


          </View>
          
          <View style={{alignItems:'center'}}>
            <TouchableOpacity style={styles.button} onPress={this.registration_Function} >

              <Text style={styles.text}>Save</Text>

            </TouchableOpacity>


          </View>
          



        

      </View>

    );
  }
}

const styles = StyleSheet.create({

  MainContainer: {
    justifyContent: 'center',
    flex: 1,
    padding: 20,
  },
  logo: {
    height: 120,
    width: 120,
    resizeMode: 'cover',
  },
  txt: {
    fontFamily: 'SecularOne-Regular',
    fontSize: 28,
    marginBottom: 10,
    color: '#000',
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18
},
action: {
  flexDirection: 'row',
  marginTop: 10,
  borderBottomWidth: 1,
  borderBottomColor: '#f2f2f2',
  paddingBottom: 5
},
textInput: {
  flex: 1,
  marginTop: Platform.OS === 'ios' ? 0 : -12,
  paddingLeft: 10,
  color: '#05375a',
},

  button: {

    width: '100%',
    paddingTop: 2,
    paddingBottom: 2,
    backgroundColor: '#000',
    borderRadius: 3,
    marginTop: 20
  },

  text: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    padding: 5
  },
  textPrivate: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 35,
    justifyContent: 'center',
  },
  color_textPrivate: {
    fontSize: 13,
    fontWeight: '400',
    color: 'grey',
  },
  navButton: {
    marginTop: 15,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#B03060',
  },



});