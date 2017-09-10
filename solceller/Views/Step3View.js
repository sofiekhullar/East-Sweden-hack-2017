import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Image, TextInput, TouchableHighlight, TouchableOpacity } from 'react-native';
import { Container, Header, Content, Text, Thumbnail, Alert } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import Button from 'apsl-react-native-button';

export default class Step3View extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedImage: 0
        }
    };

    _firstHouse(){
        this.setState({selectedImage:1});
    }

    _secondHouse(){
        this.setState({selectedImage:2});
    }

    _thirdHouse(){
        this.setState({selectedImage:3});
    }

    navigate() {
        this.props.navigation.navigate('Step4View');
    }

    render() {
        let size = 80;
        return (
            <View style={styles.container}>
                <Image source={require('../images/background.png')} style={styles.imageThings} >

                    <View style={[styles.boxContainer, styles.mainContentContainer]}>
                        <Text style={styles.stepTextStyle}>Steg 3</Text>
                        <Text style={styles.descriptionTextStyle}>Direction?</Text>
                    </View>


                    <View style={{flex: 1, flexDirection: 'row'}}>
                            <View style={{flex:1, paddingLeft: '8%'}}>
                                <TouchableOpacity onPress={this.firstHouse}>
                                    <Image
                                        style={{width: size, height: size}}
                                        source={require('../images/lutning1.png')}
                                    />
                                </TouchableOpacity>
                            </View>
                            <View style={{flex:1, paddingLeft: '25%'}}>
                                <TouchableOpacity onPress={this.secondHouse}>
                                    <Image
                                        style={{width: size, height: size}}
                                        source={require('../images/lutning2.png')}
                                    />
                                </TouchableOpacity>
                            </View>
                    </View>

                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <TouchableOpacity style={{paddingLeft: '0%'}} onPress={this.thirdHouse}>
                            <Image
                                style={{width: size, height: size}}
                                source={require('../images/lutning3.png')}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={{paddingLeft: '5%'}} onPress={this.thirdHouse}>
                            <Image
                                style={{width: size, height: size}}
                                source={require('../images/lutning3.png')}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={{paddingLeft: '5%'}}onPress={this.thirdHouse}>
                            <Image
                                style={{width: size, height: size}}
                                source={require('../images/lutning3.png')}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={[styles.boxContainer, styles.buttonContainer]}>
                        <Button style={styles.buttonStyle} textStyle={styles.textStyle} onPress={()=> this.navigate()}>
                            <Text style={styles.buttonTextStyle}>Nästa</Text>
                        </Button>
                    </View>

                </Image>
            </View>


        );
    }
}

Step3View.navigationOptions = {
    title: 'Hack solceller sweden',
    header: null
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    firstContainer: {
        flexDirection: 'row'
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
        paddingTop: 40,
        paddingBottom: 20
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
    },
    wordContainer:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',


    },item2:{
        flex: 1,
        alignItems: 'flex-start',

    }
});