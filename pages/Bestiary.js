import React from 'react';
import { Alert, StyleSheet, Text, View, TextInput, ScrollView, Button, TouchableHighlight, Image } from 'react-native';
import DataManager from '../components/DataManager.js';

export default class Bestiary extends React.Component {

  static navigationOptions = {
    title: 'Bestiary',
  };

  constructor(props) {
    super(props);
    this.state = {index: 0}
    this.state = {entries : []}
    this.state = {monsterName: ''}
    this.state = {healthDice: 0}
    this.state = {numberOfDice: 0}
    this.state = {healthBonus: 0}
    this.state = {setHealth : 0}
    this.state = {monsterAC: 0}
    this.state = {monsterDescription: ''}
    //this.state = {databaseReference: ''}    
  }

  componentWillMount(){
    //let dataManager = new DataManager
    //this.setState({databaseReference : dataManager})
    this.setState({entries: []})
  }

  validateState () {
    if(this.state.monsterName == ''){
      Alert.alert('Error','Monster requires a name',[{text:'Close'}])
      return 0
    }
    if(this.state.monsterAC == '' || this.state.monsterAC < 1){
      Alert.alert('Error','Invalid AC',[{text:'Close'}])
      return 0
    }
    if(this.state.setHealth == '' || this.state.setHealth < 1){
      Alert.alert('Error','Invalid health',[{text:'Close'}])
      return 0
    }
    if(this.state.numberOfDice == '' || this.state.numberOfDice < 1){
      Alert.alert('Error','Invalid number of dice',[{text:'Close'}])
      return 0
    }    
    if(this.state.healthDice == '' || this.state.healthDice < 1){
      Alert.alert('Error','Invalid dice type',[{text:'Close'}])
      return 0
    }
    if(this.state.healthBonus == '' || this.state.healthBonus < 1){
      Alert.alert('Error','Invalid health bonus',[{text:'Close'}])
      return 0
    }
    return 1
  }

  resetState(){
    this.setState({monsterName : ''})
    this.setState({healthDice: 0})
    this.setState({numberOfDice : 0})
    this.setState({healthBonus : 0})
    this.setState({setHealth : 0})
    this.setState({monsterAC : 0})
    this.setState({monsterDescription : ''})
    //this.setState({index : (this.state.index + 1)})
  }

  addNewMonster() {
    if(!this.validateState()){
      return
    }
    const index = this.databaseReference.getNextIndex()
    console.log("index:" + index)
    const monster = [index, this.state.monsterName,this.state.setHealth,this.state.numberOfDice,this.state.healthDice,this.state.healthBonus,this.state.monsterAC,this.state.monsterDescription]
    const monsters = this.databaseReference.addNewMonster(monster)
    this.setState({entries : monsters})    

    this.resetState()
    console.log("Entries " + this.state.entries.length)
    for(i=0;i<this.state.entries.length;++i){
      console.log(this.state.entries[i])
    }
    console.log("Done")
    this.textInput1.clear()
    this.textInput2.clear()
    this.textInput3.clear()
    this.textInput4.clear()
    this.textInput5.clear()
    this.textInput6.clear()
    this.textInput7.clear() 
  }

  removeBeast = (entry) => {
    
  }

  searchBeast = (entry) => {

  }

  render() {
    return (
      <View style={styles.container}>
        <DataManager ref={databaseReference => {this.databaseReference = databaseReference}}/>
        <View style={styles.upper}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.text}>Monster Name:</Text>
            <TextInput
              ref={input1 => { this.textInput1 = input1}}
              placeholder="___"
              maxLength = {24}
              onChangeText={(monsterName) => this.setState({monsterName})}
            />
            <Text style={styles.text}>AC:</Text>
            <TextInput
              ref={input2 => { this.textInput2 = input2}}
              placeholder="__"
              keyboardType='numeric'
              maxLength = {2}
              onChangeText={(monsterAC) => this.setState({monsterAC})}
            />
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.text}>Health:</Text>
            <TextInput
              ref={input3 => { this.textInput3 = input3}}
              placeholder="___"
              keyboardType='numeric'
              maxLength = {4}
              onChangeText={(setHealth) => this.setState({setHealth})}
            />
            <Text style={styles.text}> OR  Health dice:</Text>
            <TextInput
              ref={input4 => { this.textInput4 = input4}}
              placeholder="__"
              keyboardType='numeric'
              maxLength = {2}
              onChangeText={(numberOfDice) => this.setState({numberOfDice})}
            />
            <Text style={styles.text}> D</Text>
            <TextInput
              ref={input5 => { this.textInput5 = input5}}
              placeholder="__"
              keyboardType='numeric'
              maxLength = {2}
              onChangeText={(healthDice) => this.setState({healthDice})}
            />
            <Text style={styles.text}> + </Text>
            <TextInput
              ref={input6 => { this.textInput6 = input6}}
              placeholder="__"
              keyboardType='numeric'
              maxLength = {4}
              onChangeText={(healthBonus) => this.setState({healthBonus})}
            />
            <TouchableHighlight onPress={() => this.addNewMonster(this)}>
              <Image source={require('../assets/plus.png')}/>
            </TouchableHighlight>
          </View>
          <View><Text style={styles.text}>Descripition:</Text></View>
          <View>
            <TextInput
              ref={input7 => { this.textInput7 = input7}}
              placeholder="__"
              maxLength = {254}
              onChangeText={(monsterDescription) => this.setState({monsterDescription})}
            />
          </View>
        </View>
          <View style={styles.lower}>
          <ScrollView style={styles.scrollList}>           
          </ScrollView>
        </View>
      </View>  
    );
  }
}

const styles = StyleSheet.create({
  ac: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    fontSize: 16,
    padding: 2,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: 900,
  },
  health: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    fontSize: 16,
    padding: 2,
  },
  imageButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 2,
    alignItems: 'center',
  },
  lower :{
    flex: 5,
    flexDirection : 'column-reverse',
    width: 350,
  },
  name: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    fontSize: 16,
    padding: 2,
  },
  text: {
    fontSize: 16,
    padding: 5,
  },
  scrollList : {
    borderColor: 'black',
    borderWidth: 5,
    borderRadius: 3,
    padding: 5,
    shadowColor: 'black',
  },
  upper: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 2,
    flexDirection : 'column',
  },  
});