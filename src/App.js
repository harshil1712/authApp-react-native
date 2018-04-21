import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';

class App extends Component  {
    componentWillMount(){
        firebase.initializeApp(
            {
                apiKey: "AIzaSyAt2OWZG3kKXDgZT1td9BFum9bl18jdjQo",
                authDomain: "signin-page-78d90.firebaseapp.com",
                databaseURL: "https://signin-page-78d90.firebaseio.com",
                projectId: "signin-page-78d90",
                storageBucket: "signin-page-78d90.appspot.com",
                messagingSenderId: "758509980173"
            }
        )
    }
    render () {
        return (
            <View>
                <Header headerText="Authentication" />
                <Text>Hello</Text>
            </View>
        )
    }
}

export default App;