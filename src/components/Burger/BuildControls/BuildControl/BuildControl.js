import React from 'react';
import classes from './BuildControl.module.css';

const buildControl = (props) => (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        <button 
            className={classes.Less}
            onClick={props.less}
            disabled={props.disabled}>Less</button> {/* disabled: default html property*/}
        <button 
            className={classes.More}
            onClick={props.more}>More</button>
    </div>
);

export default buildControl;