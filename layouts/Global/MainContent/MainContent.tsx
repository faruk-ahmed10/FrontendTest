import React from 'react';
import {styles, classes} from "./MainContent.Styles";

const MainContent = ({children}: any) => {
    return (
        <div className={classes.mainContainer}>
            {children}
        </div>
    );
};

export default MainContent;
