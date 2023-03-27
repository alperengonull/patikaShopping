import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    width: Dimensions.get('window').width / 2.3,
    borderRadius: 10,
    justifyContent:'space-between',
    margin:12,
    backgroundColor:'#ececec'
  },
  image: {
    height: Dimensions.get('window').height / 4,
    borderRadius:10,
    margin:10,
    justifyContent:'space-between',
    resizeMode:'contain',
  },
  body: {
    margin:10,
    marginTop:5,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'black',
  },
  price: {
    color: 'grey',
    fontWeight:'bold',
    marginTop: 5,
  },
  stock:{
    color:'red',
    fontWeight:'bold',
  }
});
