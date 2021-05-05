import React from 'react'
import Target from './MessengerTarget/target';
import Message from './MessengerMessage/message';
import styles from './messenger.module.css';




const Messenger = (props) => {
 
  let dialogElement = props.dialogs.DialogName.map ( dialogTarget => <Target id={dialogTarget.id} name={dialogTarget.name} /> );
  let messedgesElement = props.dialogs.DialogContent.map ( messages => <Message message={messages.message} /> )

  return (
      <div className ={styles.messenger}>
        <h1>Messenger</h1>
          <div className={styles.body}>
            <div className={styles.targets}>
              {
                dialogElement
              }
            </div>
            <div className={styles.items}>
              {
                messedgesElement
              }
            </div>
        </div>
      </div>
  );
}

export default Messenger;