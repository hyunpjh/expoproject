import { useState } from 'react';
import { StyleSheet, Text, View , SafeAreaView, TextInput, TouchableOpacity, Button} from 'react-native';

function Start({ navigation }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <SafeAreaView style = {StyleSheet.container}>
        <Text style = {styles.baseText}>
          이메일
        </Text>
  
        <TextInput style = {styles.textInput}
          placeholder = "이메일"
          placeholderTextColor = "#ACB0B4"
          onChangeText={text => setEmail(text)} value={email}
        />

        <Text style = {styles.baseText}>
          비밀번호
        </Text>
  
        <TextInput style = {styles.textInput}
          placeholder = "비밀번호"
          placeholderTextColor = "#ACB0B4"
          onChangeText={text => setPassword(text)} value={password}
        />
      
        <TouchableOpacity
          style = {styles.signupButton}
          onPress = {
            () => navigation.navigate("Login")
          }
          >  
            <Text style = {styles.signupButtonText}>Signup</Text>
          </TouchableOpacity>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    baseText: {
      fontWeight: 'bold',
      fontSize: 13,
      color: '#405061',
      marginTop: 10,
      marginLeft: 15
    },
  
    textInput:{
      margin: 15,
      marginTop: 5,
      height: 35,
      borderColor: '#405061',
      borderWidth: 1
    },
  
    signupButton:{
      backgroundColor: '#405061',
      padding: 10,
      margin: 15,
      height: 40
    },
    signupButtonText: {
      color: '#D7DCE0'
    },
  
  });

export default Start;