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
            mojlighetText: "You have good prospects for buying solar cells in your location.",
            energiText: "You will produce 5500 kWh per year which is equivalent to 69% of your yearly consumption.",
            pengarText: "You will save 5775 SEK per year. After 16 years you will have earned back your investment."
        };
    }

    navigate() {
        this.props.navigation.navigate('Home');
    }

    navigateBack(){
        this.props.navigation.navigate('Step4View');
    }
    render(){
        return(

            <View style={styles.container}>
                <Image source={require('../images/background.png')} style={styles.imageThings} >
                    <View style={[styles.boxContainer, styles.boxOne]}>

                        <View style={[styles.boxContainer, styles.boxOneOne]}>
                            <Image style={{width:128,height:128}}
                                   source = {require('../images/faceHappy.png')}>
                            </Image>
                        </View>
                        <View style={[styles.boxContainer, styles.boxOneTwo]}>
                            <Text style={styles.baseText}>
                                <Text style={styles.titleText} onPress={this.onPressTitle}>
                                    {this.state.mojlighetText}
                                </Text>
                            </Text>
                        </View>
                    </View>
                    <View style={[styles.boxContainer, styles.boxTwo]}>
                        <View style={[styles.boxContainer, styles.boxTwoOne]}>
                            <Text style={styles.baseText}>
                                <Text style={styles.titleText} onPress={this.onPressTitle}>
                                    {this.state.energiText}
                                </Text>
                            </Text>
                        </View>
                        <View style={[styles.boxContainer, styles.boxTwoTwo]}>
                            <Image style={{width:138,height:138}}
                                   source = {require('../images/piechart.png')}>
                            </Image>

                        </View>
                    </View>
                    <View style={[styles.boxContainer, styles.boxThree]}>
                        <View style={[styles.boxContainer, styles.boxThreeOne]}>
                            <Image style={{width:120,height:120}}
                                source = {require('../images/bock.png')}>
                            </Image>
                        </View>
                        <View style={[styles.boxContainer, styles.boxThreeTwo]}>
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
                            <Text style={styles.buttonTextStyle}>Done</Text>
                        </Button>
                    </View>
                    <Text style={{marginBottom:"5%"}} onPress={() => this.navigateBack()}>Back</Text>
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
        marginTop: 15,

    },
    mainContentContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    boxOne: {
        flex: 3, // 3:6
        backgroundColor: 'white',
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'flex-start',
        backgroundColor: 'rgba(255,255,255,0.5)',
    },

    boxTwo: {
        flex: 3, // 1:6
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'flex-start',
        backgroundColor: 'rgba(255,255,255,0.5)',

    },
    boxThree: {
        flex: 3, // 2:6
        flexDirection: 'row',
        //justifyContent: 'space-between', // main axis
        alignItems: 'flex-start', // cross axis
        backgroundColor: 'rgba(255,255,255,0.5)',


    },
    boxOneOne: {
        flex: 1, // 3:6
        backgroundColor: 'rgba(255,255,255,0)',
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    boxOneTwo: {
        flex: 1, // 3:6
        backgroundColor: 'rgba(255,255,255,0)',
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginRight: 10,
    },
    boxTwoOne: {
        flex: 1, // 3:6
        backgroundColor: 'rgba(255,255,255,0)',
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginLeft : 10
    },
    boxTwoTwo: {
        flex: 1, // 3:6
        backgroundColor: 'rgba(255,255,255,0)',
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    boxThreeOne: {
        flex: 1, // 3:6
        backgroundColor: 'rgba(255,255,255,0)',
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    boxThreeTwo: {
        flex: 1, // 3:6
        backgroundColor: 'rgba(255,255,255,0)',
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginRight: 10,
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
    stepTextStyle: {
        color: 'white',
        fontFamily: 'Helvetica',
        fontSize: 20,
        fontWeight: 'bold',
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
