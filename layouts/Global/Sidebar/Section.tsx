import React from 'react';
import {classes} from "./Siidebar.Styles";

export const Section = ({title, children}: { title: string, children: any }): any => {
    return (
        <div className={classes.section}>
            <div className={classes.menuSectionName}>{title}</div>
            {children}
        </div>
    );
};
