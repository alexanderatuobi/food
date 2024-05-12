import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import Feather  from '@expo/vector-icons/Feather';

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
  return (
    <View style={Styles.backgroundStyle} >
      <Feather name='search' style={Styles.iconStyle} />
      <TextInput
      autoCapitalize='none'
      autoCorrect={false}
       style={Styles.inputsStyle} 
       placeholder='Search'
       value={term}
       onChangeText={onTermChange}
       onEndEditing={onTermSubmit}
      />
    </View>
  )
};

const Styles = StyleSheet.create({
  backgroundStyle: {
    marginTop:10,
    backgroundColor: '#f0EEEE',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
    // gap: 10
  },
  inputsStyle: {
    flex: 1,
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 15
  }
});

export default SearchBar;