import React from 'react'
import avatar from '../../../../images/avatar.png';
import styles from './profileInfo.module.css';

const ProfileInfo = (props) => {
  return (
    <div className={styles.profile}>
      <div className={styles.avatar}><img src={avatar} className='avatar' alt='avatar' /></div>
      <div className={styles.info}>
        <div className={styles.name}>{props.name}</div>
        <div className={styles.birthday}>{props.birthday}</div>
        <div className={styles.address}>{props.address}</div>
        <div className={styles.language}>{props.language}</div>
      </div>
    </div>
  )
}

export default ProfileInfo;