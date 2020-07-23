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


export default class ContactComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          contractId: this.props.navigation.state.params.contractId,
        }
        console.log(this.state.contractId);
     }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <ImageBackground
                        source={require("../../images/abw.png")}
                        style={{ flex: 1, width: "100%", height: "100%", justifyContent: "center", alignItems: 'center' }}
                        resizeMode={"stretch"}>
                    </ImageBackground>
                </View>
         <View style={styles.footer}>
         <Text> Would you like to view the control agreement?</Text>
                    <View style={styles.selectOptions}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate("ControlAgreementDetails", {"contractId": this.state.contractId})}>
                            <LinearGradient start={{ x: 0, y: 0 }} colors={['#39b54a', '#006837']} style={styles.login}>
                                <Text style={styles.textLogin}>View Control Agreement</Text>
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
const width_textinput = width * 0.5;

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
        justifyContent: "center",
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