import { StyleSheet } from 'react-native';
import variables from '../../../native-base-theme/variables/commonColor';

const styles = StyleSheet.create({
  title: {
    textAlign: 'left',
    color: variables.brandDark,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
  },
  button: {
    marginLeft: 5,
  },
});

export default styles;
