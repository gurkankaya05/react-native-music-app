import { StyleSheet } from "react-native";
export default styles = StyleSheet.create({
container:{
    padding:10,
    flexDirection:"row",
    // borderBottomWidth:0.2
},
image:{
    width:100,
    height:100,
    borderRadius:50

},
inner_container:{
    padding:10,
    flex:1,
    justifyContent:'center'

    

},
title:{
    fontWeight:'bold',
    fontSize:22,
    
   

},
info_container:{
flexDirection:'row',
flex:1,
alignItems:'center'




},
// artist:{
//     fontSize:12,
//     marginLeft:1,
//     padding:2
    
// },
year:{
    marginLeft:20,
    color:'gray',
    fontWeight:'bold',
    fontSize:12,
    marginTop:2

},
soldout_container:{
    borderWidth:1,
    borderColor:'red',
    padding:5,
    borderRadius:5,
       

},
soldout_title:{
    color:'red',
    fontSize:12
    

},
content_container:{
    flexDirection:'row'
}
})