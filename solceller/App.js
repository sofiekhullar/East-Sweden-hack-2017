import React from 'react';
import { StackNavigator } from 'react-navigation';

import Step1View from './Views/Step1View';
import Step2View from './Views/Step2View';
import Step3View from './Views/Step3View';

import HomeView from './Views/HomeView';
import ResultView from './Views/ResultView';


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
    Step3View: {
        path: 'photos/:name',
        screen: Step3View,
    },
    Result: {
        path: 'photos/:name',
        screen: ResultView,
    },
});

export default SimpleStack;