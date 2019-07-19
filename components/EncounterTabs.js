import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

class EncounterTabs extends React.Component {

    constructor(props) {
        super(props);
        this.state = {mode: 0}
      }

    componentWillMount(){
        this.setState({mode : 0})
    }

    flipState(){
        if(this.state.mode == 0){
            this.setState({mode : 1})
        }
        else {
            this.setState({mode : 0})
        }
    }
    validateState(){
        if(this.state.mode == 0 || this.state.mode == 1){
            return 1
        }
        else {
            console.log("Invalid state in EncounterTab.js")
            this.setState({mode : 0})
        }
        return 0
    }

    updateTab(){
        if(!this.validateState()){
            return
        }
        this.flipState()
        this.props.callback(this.state.mode)
    }

    render () {
        return (
            <View style= {styles.container}>
                <TouchableHighlight
                //style={[(this.state.mode) == 0 ? styles.active : styles.inactive]}
                underlayColor = {'transparent'}
                disabled = {(this.state.mode) == 0 ? true : false}
                onPress={() => this.updateTab()}>
                    <Text //style={styles.text}
                    style={[(this.state.mode) == 0 ? styles.active : styles.inactive]}
                    >
                        Monsters</Text>
                </TouchableHighlight>

                <TouchableHighlight
                //style={[(this.state.mode) == 1 ? styles.active : styles.inactive]}
                underlayColor = {'transparent'} 
                disabled = {(this.state.mode) == 1 ? true : false}
                onPress={() => this.updateTab()}
                >
                    <Text 
                    //style={styles.text} 
                    style={[(this.state.mode) == 1 ? styles.active : styles.inactive]} 
                    >
                        Encounters</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        padding: 5,
        //paddingRight: 5,
    },
    active: {
        fontSize: 18,
        padding: 5,
        textDecorationLine: 'underline',
        //paddingRight: 5,
    },
    inactive: {
        fontSize: 18,
        padding: 5,
        //textDecorationLine: 'underline'
        //paddingRight: 5,
    },
    container: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        width: '100%',
    },
    button:{
        borderColor: 'black',
        borderWidth : 1,
        borderTopLeftRadius : 5,
        borderTopRightRadius : 5,
        //backgroundColor: 'red',
    },
    Iactive:{
        borderColor: 'black',
        borderWidth : 1,
        borderTopLeftRadius : 5,
        borderTopRightRadius : 5,
        //backgroundColor: 'red',
    },
    Iinactive: {
        borderColor: 'black',
        borderWidth : 1,
        borderTopLeftRadius : 5,
        borderTopRightRadius : 5,
       //backgroundColor: 'grey',
    },
  });

export default EncounterTabs