import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

class Step3View extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View>
                <Text/>
                <Text/>
                <Text/>
                <Text>This is Step 3 View</Text>
                <Button onPress={() => this.props.navigation.navigate('Result', { name: 'Jane' })}
                        title="Press here!">
                </Button>
            </View>
        )
    };
}

Step3View.navigationOptions = {
    title: 'Hack solceller sweden',
    header: null
};

export default Step3View;
