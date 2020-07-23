import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    ImageBackground
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';

import config from "../../../config";

// console.warn("Submiting request");
// console.warn("agaergerge");
export default class ContactComponent extends React.Component {
    componentDidMount() {
        
        fetch('https://p8blkchwkbench-bk3m3c-api.azurewebsites.net/api/v2/contracts?workflowId=252&contractCodeId=143&connectionId=1&workflowFunctionId=2417', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                "Authorization": config.authToken
            },
            body: JSON.stringify({
                "workflowActionParameters": [
                    {
                        "name": "broker",
                        "value": "0x538188891095b84895fbdc207adac980ba6c3888"
                    },
                    {
                        "name": "bank",
                        "value": "0xcac7cb806f59d6dd97a40a35cc8c0c5d38d373c0"
                    },
                    {
                        "name": "name",
                        "value": "Pritiranjan"
                    },
                    {
                        "name": "_Tin",
                        "value": "22222"
                    },
                    {
                        "name": "princamt",
                        "value": "100000"
                    },
                    {
                        "name": "tenure",
                        "value": "5"
                    },
                    {
                        "name": "_UniqueKey",
                        "value": "0x64d81c6a253d392d4cd6b84153f6de0c80d177de"
                    }
                ]
            }),
        });
    }
    render() {
        return (
            <View style={styles.container}>
             <View style={styles.header}>
             <ImageBackground
                    source={require("../../images/abw.png")}
                    style={{flex: 1, width:"100%", height:"100%", justifyContent:"center", alignItems:'center'}}
                    resizeMode={"stretch"}>
                    </ImageBackground>
             </View>

             <View style={styles.footer}>
             <Text>Thank you!</Text>
                <Text>Your application has been sent to the bank successfully</Text>
                <View style={styles.selectOptions}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("HomeScreen")}>
                        <LinearGradient start={{ x: 0, y: 0 }} colors={['#39b54a', '#006837']} style={styles.login}>
                            <Text style={styles.textLogin}> Home </Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
             </View>
            
            </View>
        )
    }
}
const { width, height } = Dimensions.get("window");
const width_logo = width * 0.3;
const height_logo = width_logo * 1.3;
const width_textinput = width * 0.3;

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "white"
    },
    header: {
        width: "80%",
        height: "50%",
        paddingTop: "10%"
    },
    footer: {
        width: "100%",
        height: "60%",
        justifyContent:"center",
        alignItems: "center",
        paddingBottom: "60%"
    },
    selectOptions: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '6%',
        marginBottom: "6%"
    },
    optionText: {
        backgroundColor: '#2E9298',
        borderRadius: 10,
        padding: 10,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 10,
        shadowOpacity: 0.25,
        marginTop: "2%"
        // width: width_textinput,
        // paddingVertical: 10,
        // borderRadius: 50,
        // justifyContent: 'center',
        // alignItems: 'center'

    },
    login: {
        width: width_textinput,
        paddingVertical: 8,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: "2%"
    },
    textLogin: {
        color: "white",
        fontWeight: "bold",
        fontSize: 14
    }

})