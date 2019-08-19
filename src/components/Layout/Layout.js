import React from 'react';
import Aux from '../../hoc/AuxComponent';
import classes from './Layout.module.css';


const layout = (props) => (
    // zawijamy w komponent wyższego rzędu <Aux>
    <Aux> 
        <div> Toolbar, SideDrawer, BackDrop</div>
        <main className={classes.Content}>
            { props.children }
        </main>
    </Aux>
);

export default layout;