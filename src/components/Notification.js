import React from 'react';
import { Text } from 'react-native';
import Dialog, {
  DialogContent,
  SlideAnimation,
  DialogTitle,
  DialogFooter,
  DialogButton,
} from 'react-native-popup-dialog';
import { styles } from 'app/src/constants/Stylesheet';

export default class Notification extends React.PureComponent {
  render() {
    const { el, modal, closeModal } = this.props;

    return (
      <Dialog
        visible={modal}
        backgroundStyle={styles.customBackgroundDialog}
        onTouchOutside={() => closeModal()}
        overlayOpacity={0.4}
        animationDuration={200}
        width={1}
        dialogStyle={{
          position: 'absolute',
          top: 0,
          backgroundColor: '#9980FA',
        }}
        dialogAnimation={
          new SlideAnimation({
            slideFrom: 'top',
          })
        }
        dialogTitle={(
          <DialogTitle
            title="Copied to clipboard!"
            hasTitleBar={false}
            textStyle={{ color: '#fff', paddingTop: '10%' }}
          />
)}
        footer={(
          <DialogFooter>
            <DialogButton
              textStyle={{ color: '#fff' }}
              text="close"
              onPress={() => closeModal()}
            />
          </DialogFooter>
)}
      >
        {el && (
          <DialogContent>
            <Text style={{ fontSize: 18, color: '#fff', textAlign: 'center' }}>
              {el.ascii}
            </Text>
          </DialogContent>
        )}
      </Dialog>
    );
  }
}
