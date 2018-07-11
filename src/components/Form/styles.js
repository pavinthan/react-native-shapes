import { StyleSheet } from 'react-native';
import variables from '../../../native-base-theme/variables/commonColor';

const styles = StyleSheet.create({
  card: {
    marginBottom: 8,
  },
  cardItem: {
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 8,
    paddingBottom: 8,
  },
  invalidCard: {
    borderColor: variables.brandDanger,
  },
  helpText: {
    fontSize: 14,
    margin: 5,
    lineHeight: variables.lineHeight,
  },
  helpTextCode: {
    fontSize: 14,
    color: variables.brandDanger,
  },
  input: {
    flex: 1,
  },
});

export default styles;
