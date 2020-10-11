import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Drawer } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';


export function DrawerContent (props) {
    return(
        <View style={{flex:1}}>
        <DrawerContentScrollView {...props}>
            <View style={styles.drawerContent}>
                <Drawer.Section style={styles.drawerSection}>
                    <DrawerItem
                        icon={({color, size}) => (
                            <Icon
                                name="home-outline"
                                color={color}
                                size={size}
                            />
                        )}
                        label="Home"
                        onPress={() => {props.navigation.navigate('Home')}}

                    />
                    <DrawerItem
                        icon={({color, size}) => (
                            <Icon
                                name="body-outline"
                                color={color}
                                size={size}
                            />
                        )}
                        label="Staff"
                        onPress={() => {props.navigation.navigate('Staff')}}

                    />
                    <DrawerItem
                        icon={({color, size}) => (
                            <Icon
                                name="person-outline"
                                color={color}
                                size={size}
                            />
                        )}
                        label="Customer"
                        onPress={() => {props.navigation.navigate('Customer')}}

                    />
                    <DrawerItem
                        icon={({color, size}) => (
                            <Icon
                                name="file-tray-stacked-outline"
                                color={color}
                                size={size}
                            />
                        )}
                        label="Package"
                        onPress={() => {props.navigation.navigate('Package')}}

                    />

                        

                </Drawer.Section>
                </View>
                </DrawerContentScrollView>
                

    </View>

    );
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });