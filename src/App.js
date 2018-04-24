import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component  {
    state = {loggedIn : null}

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
        );

        firebase.auth().onAuthStateChanged((user)=>{
            if(user){
                this.setState({loggedIn: true});
            }
            else{
                this.setState({loggedIn: false});
            }
        })
    }

    renderContent() {
        switch(this.state.loggedIn){
            case true:
                return (
                    <Button onPress={() => firebase.auth().signOut()}>
                        Log out
                    </Button>
                );
            case false:
                return <LoginForm />;
            default:
                return <Spinner size='large' />;
        }        
    }
    
    render () {
        return (
            <View>
                <Header headerText="Authentication" />
                <View style={{height: 50}}>
                    {this.renderContent()}
                </View>
            </View>
        )
    }
}

export default App;