import React from 'react';
import styles from './styles';
import { Text } from 'native-base';

const HelperText = () => (
  <Text style={styles.helpText}>
    Draw a(n) <Text style={styles.helpTextCode}>shape</Text> with a(n){' '}
    <Text style={styles.helpTextCode}>measurement</Text> of{' '}
    <Text style={styles.helpTextCode}>amount</Text>
    {'\n'}( and a(n) <Text style={styles.helpTextCode}>measurement</Text> of{' '}
    <Text style={styles.helpTextCode}>amount</Text> )
  </Text>
);

export default HelperText;
