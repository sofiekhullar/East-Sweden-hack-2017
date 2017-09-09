import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

class ResultView extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View>
                <Text/>
                <Text/>
                <Text/>
                <Text>This is Result View</Text>
                <Button onPress={() => this.props.navigation.navigate('Home', { name: 'Jane' })}
                        title="Press here!">
                </Button>
            </View>
        )
    };
}

ResultView.navigationOptions = {
    title: 'Hack solceller sweden',
    header: null
};

export default ResultView;
