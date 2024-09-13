import React from 'react';
import {Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const CalculatorScreen = () => {
  const insets = useSafeAreaInsets();
  return (
    <View style={{flex: 1, marginTop: insets.top, backgroundColor: '#FFF'}}>
      <View>
        <Text>hi</Text>
      </View>
    </View>
  );
};

export default CalculatorScreen;
