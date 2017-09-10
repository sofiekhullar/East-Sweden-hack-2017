import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

//import React, { Component } from 'react';
import {  ScrollView} from 'react-native';
import ButtonComponent, { CircleButton, RoundButton, RectangleButton } from 'react-native-button-component';
import { Container, Header, Content, Thumbnail } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';


import Button from 'apsl-react-native-button';



class ResultView extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            mojlighetText: "Du har goda möjligheter för att ha solceller.",
            energiText: "Du kommer producera x kWh per månad.",
            pengarText: "Du kommer spara y kr per månad."
        };
    }

    navigate() {
        this.props.navigation.navigate('Home');
    }

    render(){
        return(

            <View style={styles.container}>
                <Image source={require('../images/background.png')} style={styles.imageThings} >
                <View style={[styles.boxContainer, styles.boxOne]}>
                    <View style={[styles.boxContainer, styles.boxOne]}>
                        <Image style={{width:128,height:128}}
                               source = {require('../images/faceHappy.png')}>
                        </Image>
                    </View>
                    <View style={[styles.boxContainer, styles.boxOne]}>
                        <Text style={styles.baseText}>
                            <Text style={styles.titleText} onPress={this.onPressTitle}>
                                {this.state.mojlighetText}
                            </Text>
                        </Text>
                    </View>
                </View>
                <View style={[styles.boxContainer, styles.boxTwo]}>
                    <View style={[styles.boxContainer, styles.boxTwo]}>
                        <Text style={styles.baseText}>
                            <Text style={styles.titleText} onPress={this.onPressTitle}>
                                {this.state.energiText}
                            </Text>
                        </Text>
                    </View>
                    <View style={[styles.boxContainer, styles.boxTwo]}>
                        <Image style={{width:128,height:128}}
                               source = {require('../images/faceHappy.png')}>
                        </Image>

                    </View>
                </View>
                <View style={[styles.boxContainer, styles.boxThree]}>
                    <View style={[styles.boxContainer, styles.boxThree]}>
                        <Image
                            source = {require('../images/bock.png')}>
                        </Image>
                    </View>
                    <View style={[styles.boxContainer, styles.boxThree]}>
                        <Text style={styles.baseText}>
                            <Text style={styles.titleText} onPress={this.onPressTitle}>
                                {this.state.pengarText}
                            </Text>
                        </Text>
                    </View>
                </View>
                <View style={[styles.boxContainer, styles.buttonContainer]}>
                    <Button style={styles.buttonStyle} textStyle={styles.textStyle}
                            onPress={() => this.navigate()}
                            title="Press here!">
                        <Text style={styles.buttonTextStyle}>Nästa</Text>
                    </Button>
                </View>
                </Image>
            </View>
        )
    };
}

ResultView.navigationOptions = {
    title: 'Hack solceller sweden',
    header: null
};
const styles = StyleSheet.create({

    container: {
        flex: 1, // 1:1
        flexDirection: 'column',
    },
    boxContainer: {
        flex: 1, // 1:3
        alignItems: 'center',
        justifyContent: 'center',
        //marginVertical: 15,
    },
    boxOne: {
        flex: 3, // 3:6
        //backgroundColor: '#FFEEE4',
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'flex-start',
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
    boxTwo: {
        flex: 3, // 1:6
        //backgroundColor: '#f1d868',
        flexDirection: 'row',
        alignItems: 'flex-start'
    },
    boxThree: {
        flex: 3, // 2:6
        flexDirection: 'row',
        //justifyContent: 'space-between', // main axis
        alignItems: 'flex-start', // cross axis
        //backgroundColor: '#ceb222',

    },
    buttonContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        //marginHorizontal: 15,
    },

    buttonStyle: {
        backgroundColor: 'green',
        borderColor: 'green',
        width: 350,
        height: 60
    },


    baseText: {
        //fontFamily: 'Cochin',
        alignItems: 'flex-start',
        flexDirection: 'column'
    },
    titleText: {
        color: 'black',
        fontFamily: 'Helvetica',
        fontSize: 20,
        //fontWeight: 'bold',
        paddingBottom: 10
    },

    imageThings: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: null,
        height: null,
        backgroundColor: 'rgba(0,0,0,0)'
    },

});


export default ResultView;


/*<View>
                <Text/>
                <Text/>
                <Text/>
                <Text>This is Result View</Text>
                <Button onPress={() => this.props.navigation.navigate('Home', { name: 'Jane' })}
                        title="Press here!">
                </Button>
            </View>*/
