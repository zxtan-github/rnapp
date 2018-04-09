import React, { Component } from 'react';
import {
    FlatList, StyleSheet,
    Text,
    View
} from 'react-native';

export default class App extends Component<Props> {

    renderItem = (item) => {
        return item.item.renderComp(item.item.props);
    }

    renderOrderListItem = (props) => {
        return <Text>{props.name}</Text>;
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={[
                        // data中最好有个key属性，否则会弹出警告
                        {key: '001', props:{name: '谭显彪'}, renderComp: this.renderOrderListItem},
                        {key: '002', props:{name: '唐艳明'}, renderComp: this.renderOrderListItem}
                        ]}
                    renderItem={this.renderItem}
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