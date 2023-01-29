import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View , SafeAreaView, TextInput, TouchableOpacity, Button} from 'react-native';

function Login({ navigation }) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const login = (email, password) => {
      if (email == 'park'){
        if (password == 'hyun'){
          navigation.reset({routes: [{name : 'Home'}]})
        }
        else{
          //alert(`email: ${email} password: ${password}`);
          alert(`비밀번호를 체크해주세요.`);
        }
      }
      else {
        alert('이메일을 체크해주세요.');
      }
    }
  
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
          style = {styles.submitButton}
          onPress = {
            () => login(email, password)
          }>
  
            <Text style = {styles.submitButtonText}>Submit</Text>
          </TouchableOpacity>
  
          <TouchableOpacity
          style = {styles.signupButton}
          onPress = {
            () => navigation.navigate('CreateAccount')
          }>
  
            <Text style = {styles.submitButtonText}>Signup</Text>
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
    submitButton:{
      backgroundColor: '#405061',
      padding: 10,
      margin: 15,
      height: 40
    },
    submitButtonText: {
      color: '#D7DCE0'
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

  export default Login;