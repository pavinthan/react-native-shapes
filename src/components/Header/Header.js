import React from 'react';
import { Platform, StatusBar } from 'react-native';
import { Header as BaseHeader, Body, Title } from 'native-base';
import styles from './styles';

// Hide StatusBar on Android as it overlaps tabs
if (Platform.OS === 'android') StatusBar.setHidden(true);

const Header = ({ title, bgColor }) => (
  <BaseHeader style={{ backgroundColor: bgColor }}>
    <StatusBar backgroundColor={bgColor} barStyle="light-content" />
    <Body>
      <Title style={styles.title}>{title}</Title>
    </Body>
  </BaseHeader>
);

export default Header;
