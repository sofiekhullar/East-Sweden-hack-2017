import React from 'react';
import {View, Text, StyleSheet, TextInput, Image} from 'react-native';
import Button from 'apsl-react-native-button'

class LoginView extends React.Component{
    constructor(props){
        super(props);
    }

    navigate() {
        this.props.navigation.navigate('StatsView');
    }

    render(){
        return(
            <View style={styles.container}>
                <Image source={require('../images/background.png')} style={styles.imageThings} >

                    <View style={[styles.boxContainer, styles.mainContentContainer]}>
                        <Text style={styles.descriptionTextStyle}>Please enter your username and password:</Text>
                    </View>

                    <TextInput
                        onChangeText={(inputText) => this.setState({inputText})}
                        placeholder="Enter username..."
                        underlineColorAndroid='transparent'
                        style={styles.TextInputStyleClass}/>

                    <TextInput
                        onChangeText={(inputText) => this.setState({inputText})}
                        secureTextEntry={true}
                        placeholder="Enter password..."
                        underlineColorAndroid='transparent'
                        style={styles.TextInputStyleClass}/>

                    <View style={[styles.boxContainer, styles.buttonContainer]}>
                        <Button style={styles.buttonStyle} textStyle={styles.textStyle} onPress={()=> this.navigate()}>
                            <Text style={styles.buttonTextStyle}>Login</Text>
                        </Button>
                    </View>
                </Image>
            </View>
        )
    };
}

LoginView.navigationOptions = {
    title: 'Hack solceller sweden',
    header: null
};

export default LoginView;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    boxContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    mainContentContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
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
        paddingBottom: 10
    },
    descriptionTextStyle: {
        color: 'white',
        fontFamily: 'Helvetica',
        fontSize: 20,
        paddingBottom: 60,
        textAlign: 'center'
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
