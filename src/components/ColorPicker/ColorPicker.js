import React, { Fragment } from 'react';
import { Button, Icon, View, Title } from 'native-base';
import styles from './styles';

const ColorPicker = ({ colors, onSelect }) => (
  <Fragment>
    <Title style={styles.title}>Select Color</Title>
    <View style={styles.content}>
      {colors.map(color => (
        <Button small transparent key={color} onPress={() => onSelect(color)}>
          <Icon
            name="circle"
            type="FontAwesome"
            style={[styles.button, { color }]}
          />
        </Button>
      ))}
    </View>
  </Fragment>
);

export default ColorPicker;
