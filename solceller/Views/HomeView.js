import React from 'react';
import {View, Text, Button} from 'react-native';

class HomeView extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View>
                <Text/>
                <Text/>
                <Text/>
                <Text/>
                <Text/>
                <Text>This is homeview</Text>
                <Button
                    onPress={() => this.props.navigation.navigate('Step1View', { name: 'Jane' })}
                    title="Press here!"
                />
            </View>
        )
    };
}

HomeView.navigationOptions = {
    title: 'Hack solceller sweden',
    header: null
};

export default HomeView;
