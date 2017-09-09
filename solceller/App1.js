import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Image, TextInput } from 'react-native';
import ButtonComponent, { CircleButton, RoundButton, RectangleButton } from 'react-native-button-component';
import { Container, Header, Content, Text, Thumbnail } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import Button from 'apsl-react-native-button'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialsIcon from 'react-native-vector-icons/MaterialIcons';
import { Sae } from 'react-native-textinput-effects';
import {getSunHours} from "./Functions";

export default class Lutning extends React.Component {
    constructor(props) {
        super(props);
    };

    getData(){
        getSunHours();
    }

  render() {
        this.getData();
    return (
        <View style={styles.container}>
        <Image source={require('./images/background.png')} style={styles.imageThings} >

            <View style={[styles.boxContainer, styles.mainContentContainer]}>
                <Text style={styles.stepTextStyle}>Steg 2</Text>
                <Text style={styles.descriptionTextStyle}>Vad har du för lutning på ditt tak?</Text>
            </View>

            <View style={{flexDirection: 'row', flex: 1}}>
            <View style={styles.wordContainer}>
                <Image
                    style={{width: 100, height: 100}}
                    source={require('./images/lutning1.png')}
                />
                <Image
                    style={{width: 100, height: 100}}
                    source={require('./images/lutning2.png')}
                />
                <Image
                    style={{width: 100, height: 100}}
                    source={require('./images/lutning3.png')}
                />
            </View>
            <View style={styles.item2}>
                <Text style={{paddingTop:20}}> 0-10 grader </Text>
                <Text> 10-30 grader </Text>
                <Text> 30-60 grader </Text>

            </View>
            </View>


            <View style={[styles.boxContainer, styles.buttonContainer]}>
                <Button style={styles.buttonStyle} textStyle={styles.textStyle}>
                    <Text style={styles.buttonTextStyle}>Nästa</Text>
                </Button>
            </View>

        </Image>
        </View>


    );
  }
}


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
    },
    wordContainer:{

        flexDirection: 'column',


    },item2:{
        flexDirection:'column',
    }


});

/*
return (
    <Container>
        <View style={styles.container}>
            <View style={[styles.boxContainer, styles.mainContentContainer]}>
            </View>
            <View style={[styles.boxContainer, styles.buttonContainer]}>

                <Button block success>
                    <Text>Success</Text>
                </Button>
            </View>
        </View>

    </Container>
);

        <Container>
                <Image
                    source={require('./images/background.png')}
                    style={styles.imageThings}>
            <Header />
            <Content>
                <Grid>
                    <Col style={{ backgroundColor: '#635DB7', height: 500 }}>
                    </Col>
                </Grid>

            </Content>
                    <Button block success large >
                        <Text>Nästa</Text>
                    </Button>
        </Image>
        </Container>*/


