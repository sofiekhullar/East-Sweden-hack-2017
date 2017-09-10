import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

class Step4View extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View>
                <Text/>
                <Text/>
                <Text/>
                <Text>This is Step4 View</Text>
                <Button onPress={() => this.props.navigation.navigate('Result', { name: 'Jane' })}
                        title="Press here!">
                </Button>
            </View>
        )
    };
}

Step4View.navigationOptions = {
    title: 'Hack solceller sweden',
    header: null
};

export default Step4View;
