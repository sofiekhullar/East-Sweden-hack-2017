import React from 'react';
import MyNavScreen from './Navigation/HomeViewNav';
import {Button} from 'react-native';
const Step2View = ({ navigation }) => (
    <MyNavScreen
        banner={'Step2view'}
        navigation={navigation}
    />
);

Step2View.navigationOptions = props => {
    const { navigation } = props;
    const { state, setParams } = navigation;
    const { params } = state;
    return {
        headerTitle: 'Step2view',
        // Render a button on the right side of the header.
        // When pressed switches the screen to edit mode.
        headerRight: (
            <Button
                title={params.mode === 'edit' ? 'Done' : 'Edit'}
                onPress={() =>
                    setParams({ mode: params.mode === 'edit' ? '' : 'edit' })}
            />
        ),
    };
};

export default Step2View;