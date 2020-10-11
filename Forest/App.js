import React from 'react';
import { StyleSheet , Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';


import MaintabScreen from './Screens/MainTabScreen';
import { DrawerContent } from './Screens/DrawerContent';



const Drawer = createDrawerNavigator();



const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={MaintabScreen} />
        {/*<Drawer.Screen name="Staff" component={StaffStackScreen} />*/}
      </Drawer.Navigator>
     
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
container: {
  flex: 1, 
  alignItems: 'center', 
  justifyContent: 'center'
},
});