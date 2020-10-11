import React from 'react';
import { StyleSheet,View,Text,FlatList } from 'react-native';

export default class StaffScreen extends React.Component {

  state={
    data:[]
  }

  fetchData= async()=>{
    const response = await fetch('http://172.20.10.5:3000/staff'); //http://localhost:1348/testTabl //http://172.16.186.173:1348/testTabl
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
            <Text style={{color:'#000000'}}>ID: {item.SID}</Text>{'\t'} Name: {item.Sname}</Text>
          
          <Text style={{color:'#fff'}}>Tel.: {item.STelephone}</Text>
          <Text style={{color:'#fff'}}>Photo: {item.SPhoto}</Text>
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