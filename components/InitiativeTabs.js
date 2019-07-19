import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

class InitiativeTabs extends React.Component {

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
            console.log("Invalid state in InitiaveTab.js")
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
                    <Text style={[(this.state.mode) == 0 ? styles.active : styles.inactive]}>Characters</Text>
                </TouchableHighlight>

                <TouchableHighlight
                //style={[(this.state.mode) == 1 ? styles.active : styles.inactive]} 
                underlayColor = {'transparent'} 
                disabled = {(this.state.mode) == 1 ? true : false}
                onPress={() => this.updateTab()}
                >
                    <Text style={[(this.state.mode) == 1 ? styles.active : styles.inactive]}>Parties</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        padding: 5,
    },
    container: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        width: '100%',
    },
    active:{
        fontSize: 18,
        padding: 5,
        textDecorationLine: 'underline',
    },
    inactive: {
        fontSize: 18,
        padding: 5,
    },
  });

export default InitiativeTabs