import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Swiper from 'react-native-swiper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AllStaff from './AllStaff';

const HomeScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
          <View style={styles.sliderContainer}>
              <Swiper autoplay height={200}>
                  <View style={styles.slide}>
                      <Image
                        source={require('../image/forest1.jpg')}
                        resizeMode="cover"
                        style={styles.sliderImage}
                      />
                  </View>
                  <View style={styles.slide}>
                      <Image
                        source={require('../image/garden.jpg')}
                        resizeMode="cover"
                        style={styles.sliderImage}
                      />
                  </View>
                  <View style={styles.slide}>
                      <Image
                        source={require('../image/boat.jpg')}
                        resizeMode="cover"
                        style={styles.sliderImage}
                      />
                  </View>
                  <View style={styles.slide}>
                      <Image
                        source={require('../image/food.jpg')}
                        resizeMode="cover"
                        style={styles.sliderImage}
                      />
                  </View>

              </Swiper>

          </View>
          <View style={styles.categoryContainer}>
              <TouchableOpacity style={styles.categoryBtn} onPress={() =>navigation.navigate('AllStaff',{title:'All Staff'})}>
              <View style={styles.categoryIcon}>
                  <Ionicons
                    name="body"
                    size={30}
                    color="#000"
                  />

              </View>
              <Text style={styles.categoryBtnTxt}>Staff</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.categoryBtn} onPress={() => navigation.navigate('SearchStaff',{title:'Search Staff'})}>
              <View style={styles.categoryIcon}>
                  <Ionicons
                    name="search-circle"
                    size={30}
                    color="#000"
                  />

              </View>
              <Text style={styles.categoryBtnTxt}>Search Staff</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.categoryBtn} onPress={() => navigation.navigate('AllCustomer',{title:'All Customer'})}>
              <View style={styles.categoryIcon}>
                  <Ionicons
                    name="person"
                    size={25}
                    color="#000"
                  />

              </View>
              <Text style={styles.categoryBtnTxt}>customer</Text>
              </TouchableOpacity>
              

          </View>
          <View style={styles.categoryContainer}>
          <TouchableOpacity style={styles.categoryBtn} onPress={() => navigation.navigate('AllPackage',{title:'All Package'})}>
              <View style={styles.categoryIcon}>
                  <Ionicons
                    name="file-tray-stacked"
                    size={25}
                    color="#000"
                  />

              </View>
              <Text style={styles.categoryBtnTxt}>Package</Text>
              </TouchableOpacity>
             
              <TouchableOpacity style={styles.categoryBtn} onPress={() => navigation.navigate ('Booking',{title:'Booking'})}>
              <View style={styles.categoryIcon}>
                  <Ionicons
                    name="calendar"
                    size={25}
                    color="#000"
                  />

              </View>
              <Text style={styles.categoryBtnTxt}>booking</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.categoryBtn} onPress={() => navigation.navigate('SumBook',{title:'Booking Summary'})}>
              <View style={styles.categoryIcon}>
                  <Ionicons
                    name="pie-chart"
                    size={25}
                    color="#000"
                  />

              </View>
              <Text style={styles.categoryBtnTxt}>Summary</Text>
              </TouchableOpacity>
              

          </View>
       
        
        
      </View>
    );
  };
  
  export default HomeScreen;
  
  const styles = StyleSheet.create({
    container: {
        flex: 1, 
    },
    sliderContainer: {
        height: 200,
        width: '90%',
        marginTop: 10,
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 8,
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent',
        borderRadius: 8,
      },
    sliderImage: {
        height: '100%',
        width: '100%',
        alignSelf: 'center',
        borderRadius: 8,
      },
      categoryIcon: {
        borderWidth: 0,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        width: 70,
        height: 70,
        backgroundColor: '#82E0AA',
        borderRadius: 50,
      },
      categoryContainer: {
        flexDirection: 'row',
        width: '90%',
        alignSelf: 'center',
        marginTop: 25,
        marginBottom: 10,
      },
      categoryBtn: {
        flex: 1,
        width: '30%',
        marginHorizontal: 0,
        alignSelf: 'center',
      },
      categoryBtnTxt: {
        alignSelf: 'center',
        marginTop: 5,
        color: '#000',
      },

  });