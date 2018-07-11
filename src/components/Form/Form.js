import React, { Fragment } from 'react';
import HelperText from './HelperText';
import { Card, CardItem, Textarea, Button, Text } from 'native-base';
import styles from './styles';

const Form = ({
  buttonColor,
  buttonText,
  hasErrors,
  message,
  onChange,
  onSubmit,
  placeholder,
}) => (
  <Fragment>
    <HelperText />
    <Card style={[styles.card, hasErrors && styles.invalidCard]}>
      <CardItem style={styles.cardItem}>
        <Textarea
          style={styles.input}
          error={hasErrors}
          onChangeText={onChange}
          placeholder={placeholder}
          rowSpan={2}
        />
      </CardItem>
    </Card>
    <Button
      dark
      full
      onPress={onSubmit}
      style={{
        backgroundColor: buttonColor,
      }}
    >
      <Text>{buttonText}</Text>
    </Button>
  </Fragment>
);

export default Form;
