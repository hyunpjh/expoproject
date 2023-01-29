import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View , SafeAreaView, TextInput, TouchableOpacity} from 'react-native';

export default function App() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const login = (email, password) => {
    if (email == 'park'){
      if (password == 'hyun'){
        alert(`success`);
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
        LOGIN
      </Text>

      <TextInput style = {styles.textInput}
        placeholder = "Email"
        placeholderTextColor = "#ACB0B4"
        onChangeText={text => setEmail(text)} value={email}
      />

      <TextInput style = {styles.textInput}
        placeholder = "Password"
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  baseText: {
    fontWeight: 'bold',
    fontSize: 40,
    color: '#405061',
    marginTop: 60,
    marginLeft: 20
  },

  textInput:{
    margin: 15,
    height: 40,
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

});
