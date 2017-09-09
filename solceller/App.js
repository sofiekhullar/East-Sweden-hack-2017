import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Image } from 'react-native';
import ButtonComponent, { CircleButton, RoundButton, RectangleButton } from 'react-native-button-component';
import { Container, Header, Content, Button, Text, Thumbnail } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
//import Button from 'apsl-react-native-button'
//import CircleButton from 'react-native-circle-button';
//import Button from 'react-native-button';

export default class App extends React.Component {
  render() {
    return (

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
                <Grid>
                    <Col style={{ backgroundColor: '#635DB7', height: 0 }}></Col>
                </Grid>

            </Content>
                    <Button block success large >
                        <Text>Nästa</Text>
                    </Button>
        </Image>
        </Container>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
    boxContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    mainContentContainer: {
      flex: 7,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonContainer: {
      flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageThings: {
        flex: 1,
        width: undefined,
        height: undefined,
        backgroundColor:'transparent',
        justifyContent: 'center',
        alignItems: 'center'
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
);*/
