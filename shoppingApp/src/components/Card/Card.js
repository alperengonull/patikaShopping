import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './Card.style';

const Card = ({newproduct}) => {
  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.image} source={{uri: newproduct.imgURL}} />
        <View style={styles.body}>
          <Text style={styles.title}> {newproduct.title} </Text>
          <Text style={styles.price}> {newproduct.price} </Text>
          {/* <Text style={styles.stock}> {newproduct.inStock} </Text> */}
          {!newproduct.inStock && <Text style={styles.stock}>STOKTA YOK</Text>}
        </View>
      </View>
    </View>
  );
};

export default Card;
