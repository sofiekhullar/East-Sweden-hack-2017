import React from 'react';
import SampleText from '../SampleText';
import {ScrollView, StyleSheet} from 'react-native';
import Button from 'apsl-react-native-button'

const Step1Nav = ({ navigation, banner }) => (
    <ScrollView>
        <SampleText>{banner}</SampleText>
        <Button style={styles.buttonStyle} textStyle={styles.textStyle}
            onPress={() => navigation.navigate('Step2View', { name: 'Jane' })}
            title="Press here!"
        />
    </ScrollView>
);

export default Step1Nav;

const styles = StyleSheet.create({
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
});