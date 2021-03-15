import React from 'react';
import {classes} from "./Siidebar.Styles";

export const ListItem = ({icon, title, badgeContent, onClick}: Partial<{ icon: React.ReactNode, title: string, badgeContent: string | number, onClick(): void }>) => {
    return (
        <div className={classes.menu} onClick={onClick}>
            <table>
                <tbody>
                <tr>
                    <td>
                        <div className={"flex-centered"}>{icon}</div>
                    </td>
                    <td>
                        <div className={"title"}>{title}</div>
                    </td>
                    {typeof badgeContent !== 'undefined' && badgeContent !== '' && (
                        <td>
                            <div className={"flex-centered"}>
                                <div className={classes.badge}>2</div>
                            </div>
                        </td>
                    )}
                </tr>
                </tbody>
            </table>
        </div>
    );
};
