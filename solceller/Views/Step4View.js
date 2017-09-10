import React from 'react';
import {View, Text, StyleSheet, TextInput, Image} from 'react-native';
import Button from 'apsl-react-native-button'

class Step4View extends React.Component{
    constructor(props){
        super(props);
    }

    navigate() {
        this.props.navigation.navigate('Result');
    }

    navigateBack(){
        this.props.navigation.navigate('Step2View');
    }

    render(){
        return(
            <View style={styles.container}>
                <Image source={require('../images/background.png')} style={styles.imageThings} >

                    <View style={[styles.boxContainer, styles.mainContentContainer]}>
                        <Text style={styles.stepTextStyle}>Step 4</Text>
                        <Text style={styles.descriptionTextStyle}>How many square meters of solar cell panels do you want to install?</Text>
                        <TextInput
                            onChangeText={(inputText) => this.setState({inputText})}
                            // Adding hint in Text Input using Place holder.
                            placeholder="Enter here..."

                            // Making the Under line Transparent.
                            underlineColorAndroid='transparent'

                            // Calling the custom TextInputStyleClass.
                            style={styles.TextInputStyleClass}/>
                    </View>

                    <View style={[styles.boxContainer, styles.buttonContainer]}>
                        <Button style={styles.buttonStyle} textStyle={styles.textStyle} onPress={()=> this.navigate()}>
                            <Text style={styles.buttonTextStyle}>Next</Text>
                        </Button>
                    </View>
                    <Text style={{marginBottom:"5%"}} onPress={() => this.navigateBack()}>Back</Text>
                </Image>
            </View>
        )
    };
}

Step4View.navigationOptions = {
    title: 'Hack solceller sweden',
    header: null
};

export default Step4View;

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
