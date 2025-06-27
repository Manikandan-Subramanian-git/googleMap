import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  bgBack: {
    width: "100%",
    height: "40%",
  },
  loginContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginText: {
    fontSize: 30,
    fontWeight: '500',
    // marginTop: 20,
    color:"#0337fa"
  },
  inputContainer: {
    position: 'absolute',
    top: '60%',
  },
  inputWrapper: {
    position: 'relative',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    gap:20,
    paddingVertical:20
  },
  input: {
    position: 'relative',
    height: 50,
    margin: 12,
    borderRadius:6,
    paddingLeft: 48,
    width: 250,
    backgroundColor:"#D3D3D3"
  },
  emailIcon: {
    position: 'absolute',
    width: 25,
    height: 25,
    top: 24,
    left: 20,
    zIndex:10
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  welcomeText:{
    color:"#fac203",
    fontSize:30,
    fontWeight:"700"
  },
  toContainer:{
    flexDirection:"row"
  },
  toText:{
    color:"#1beebb",
    fontSize:30,
    fontWeight:"700"
  },
  socialContainer:{
    marginTop:40,
    flexDirection:"row",
    gap:20,
    justifyContent:"center"
  },
  socialIcon:{
    width:30,
    height:30,
    cursor:"pointer"
  },
  footerWrapper:{
    flexDirection:"row",
    marginTop:20,
   justifyContent:"center",
    gap:6
  },
  signUp:{
    color:"#0337fa"
  }
});
