import React from 'react';
import { StackNavigator } from 'react-navigation';
import Step1View from './Views/Step1View';
import Step2View from './Views/Step2View';
import HomeView from './Views/HomeView';

const SimpleStack = StackNavigator({
    Home: {
        screen: HomeView,
    },
    Step1View: {
        path: 'people/:name',
        screen: Step1View,
    },
    Step2View: {
        path: 'photos/:name',
        screen: Step2View,
    },
});

export default SimpleStack;