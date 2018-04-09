import {
    StackNavigator,
} from 'react-navigation';
import {Button, Text, View} from 'react-native';
import React, { Component } from 'react';
import DefaultSampleScreen from './src/component/defaultSampleScreen'
import FlatListSample001Screen from './src/component/flatListSample001Screen'
import FlatListSample002Screen from './src/component/flatListSample002Screen'

class AppScreen extends Component {

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View >
                <Button
                        title="DefaultSample"
                        onPress={() =>
                            navigate('DefaultSample')
                        }
                />
                <Text/>
                <Button
                        title="FlatList001Sample"
                        onPress={() =>
                            navigate('FlatList001Sample')
                        }
                />
                <Text/>
                <Button
                        title="FlatList002Sample"
                        onPress={() =>
                            navigate('FlatList002Sample')
                        }
                />
            </View>
        );
    }
}

const App = StackNavigator({
    App: {screen: AppScreen},
    DefaultSample: {screen: DefaultSampleScreen},
    FlatList001Sample: {screen: FlatListSample001Screen},
    FlatList002Sample: {screen: FlatListSample002Screen},
}, {
    initialRouteName: 'App',
    headerMode : "none"
});

export default App;
