// Change this file! 

import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation';

const HomeScreen = ({ navigation }) => {
  global.points = 60;

  return (
    <SafeAreaView style={styles.container}>
      <Image source = {{uri: "https://cdn-icons-png.flaticon.com/512/6915/6915987.png"}} style={styles.pfp}></Image>
      <Text style={styles.text}>HOME PAGE</Text>
      <Text>Check out your tree below!</Text>
      { points <= 10 && (
        <Image source = {{uri: "http://res.freestockphotos.biz/pictures/15/15924-illustration-of-a-small-cartoon-tree-pv.png"}} style={styles.image}></Image>
      )
      }
      { points <= 30 && points > 10 && (
        <Image source = {{uri: "http://res.freestockphotos.biz/pictures/15/15919-illustration-of-a-small-cartoon-tree-pv.png"}} style={styles.image}></Image>
      )
      }
      { points <= 60 && points > 30 && (
        <Image source = {{uri: "http://res.freestockphotos.biz/pictures/15/15922-illustration-of-a-small-cartoon-tree-pv.png"}} style={styles.image}></Image>
      )
      }
      { points <= 100 && points > 60 && (
        <Image source = {{uri: "http://res.freestockphotos.biz/pictures/15/15932-illustration-of-a-small-cartoon-tree-pv.png"}} style={styles.image}></Image>
      )
      }
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  text: {
    padding: 10,
    fontSize: 50,
    fontWeight: 'bold',
  },
  image: {
    height: '60%',
    width: '60%', 
    alignSelf: 'center',
    
  },
  pfp: {
    height: 50,
    width: 50, 
    alignSelf: 'flex-end',
    marginRight: 10,
  },
});


export default HomeScreen;
