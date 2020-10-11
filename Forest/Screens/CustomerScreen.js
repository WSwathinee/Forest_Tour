import React from 'react';
import { StyleSheet,View,Text,FlatList } from 'react-native';

export default class CustomerScreen extends React.Component {

  state={
    data:[]
  }

  fetchData= async()=>{
    const response = await fetch('http://172.20.10.5:3002/customer'); //http://localhost:1348/testTabl //http://172.16.186.173:1348/testTabl
    const testTable = await response.json();
    this.setState({data: testTable});
  }
  componentWillMount(){
    this.fetchData();
}

  render() {
    return (
      <View style={styles.container}>
            
      <FlatList
        data={this.state.data}
        keyExtractor= {(item,index) => index.toString()}
        renderItem={({item})=>

        <View style={{backgroundColor:'#82E0AA',padding:10,margin:10,borderRadius:10}}>
          <Text style={{color:'#fff', fontWeight:'bold'}}>
            <Text style={{color:'#000000'}}>ID: {item.CID}</Text>{'\t'}Name: {item.CName}</Text>
          
          <Text style={{color:'#fff'}}>Tel: {item.CTelephone}</Text>
          <Text style={{color:'#fff'}}>Sex: {item.CSex}</Text>
        </View>

        } 
      />
  </View>

    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: '#F5FCFF',
    
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },

});