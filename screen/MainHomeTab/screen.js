/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  Text,
  ScrollView,
  SafeAreaView,
  View,
  Button,
  TouchableOpacity,
  Animated,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

// import {
//   Input,
//   Test,
//   FloatingLabelInputButton,
//   KeyboardAvoiding,
// } from 'component';
// import {config} from 'react-native-firebase';

// import Network from 'network';
// import action from 'action';

//import FloatingLabelInputButton from '../../Components/FloatingLabelInputWithButton';

//const netRequest = new Network();

import { LoginButton, AccessToken, LoginManager } from 'react-native-fbsdk';


export default class MainHomeTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: null,
      token2: null
    }
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: () => (
        <Button
          onPress={() => navigation.navigate('MyModal')}
          title="Info"
          color="#fff"
        />
      ),
    };
  };

  requestAPI = async () => {
    // ngon roi
    // const temp = await Network.request().then(response => {
    //   console.log('DATA 222: ', response);
    // });
    // console.log('DATA RESPONSE LA11111: ', temp);

    console.log('DATA RESPONS LA1111111', await this.props.getAPI());
  };


  test = () => {
    LoginManager.logInWithPermissions(["public_profile"]).then(
       (result) => {
        if (result.isCancelled) {
          console.log("Login cancelled");
        } else {
          console.log(
            "Login success with permissions: " +
            result.grantedPermissions.toString()
          );

        }
        console.log("RESULT: ", result)
        this.setState({
          token: JSON.stringify(result)
        })

      },
      function (error) {
        console.log("Login fail with error: " + error);
      }
    );
  }

  render() {
    console.log('render lai MAIN HOME TAB KHONG', this.props);
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <LoginButton
          onLoginFinished={
            (error, result) => {

              console.log("RESULT LA: ", JSON.stringify(result))
              this.setState({
                token2: JSON.stringify(result)
              })

              if (error) {
                console.log("login has error: " + result.error);
                this.setState({
                  token: "login is cancelled1."
                })
              } else if (result.isCancelled) {
                console.log("login is cancelled.");
                this.setState({
                  token: "login is cancelled.2"
                })
              } else {
                AccessToken.getCurrentAccessToken().then(
                  (data) => {
                    console.log(data.accessToken.toString())

                    this.setState({
                      token: data.accessToken.toString()

                    })
                  }
                )
              }
            }
          }
          onLogoutFinished={() => console.log("logout.")} />


        <TouchableOpacity onPress={() => {
          this.test()
        }}>
          <Text>
            TEST APP
          </Text>
        </TouchableOpacity>

        <Text>{this.state.token}</Text>
        <Text>{this.state.token2}</Text>
        {/* <Text>TAB 1</Text>

        <TouchableOpacity
          onPress={() => {
            //this.props.navigation.navigate('ModalLoading');
            this.props.handleIncrease();
          }}>
          <Text>CLICK +</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            //this.props.navigation.navigate('ModalLoading');
            this.props.handleDecrease();
          }}>
          <Text>CLICK -</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.requestAPI();
          }}>
          <Text>REQUEST API</Text>
        </TouchableOpacity>
        <Text>{this.props.counter}</Text> */}


        {/* <Text style={{ fontFamily: "PoppinsVN-Thin", fontSize: 24 }}>Toys that tell stories.</Text>
        <Text style={{ fontFamily: "PoppinsVN-UltraLight", fontSize: 24 }}>Toys that tell stories.</Text>
        <Text style={{ fontFamily: "PoppinsVN-Light", fontSize: 24 }}>Toys that tell stories.</Text>
        <Text style={{ fontFamily: "PoppinsVN-Regular", fontSize: 24 }}>Toys that tell stories.</Text>
        <Text style={{ fontFamily: "PoppinsVN-Medium", fontSize: 24 }}>Toys that tell stories.</Text>
        <Text style={{ fontFamily: "PoppinsVN-Semibold", fontSize: 24 }}>Toys that tell stories.</Text>
        <Text style={{ fontFamily: "PoppinsVN-Bold", fontSize: 24 }}>Toys that tell stories.</Text>
        <Text style={{ fontFamily: "PoppinsVN-Heavy", fontSize: 24 }}>Toys that tell stories.</Text>
        <Text style={{ fontFamily: "PoppinsVN-Black", fontSize: 24 }}>Toys that tell stories.</Text>


        <Text style={{ fontFamily: "PoppinsVN-IThin", fontSize: 24, fontWeight: "100" }}>Toys that tell stories.</Text>
        <Text style={{ fontFamily: "PoppinsVN-ILight", fontSize: 24 }}>Toys that tell stories.</Text>
        <Text style={{ fontFamily: "PoppinsVN-IRegular", fontSize: 24 }}>Toys that tell stories.</Text>
        <Text style={{ fontFamily: "PoppinsVN-IMedium", fontSize: 24 }}>Toys that tell stories.</Text>
        <Text style={{ fontFamily: "PoppinsVN-ISemibold", fontSize: 24 }}>Toys that tell stories.</Text>
        <Text style={{ fontFamily: "PoppinsVN-IBold", fontSize: 24 }}>Toys that tell stories.</Text>
        <Text style={{ fontFamily: "PoppinsVN-IHeavy", fontSize: 24 }}>Toys that tell stories.</Text>
        <Text style={{ fontFamily: "PoppinsVN-IBlack", fontSize: 24 }}>Toys that tell stories.</Text> */}



      </View>
    );
  }
}
//Italic

// { fontWeight: '100' }, // Thin
// { fontWeight: '200' }, // Ultra Light
// { fontWeight: '300' }, // Light
// { fontWeight: '400' }, // Regular
// { fontWeight: '500' }, // Medium
// { fontWeight: '600' }, // Semibold
// { fontWeight: '700' }, // Bold
// { fontWeight: '800' }, // Heavy
// { fontWeight: '900' }, // Black