import React from 'react';
import { View, Icon, Title } from 'native-base';
import styles from './styles';

const Invalid = ({ fill }) => (
  <View style={[styles.container]}>
    <Icon
      name="exclamation-circle"
      type="FontAwesome"
      style={[styles.icon, { color: fill }]}
    />
    <Title style={[styles.text, { color: fill }]}>Invalid Shape</Title>
  </View>
);

export default Invalid;
