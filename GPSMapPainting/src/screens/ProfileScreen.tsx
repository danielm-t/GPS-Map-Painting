import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Avatar,Button, Card, Paragraph, Title } from 'react-native-paper';

export default function ProfileScreen() {
return (
    <View style={{flex: 1}}>
    <View style={style.icon}>
    <Avatar.Image source={require('../images/mock_icon.png')}/>
    <Text style={style.text}>User_Name</Text>
    </View>
    <View style={style.buttons}>
            <Button icon="lock-open" mode="contained" onPress={() => console.log('Pressed')}>
                Unlocked
            </Button>
            <Button icon="heart" mode="contained" onPress={() => console.log('Pressed')}>
                Favourite
            </Button>
            
    </View>
    <ScrollView style={{marginTop:10}}>
    <View style={{ flexDirection: 'row' }}>
        <Card style={{ flex: 1, margin: 5 }}>
          <Card.Title title="Card 1" />
          <Card.Cover source={{ uri: 'https://picsum.photos/701' }} />
        </Card>
        <Card style={{ flex: 1, margin: 5 }}>
          <Card.Title title="Card 2" />
          <Card.Cover source={{ uri: 'https://picsum.photos/702' }} />
        </Card>
    </View>
    <View style={{ flexDirection: 'row' }}>
        <Card style={{ flex: 1, margin: 5 }}>
        <Card.Title title="Card 3" />
        <Card.Cover source={{ uri: 'https://picsum.photos/703' }} />
        </Card>
        <Card style={{ flex: 1, margin: 5 }}>
        <Card.Title title="Card 4" />
        <Card.Cover source={{ uri: 'https://picsum.photos/704' }} />
        </Card>
    </View>

    <View style={{ flexDirection: 'row' }}>
        <Card style={{ flex: 1, margin: 5 }}>
        <Card.Title title="Card 5" />
        <Card.Cover source={{ uri: 'https://picsum.photos/705' }} />
        </Card>
        <Card style={{ flex: 1, margin: 5 }}>
        <Card.Title title="Card 6" />
        <Card.Cover source={{ uri: 'https://picsum.photos/706' }} />
        </Card>
    </View>
    </ScrollView>
    </View>
);
}
const style = StyleSheet.create({
    icon:{ marginTop: 15, justifyContent: 'center',alignItems: 'center'},
    text:{fontWeight : 'bold', color:'black', marginTop : 5, fontSize:20},
    buttons:{marginRight:30,marginLeft:30,marginTop:10,flexDirection: 'row',justifyContent: 'space-between'},
    card:{flex: 1, margin: 10}
});