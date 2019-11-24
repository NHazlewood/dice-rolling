import React from 'react';
import { Alert, StyleSheet, Text, View, TextInput, ScrollView, Button, TouchableHighlight, Image, ImageBackground , Dimensions} from 'react-native';

import DiceInput from '../components/DiceInput.js';
import DiceInput2 from '../components/DiceInput2.js';

export default class Attacking extends React.Component {

  static navigationOptions = {
    title: 'Dice',
  };

  constructor(props) {
    super(props);
    this.state = {outText : []}
    this.state = {coloredRolls : []}
  }

  componentWillMount() {
    this.setState({outText : []})
    this.setState({coloredRolls : []})
  }

  adjustmentCallBack = (newAdjustment) => {
    this.setState({adjustment: newAdjustment})
  }

  recieveRolls = (newRolls) => {
    this.setState({outText : newRolls})
  }

  recieveRolls2 = (newRolls) => {
    this.setState({coloredRolls : newRolls})
    console.log("White Damage:" + this.state.coloredRolls[1][0] + " To Hit:" + this.state.coloredRolls[2][0])
    console.log("Red Damage:" + this.state.coloredRolls[1][1] + " To Hit:" + this.state.coloredRolls[2][1])
  }


  render() {
    return (
      <ImageBackground source={require('../assets/backgroundRolling.png')} style={styles.container}>
        <DiceInput2 callback={this.recieveRolls2}/> 
        <View style={styles.lower}>
          <View style={styles.table}>
          <ScrollView style={styles.scrollingRolls}>
              
          </ScrollView>          
          </View>
        </View>
      </ImageBackground>
    );
  }
}

//dice input 1 scrollview
/*
<ScrollView style={styles.scrollingRolls}>
              {this.state.outText.map((item, key)=>(
              <Text key={key} style={[(item[1]) == "Crit!" ? styles.crit : [(item[1]) == "Fumble!" ? styles.fumble : styles.normal ]]} > 
                Attack #: {item[0]} {item[1]} 
                {"\n"}  To Hit {item[2]} ({[!(Array.isArray(item[3])) ? item[3] : item[3].map((item3, key)=>(<Text key={key}>{[(key*1+1 >= item[3].length) ? ", " : ""]}{item3}</Text>))]}) + {item[4]}) 
                {"\n"}  Damage: {item[5]} ({item[6].map((item6, key)=>(<Text key={key}>{item6}{[(key*1+1 < item[6].length) ? "+" : ""]}</Text>))}){[item[1] == "Crit!" ? "x2" : ""]} + {item[7]}) </Text>)
              )}
          </ScrollView>
*/


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 16,
    width : '100%',
    height: '100%',
  },
  crit: {
    borderColor: '#06e83b', //green
    borderWidth: 2,
    padding: 5,
    fontSize: 16,
  },
  fumble : {
    borderColor: 'red',
    borderWidth: 2,
    padding: 5,
    fontSize: 16,
  },
  lower :{
    flexDirection : 'column-reverse',
    justifyContent: 'center',
  },
  normal : {
    borderColor: '#575a5e',
    borderWidth: 2,
    padding: 5,
    fontSize: 16,
  },
  scrollingRolls : {
    
  },
  text: {
    fontSize: 16,
    padding: 5,
  },
  upper: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 2,
    flexDirection : 'column',
  },
  table: {
    width : '90%',
    height : '65%',
  }
});