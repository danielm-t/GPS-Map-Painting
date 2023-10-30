import React from 'react'
import {View, StyleSheet} from 'react-native'
import {DrawerContentComponentProps, DrawerContentScrollView, DrawerItem,DrawerItemList} from '@react-navigation/drawer'
import {Avatar,Title,Caption,Drawer,TouchableRipple} from 'react-native-paper'
import Icon from 'react-native-vector-icons/FontAwesome';
import { getAuth,signOut } from 'firebase/auth';
const auth = getAuth();
export function DrawerContent(props: DrawerContentComponentProps){
    return(
        <View style={{flex:1}}>
        <DrawerContentScrollView {...props}>
            <View style={style.drawerContent}>
                <View>
                    <Title style={{textAlign:"left",fontWeight:"bold"}}>GPS Map Painting</Title>
                </View>
                <View style={[style.userInfo,{flexDirection:'row'}]}>
                    <View style={{marginTop: 15}}>
                        <TouchableRipple onPress={()=>{props.navigation.navigate('Profile')}}>
                        <Avatar.Image source={require('../images/mock_icon.png')}/>
                        </TouchableRipple>
                    </View>
                    <View style={{marginLeft:9, marginTop:15}}>
                        <Title>Username</Title>
                        <Caption>ID</Caption>
                    </View>
                </View>
                <DrawerItemList {...props}/>
                {/* <Drawer.Section style={{flex:1,marginTop:15}}>
                    <DrawerItem label={"Home"} onPress={()=>{props.navigation.navigate('Home')}}/>
                    <DrawerItem label={"About"} onPress={()=>{props.navigation.navigate('About')}}/>
                </Drawer.Section> */}
            </View>
        </DrawerContentScrollView>
        <Drawer.Section style={[style.bottomDrawer,{shadowColor: 'transparent'}]}>
            <DrawerItem label={"Log out"} onPress={()=>{signOut(auth)}} icon={({ color, size }) => (<Icon name="sign-out" size={size} color={color} />)} />
        </Drawer.Section>
        </View>
    )
}

const style = StyleSheet.create({
    menu:{color: '#fff'},
    container: {
        flex: 1,
      },
      drawerContent: {
        flex: 1,
        marginTop: 10,
        padding: 10,
      },
      avatarContainer: {
        marginTop: 15,
      },
      userInfo:{
        //TO-DO
      },
      bottomDrawer: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1,
        elevation: 0,
        paddingVertical: 10,
      },
});