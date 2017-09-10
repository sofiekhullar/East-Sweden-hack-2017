import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Image, TextInput, TouchableHighlight, TouchableOpacity } from 'react-native';
import { Container, Header, Content, Text, Thumbnail, Alert } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import Button from 'apsl-react-native-button';

export default class Step3View extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedImage1: false,
            selectedImage2: false,
            selectedImage3: false,
            selectedImage4: false,
            selectedImage5: false
        }
    };

    firstDir(){
        this.setState({selectedImage1:false});
        this.setState({selectedImage2:true});
        this.setState({selectedImage3:true});
        this.setState({selectedImage4:true});
        this.setState({selectedImage5:true});
    }

    secondDir(){
        this.setState({selectedImage1:true});
        this.setState({selectedImage2:false});
        this.setState({selectedImage3:true});
        this.setState({selectedImage4:true});
        this.setState({selectedImage5:true});
    }

    thirdDir(){
        this.setState({selectedImage1:true});
        this.setState({selectedImage2:true});
        this.setState({selectedImage3:false});
        this.setState({selectedImage4:true});
        this.setState({selectedImage5:true});
    }

    fourthDir(){
        this.setState({selectedImage1:true});
        this.setState({selectedImage2:true});
        this.setState({selectedImage3:true});
        this.setState({selectedImage4:false});
        this.setState({selectedImage5:true});
    }

    fifthDir(){
        this.setState({selectedImage1:true});
        this.setState({selectedImage2:true});
        this.setState({selectedImage3:true});
        this.setState({selectedImage4:true});
        this.setState({selectedImage5:false});
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
                        <Text style={styles.stepTextStyle}>Step 3</Text>

                    </View>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <Text style={styles.descriptionTextStyle}>What direction is your roof pointed to?</Text>
                    </View>

                    <View style={{flex: 1, flexDirection: 'row'}}>
                            <View style={{flex:1, paddingLeft: '13%'}}>
                                <TouchableOpacity onPress={()=>this.firstDir()}>
                                    <Image
                                        style={ this.state.selectedImage1 ? styles.imageSelected : styles.image}
                                        source={require('../images/west.png')}
                                    />
                                </TouchableOpacity>
                            </View>
                            <View style={{flex:1, paddingLeft: '19%'}}>
                                <TouchableOpacity onPress={()=>this.secondDir()}>
                                    <Image
                                        style={ this.state.selectedImage2 ? styles.imageSelected : styles.image}
                                        source={require('../images/east.png')}
                                    />
                                </TouchableOpacity>
                            </View>
                    </View>

                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <TouchableOpacity style={{paddingLeft: '0%'}} onPress={()=>this.thirdDir()}>
                            <Image
                                style={ this.state.selectedImage3 ? styles.imageSelected : styles.image}
                                source={require('../images/southwest.png')}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={{paddingLeft: '5%'}} onPress={()=> this.fourthDir()}>
                            <Image
                                style={ this.state.selectedImage4 ? styles.imageSelected : styles.image}
                                source={require('../images/south.png')}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={{paddingLeft: '5%'}} onPress={()=> this.fifthDir()}>
                            <Image
                                style={ this.state.selectedImage5 ? styles.imageSelected : styles.image}
                                source={require('../images/southeast.png')}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={[styles.boxContainer, styles.buttonContainer]}>
                        <Button style={styles.buttonStyle} textStyle={styles.textStyle} onPress={()=> this.navigate()}>
                            <Text style={styles.buttonTextStyle}>Next</Text>
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
    image:{
        width: 80,
        height: 80
    },
    imageSelected:{
        width: 80,
        height: 80,
        opacity: 0.5
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
        paddingTop: 80,
        paddingBottom: 20
    },
    descriptionTextStyle: {
        color: 'white',
        fontFamily: 'Helvetica',
        fontSize: 20,
        paddingBottom: 10
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