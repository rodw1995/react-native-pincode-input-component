import React, { useCallback, useState, useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import PinInput from 'react-native-pincode-input-component';

export default function App() {
  const ref = useRef();
  const [pin, setPin] = useState('');

  const onValueChange = useCallback((value, { isFulfilled }) => {
    if (isFulfilled) {
      setPin('');

      if (value !== '0000') {
        ref.current.shake();
      }
    } else {
      setPin(value);
    }

  }, []);

  return (
    <View style={styles.container}>
      <PinInput
        ref={ref}
        value={pin}
        onValueChange={onValueChange}
        password
        autoFocus
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
