import {View,StyleSheet, FlatList} from 'react-native';
import React from 'react';
import Card from './components/Card';
import product from './product.json';
import Search from './components/Search';

const App = () => {
  const renderProducts = ({item}) => <Card newproduct={item} />;

  return (
      <View style={styles.container}>
        <FlatList
          ListHeaderComponent={Search}
          numColumns={2}
          data={product}
          renderItem={renderProducts}
        />
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default App;
