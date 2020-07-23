import React from 'react';
import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import {createMaterialBottomTabNavigator} from "react-navigation-material-bottom-tabs";

import LoginComponent from "../component/LoginComponent";
import MessagesComponent from "../component/MessagesComponent";
import ContactComponent from "../component/ContactComponent";
import NotificationComponent from "../component/NotificationComponent";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

//new loan components
import brokersListComponent from "../component/newLoan/brokers";
import loanAmountComponent from "../component/newLoan/loanAmount";
import pledgeComponent from "../component/newLoan/pledge";
import submitComponent from "../component/newLoan/submit";
import tenureComponent from "../component/newLoan/tenure";

//Access existing loan

import ExistingControlAgreementComponent from "../component/accessExisting/controlAgreement";
import ExistingLoanAgreementComponent from "../component/accessExisting/loanAgreement";
import ExistingLoanReferenceComponent from "../component/accessExisting/loanReferece";
import ExistingSelectAgreementComponent from "../component/accessExisting/selectAgreement";

//Update status

import applicationStatusComponent from "../component/updateStatus/applicationStatus";
import updateStatusControlAgreementComponent from "../component/updateStatus/controlAgreement";
import updateStatusControlAgreementDetailsComponent from "../component/updateStatus/controlAgreementDetails";
import updateStatusLoanAgreementComponent from "../component/updateStatus/loanAggrement";
import updateStatusLoanReferenceComponent from "../component/updateStatus/loanReference";
import updateStatussubmitStatusComponent from "../component/updateStatus/submitStatus";





const TabNavigator = createMaterialBottomTabNavigator({
    MessagesScreen:{
        screen: MessagesComponent,
        navigationOptions:{
            tabBarLabel: "Messages",
            tabBarOptions:{
                tabStyle:{
                    paddingVertical: 10
                },
                style:{
                    height: 50,
                    backgroundColor: 'white',
                    elevation: 10,
                    borderTopWidth: 0
                },
                labelStyle:{
                    margin: 0,
                    padding: 0
                },
                showIcon: true,
                showLabel: true,
                activeTintColor: 'green',
                inactiveTintColor: 'gray'
            },
            tabBarIcon: ({tintColor, focused}) => {
                if (focused) {
                    return(
                        <MaterialIcons name="message" size={25} color={tintColor}/>

                        );
                    
                }else{
                    return(
                        <MaterialIcons name="message" size={20} color={"gray"}/>

                        );
                }
                
            }

        }
    },
   
    NotificationScreen:{
        screen:NotificationComponent,
        navigationOptions:{
            tabBarLabel:'Notification',
            tabBarOptions:{
                tabStyle:{
                    paddingVertical: 10
                },
                style:{
                    height: 50,
                    backgroundColor: 'white',
                    elevation: 10,
                    borderTopWidth: 0
                },
                labelStyle:{
                    margin: 0,
                    padding: 0
                },
                showIcon: true,
                showLabel: true,
                activeTintColor: 'green',
                inactiveTintColor: 'gray'
            },
            tabBarIcon: ({tintColor, focused}) => {
                if (focused) {
                    return(
                        <MaterialIcons name="notifications" size={25} color={tintColor}/>

                        );
                    
                }else{
                    return(
                        <MaterialIcons name="notifications" size={20} color={"gray"}/>

                        );
                }
                
            }
            
        }
    },
   

},{
    initialRouteName: 'MessagesScreen',
    activeColor: 'green',
    inactiveColor: 'gray',
    barStyle: {
        backgroundColor: 'white'
    },
    shifting: true

})



const StackNavigator = createStackNavigator({
    LoginScreen:{
        screen : LoginComponent,
        navigationOptions:{
            headerShown: false
        }
    },
    HomeScreen:{
        screen: MessagesComponent,
        navigationOptions:{
            headerShown:true
        }
    },
    Brokers:{
        screen: brokersListComponent,
        navigationOptions:{
            headerShown: true
        }
    },
    LoanAmount:{
        screen: loanAmountComponent,
        navigationOptions:{
            headerShown:true
        }
    },
    Pledge:{
        screen: pledgeComponent,
        navigationOptions:{
            headerShown: true
        }
    },
    Submit:{
        screen: submitComponent,
        navigationOptions:{
            headerShown: true
        }
    },
    Tenure:{
        screen: tenureComponent,
        navigationOptions:{
            headerShown: true
        }
    },
    ControlAgreement:{
        screen: updateStatusControlAgreementComponent,
        navigationOptions:{
             headerShown: true
        }
       
    },
    ControlAgreementDetails:{
        screen: updateStatusControlAgreementDetailsComponent,
        navigationOptions:{
            headerShown: true
        }
    },
    LoanAgreement:{
        screen: updateStatusLoanAgreementComponent,
        navigationOptions:{
            headerShown: true
        }
    },
    LoanReference: {
        screen: updateStatusLoanReferenceComponent,
        navigationOptions:{
            headerShown: true
        }
    },
    ApplicationStatus: {
        screen: applicationStatusComponent,
        navigationOptions:{
            headerShown: true
        }
    },
    SubmitStatus:{
        screen: updateStatussubmitStatusComponent,
        navigationOptions:{
            headerShown: true
        }
    },
    ControlAgreementExisting:{
        screen: ExistingControlAgreementComponent,
        navigationOptions:{
            headerShown: true
        }
    },
    LoanAgreementExisting:{
        screen: ExistingLoanAgreementComponent,
        navigationOptions:{
            headerShown: true
        }
    },
    LoanReferenceExisting:{
        screen: ExistingLoanReferenceComponent,
        navigationOptions:{
            headerShown: true
        }
    },
    SelectAgreementExisting:{
        screen: ExistingSelectAgreementComponent,
        navigationOptions:{
            headerShown: true
        }
    }

})

export default createAppContainer(StackNavigator);