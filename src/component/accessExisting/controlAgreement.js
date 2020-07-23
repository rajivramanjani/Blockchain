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
import config from "../../../config.json";


export default class ContactComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          contractId: this.props.navigation.state.params.contractId,
        }
        console.log(this.state.contractId);
     }
     
     componentDidMount() {
        fetch('https://p8blkchwkbench-bk3m3c-api.azurewebsites.net/api/v2/contracts/'+ this.state.contractId, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                "Authorization": config.authToken
            }
        })
            .then(response => response.json())
            .then(json => {
                this.setState({
                    jsonData: json,
                });
            })
            .catch(error => {
                console.error(error);
            });
    }

    render() {
        if(this.state.jsonData){
            console.log("session data");
            var status = this.state.jsonData.contractActions[this.state.jsonData.contractActions.length - 1].workflowStateId;
            console.log(status);
            var statusMessge = config[status];
            console.log(this.state.jsonData.contractActions[0].parameters[3].value
                
                )


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
                        <Text>Brokage Firm Name - {config[this.state.jsonData.contractActions[0].parameters[0].value]}</Text>
                        <Text>Investment Value Of Lien - 500000</Text>
                        <Text>Status - {statusMessge}</Text>
                        <Text>Tax Id - {this.state.jsonData.contractActions[0].parameters[3].value}</Text>
                        <View style={styles.selectOptions}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate("LoanAgreementExisting")}>
                                <LinearGradient start={{ x: 0, y: 0 }} colors={['#39b54a', '#006837']} style={styles.login}>
                                    <Text style={styles.textLogin}> View Loan Agreement</Text>
                                </LinearGradient>
                            </TouchableOpacity>
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
        if(!this.state.jsonData){
            return (<View></View>);
        }
        
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