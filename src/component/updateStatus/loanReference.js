import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    ScrollView,
    ImageBackground
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';

import config from "../../../config.json";


export default class ContactComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            jsonData: ''
        }
        var data = [];
        this.items = [];
        this.displayData = [];
    }


    state = {
        jsonData: '',
    };
    componentDidMount() {
        fetch('https://p8blkchwkbench-bk3m3c-api.azurewebsites.net/api/v2/contracts?workflowId=252&sortBy=Timestamp&top=3', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                "Authorization": config.authToken
            }
        })
            .then(response => response.json())
            .then(json => {
                
                console.log(json.contracts.length);
                var sessionData = json;
               
                this.setState({
                    jsonData: sessionData,
                });

            })
            .catch(error => {
                console.error(error);
            });
    }


    render() {
        console.log(this.state.jsonData);

        if (this.state.jsonData.contracts && this.state.jsonData.contracts.length > 0) {
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
                    <Text style={{marginBottom: "2%"}}>Please select the loan reference number.</Text>
                    
                    {this.state.jsonData.contracts.map((item, key) => (
                        <View key={key} style={styles.selectOptions}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate("ApplicationStatus", {"contractId": item.id})}>
                                <LinearGradient start={{ x: 0, y: 0 }} colors={['#39b54a', '#006837']} style={styles.submitButton}>
                                    <Text style={{ color: "white", fontWeight: "bold", fontSize: 14}}> {item.id}</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                            
                            <View />
                        </View>
                    ))}
                    </View>
                </View>
            );
        }
        if (!this.state.jsonData.contracts) {
            return (<View></View>);
        }

    }
}
const { width, height } = Dimensions.get("window");
const width_logo = width * 0.3;
const height_logo = width_logo * 1.3;
const width_textinput = width * 0.4;

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
        marginTop: '1%',
        marginBottom: "1%"
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
    submitButton: {
        width: width_textinput,
        paddingVertical: 8,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: "1%",
        marginTop: "1%"
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 14
    }
})