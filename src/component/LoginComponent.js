import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    ImageBackground,
    Image
} from 'react-native';
import { TextInput } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';

export default class LoginComonent extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                    <ImageBackground
                    source={require("../images/header.png")}
                    style={{flex: 1, width:"100%", height:"100%", justifyContent:"center", alignItems:'center'}}
                    resizeMode={"stretch"}>
                        {/* <View style={styles.logo}>
                            <Image
                            source={require("../images/logo.png")}
                            style={{width:"100%", height:"100%"}}
                            resizeMode="stretch"/>
                        </View> */}
                    </ImageBackground>

                </View>
                <View style={styles.footer}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Username"
                    />
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Password"
                        secureTextEntry
                    />
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate("HomeScreen")}>
                    <LinearGradient start={{ x: 0, y: 0 }} colors={['#39b54a', '#006837']} style={styles.login}>
                        <Text style={styles.textLogin}> Login </Text>
                    </LinearGradient>
                    </TouchableOpacity>
                    
                </View>
            </View>
        )
    }
}

const {width, height} = Dimensions.get("window");
const width_logo = width * 0.5;
const height_logo = width_logo * 1.2;
const width_textinput = width * 0.8;



var styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    header: {
        width: "100%",
        height: "55%"
    },
    header: {
        width: "100%",
        height: "45%"
    },
    footer: {
        width: "100%",
        height: "45%",
        justifyContent:"center",
        alignItems: "center"
    },
    logo:{
         width: width_logo,
         height: height_logo
    },
    TextInput:{
        width: width_textinput,
        backgroundColor:"#f2f2f2",
        //paddingHorizontal: 20,
        //paddingVertical: 15,
        //borderRadius: 50,
        marginBottom: 15

    },
    login:{
        width: width_textinput,
        paddingVertical: 10,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textLogin:{
        color:"white",
        fontWeight: "bold",
        fontSize: 20
    }
})