import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Dimensions,
    ImageBackground
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';


export default class ContactComponent extends React.Component {
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
                <Text>Please enter the loan amount.</Text>
                <View style={styles.selectOptions}>
                    <TextInput multiline={true}
                        style={{ 
                            borderStartWidth : 1,
                            borderEndWidth : 1,
                            borderTopWidth : 1,
                            boderLeftWidth: 1,
                            borderRightWidth: 1,
                            borderBottomWidth : 1,
                        padding: "2%"}}
                        placeholder="Amount"
                        onChangeText={(loanAmount) => this.setState({loanAmount})}
                        
                    />
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("Pledge", {"loanAmount": this.state.loanAmount})}>
                        <LinearGradient start={{ x: 0, y: 0 }} colors={['#39b54a', '#006837']} style={styles.submitButton}>
                            <Text style={styles.buttonText}> OK</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </View>
                </View>
                
        )
    }
}

const {width, height} = Dimensions.get("window");
const width_logo = width * 0.3;
const height_logo = width_logo * 1.3;
const width_textinput = width * 0.2;

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "white"
    },
    selectOptions: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '6%',
        marginBottom: "6%"
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

    },
    submitButton:{
        width: width_textinput,
        paddingVertical: 8,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: "2%",
        marginTop: 10
    },
    buttonText:{
        color:"white",
        fontWeight: "bold",
        fontSize: 14
    }
})