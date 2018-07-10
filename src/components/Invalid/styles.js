import { StyleSheet } from 'react-native';
import variables from '../../../native-base-theme/variables/commonColor';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    fontSize: variables.fontSizeH1,
    marginBottom: 10,
  },
});

export default styles;
