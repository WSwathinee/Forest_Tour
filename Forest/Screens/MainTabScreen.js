import React from 'react';
import { StyleSheet , Text, View, Button } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from './HomeScreen';
import StaffScreen from './StaffScreen';
import CustomerScreen from './CustomerScreen';
import PackageScreen from './PackageScreen';
import AllStaff from './AllStaff';
import SearchStaff from './SearchStaff';
import AllCustmoer from './AllCustomer';
import AllPackage from './AllPackage';
import Booking from './Booking';
import SumBook from './SumBook';

const Tab = createMaterialBottomTabNavigator();

const HomeStack = createStackNavigator();
const StaffStack = createStackNavigator();
const CustomerStack = createStackNavigator();
const PackageStack = createStackNavigator();


const MaintabScreen =() => (
    <Tab.Navigator
        initialRouteName="Home"
        activeColor="#fff"
    >
        <Tab.Screen
            name="Home"
            component={HomeStackScreen}
            options={{
            tabBarLabel: 'Home',
            tabBarColor: '#43BF67',
            tabBarIcon: ({ color }) => (
                <Icon name="home" color={color} size={26} />
                ),
            }}
        />
        <Tab.Screen
            name="Staff"
            component={StaffStackScreen}
            options={{
            tabBarLabel: 'Staff',
            tabBarColor: '#43BF67',
            tabBarIcon: ({ color }) => (
                <Icon name="body" color={color} size={26} />
                ),
             }}
        />
        <Tab.Screen
            name="Customer"
            component={CustomerStackScreen}
            options={{
            tabBarLabel: 'Customer',
            tabBarColor: '#43BF67',
            tabBarIcon: ({ color }) => (
                <Icon name="person" color={color} size={26} />
                ),
            }}
        />
        <Tab.Screen
            name="Package"
            component={PackageStackScreen}
            options={{
            tabBarLabel: 'Package',
            tabBarColor: '#43BF67',
            tabBarIcon: ({ color }) => (
                <Icon name="file-tray-stacked" color={color} size={26} />
                ),
            }}
        />
    </Tab.Navigator>


);

const HomeStackScreen = ({navigation}) => (
    <HomeStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#43BF67', 
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
  
    }}>
      <HomeStack.Screen name="Home" component={HomeScreen} options={{
        title:'Forest Tour',
        headerLeft: () => (
          <Icon.Button 
            name = "ios-menu" 
            size={25} 
            backgroundColor="#43BF67"
            onPress={() => navigation.openDrawer()}>
  
          </Icon.Button>
        ),
      }}
      />
      <HomeStack.Screen
            name="AllStaff"
            component={AllStaff} 
            options={({route}) => ({
              title: route.params.title,
              headerBackTitleVisible: false

            })}
          
        />
         <HomeStack.Screen
            name="SearchStaff"
            component={SearchStaff} 
            options={({route}) => ({
              title: route.params.title,
              headerBackTitleVisible: false

            })}
          
          />
          <HomeStack.Screen
            name="AllCustomer"
            component={AllCustmoer} 
            options={({route}) => ({
              title: route.params.title,
              headerBackTitleVisible: false

            })}
          
          />
          <HomeStack.Screen
            name="AllPackage"
            component={AllPackage} 
            options={({route}) => ({
              title: route.params.title,
              headerBackTitleVisible: false

            })}
          
          />
          <HomeStack.Screen
            name="Booking"
            component={Booking} 
            options={({route}) => ({
              title: route.params.title,
              headerBackTitleVisible: false

            })}
          
          />
          <HomeStack.Screen
            name="SumBook"
            component={SumBook} 
            options={({route}) => ({
              title: route.params.title,
              headerBackTitleVisible: false

            })}
          
          />



     </HomeStack.Navigator>
  
  
  );
  
  const StaffStackScreen = ({navigation}) => (
    <StaffStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#43BF67', 
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
  
    }}>
      <StaffStack.Screen name="Staff" component={StaffScreen} options={{
        title:'All Staff',
        headerLeft: () => (
          <Icon.Button 
            name = "ios-menu" 
            size={25} 
            backgroundColor="#43BF67"
            onPress={() => navigation.openDrawer()}>
  
          </Icon.Button>
        )
        
      }}
      />
     </StaffStack.Navigator>
  
  
  );
  const CustomerStackScreen = ({navigation}) => (
    <CustomerStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#43BF67', 
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
  
    }}>
      <CustomerStack.Screen name="Customer" component={CustomerScreen} options={{
        title:'Customer Detail',
        headerLeft: () => (
          <Icon.Button 
            name = "ios-menu" 
            size={25} 
            backgroundColor="#43BF67"
            onPress={() => navigation.openDrawer()}>
  
          </Icon.Button>
        )
        
      }}
      />
     </CustomerStack.Navigator>
  
  
  );
  const PackageStackScreen = ({navigation}) => (
    <PackageStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#43BF67', 
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
  
    }}>
      <PackageStack.Screen name="Package" component={PackageScreen} options={{
        title:'All Package',
        headerLeft: () => (
          <Icon.Button 
            name = "ios-menu" 
            size={25} 
            backgroundColor="#43BF67"
            onPress={() => navigation.openDrawer()}>
  
          </Icon.Button>
        )
        
      }}
      />
     </PackageStack.Navigator>
  
  
    );

export default MaintabScreen;

const styles = StyleSheet.create({
container: {
  flex: 1, 
  alignItems: 'center', 
  justifyContent: 'center'
},
});