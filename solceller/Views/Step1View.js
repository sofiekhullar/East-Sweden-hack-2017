import React, { Component } from 'react';
import {StyleSheet, View, ScrollView, Image, TextInput, TouchableOpacity} from 'react-native';
import { Container, Header, Content, Text, Thumbnail } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import Button from 'apsl-react-native-button'
import {getSunHours} from "../assets/Functions";

class Step1View extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputText: ""
        }
    };

    getData(){
        getSunHours();
    }

    navigate() {
        this.props.navigation.navigate('Step2View', { address: this.state.inputText });
    }

    render() {
        this.getData();
        return (
            <View style={styles.container}>
                <Image source={require('../images/background.png')} style={styles.imageThings} >

                    <View style={[styles.boxContainer, styles.mainContentContainer]}>
                        <Text style={styles.stepTextStyle}>Steg 1</Text>
                        <Text style={styles.descriptionTextStyle}>Vart bor du?</Text>
                        <TextInput
                            onChangeText={(inputText) => this.setState({inputText})}
                            // Adding hint in Text Input using Place holder.
                            placeholder="Fyll i här..."

                            // Making the Under line Transparent.
                            underlineColorAndroid='transparent'

                            // Calling the custom TextInputStyleClass.
                            style={styles.TextInputStyleClass}/>
                    </View>

                    <View style={[styles.boxContainer, styles.buttonContainer]}>
                        <TouchableOpacity disabled={false}>
                        <Button style={styles.buttonStyle} textStyle={styles.textStyle}
                                onPress={() => this.navigate()}
                                title="Press here!">
                            <Text style={styles.buttonTextStyle}>Nästa</Text>
                        </Button>
                        </TouchableOpacity>
                    </View>
                </Image>
            </View>
        );
    }
}

Step1View.navigationOptions = {
    title: 'Hack solceller sweden',
    header: null
};

export default Step1View;

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



