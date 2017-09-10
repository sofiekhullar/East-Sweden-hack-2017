import React from 'react';
import {View, Text, Button, StyleSheet, Image, TouchableHighlight} from 'react-native';

class HomeView extends React.Component{
    constructor(props){
        super(props);
    }

    navigate() {
        this.props.navigation.navigate('Step1View');
    }
    login(){
        console.log('Login should be here');
    }
    render(){
        return(
            <View style={styles.container}>
                <Image source={require('../images/background.png')} style={styles.imageThings} >
                    <View style={styles.viewStyle}>
                        <Text style={styles.stepTextStyle}>Welcome</Text>
                    </View>

                    <View style={styles.viewStyle}>
                    <TouchableHighlight onPress={() => this.navigate()}>
                        <Image style={{width: 300, height: 300}} source={require('../images/startbutton.png')} />
                    </TouchableHighlight>
                    </View>

                    <View style={styles.viewStyle}>
                    <Button style={styles.buttonStyle} textStyle={styles.textStyle}
                            onPress={() => this.login()}
                            title="Login here">
                    </Button>
                    </View>
                </Image>
            </View>
        )
    };
}

HomeView.navigationOptions = {
    title: 'Hack solceller sweden',
    header: null
};

export default HomeView;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    viewStyle: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    buttonContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    imageThings: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: null,
        height: null,
        backgroundColor: 'rgba(0,0,0,0)'
    },
    stepTextStyle: {
        color: 'white',
        fontFamily: 'Helvetica',
        fontSize: 20,
        fontWeight: 'bold',
        paddingBottom: 10,
        alignSelf: 'flex-start'
    },
    descriptionTextStyle: {
        color: 'white',
        fontFamily: 'Helvetica',
        fontSize: 20,
        paddingBottom: 60
    },
    buttonTextStyle: {
        color: 'white',
        fontFamily: 'Helvetica',
        fontSize: 20
    },
    buttonStyle: {
        backgroundColor: 'green',
        borderColor: 'green',
        width: 350,
        height: 60
    },
    TextInputStyleClass: {
        textAlign: 'center',
        height: 50,
        width: 300,
        borderWidth: 2,
        borderColor: 'green',
        borderRadius: 10 ,
        backgroundColor : "#FFFFFF"
    }
});

