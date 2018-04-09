import React, { Component } from 'react';
import {
    FlatList, StyleSheet,
    Text,
    View
} from 'react-native';

export default class App extends Component<Props> {

    // renderItem = ({item}) => {
    //     return <Text>{item.key}</Text>;
    // }
    // 或者
    renderItem = (item) => {
        return <Text>{item.item.key}</Text>;
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={[{key: 'tanzongxi'}, {key: 'tangyan'}, {key: 'tanchengyu'}, {key: 'tanruoxi'}]}
                    renderItem={this.renderItem}
                    // renderItem={({item}) => <Text>{item.key}</Text>}
                />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});