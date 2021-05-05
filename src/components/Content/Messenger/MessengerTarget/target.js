import React from 'react'
import { NavLink } from 'react-router-dom';
import styles from '../messenger.module.css';


const Target = (props) => {
  return (
    <div className={styles.target}>
      <NavLink to={'/messenger/'+props.id}>{props.name}</NavLink>
    </div> 
  )
}

export default Target;