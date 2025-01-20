import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
export default function App() {
  return (
    <SafeAreaView>
      <View style={[styles.container]}>
        <View style={[styles.form]}>
          <View style={[styles.innerImage]}>
            <Image source={require("./assets/favicon.png")} />
          </View>
          <Text style={[styles.formBanner]}>Welcome back.</Text>
          <View style={[styles.innerInput]}>
            <TextInput style={[styles.formInput]} placeholder='Email' />
            <TextInput style={[styles.formInput]} placeholder='Password' secureTextEntry={true} />
            <Text style={[styles.formQuestion]}>Forgot your password?</Text>
          </View>

          <TouchableOpacity style={[styles.formSubmit]}>
            <Text style={[styles.formSubmitText]}>LOGIN</Text>
          </TouchableOpacity> 

          <Text style={[styles.innerDESC]}>Don't have an account? <Text style={[styles.signUp]}>Sign up</Text></Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal:'20',
    height:'100%',
  },
  form: {
    display:'flex',
    alignContent:'center',
    paddingTop:50
  },
  innerImage: {
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    marginBottom:'20'
  },
  formBanner: {
    textAlign:'center',
    marginBottom:20,
    color:'#560cce',
    fontWeight:'700',
    fontSize:30
  },
  formInput: {
    borderWidth: 1,
    borderColor:'#ddd',
    borderStyle:'solid',
    borderRadius:5,
    marginBottom:15,
    paddingLeft: 10,
    paddingVertical:15
  },
  formQuestion: {
    textAlign:'right',
    marginBottom:25
  },
  formSubmit: {
    backgroundColor:'#560cce',
    paddingVertical:10,
    paddingHorizontal: 20,
    borderRadius:5,
    marginBottom:10
  },
  formSubmitText: {
    textAlign:'center',
    color:'#fff'
  },
  innerDESC: {
    textAlign:'center'
  },
  signUp: {
    fontWeight:'600',
    color:'#560cce'
  }
});
