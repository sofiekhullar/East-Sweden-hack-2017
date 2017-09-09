import React from 'react';
import SampleText from '../SampleText';
import {Button, ScrollView} from 'react-native';

const HomeViewNav = ({ navigation, banner }) => (
    <ScrollView>
        <SampleText>{banner}</SampleText>
        <Button
            onPress={() => navigation.navigate('Step1View', { name: 'Jane' })}
            title="Press here!"
        />
    </ScrollView>
);

export default HomeViewNav;