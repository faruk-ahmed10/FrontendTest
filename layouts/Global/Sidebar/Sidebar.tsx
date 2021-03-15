import {styles, classes} from "./Siidebar.Styles";
// @ts-ignore
import logo from '../../../static/images/logo.png';
import {ListItem} from "./List";
import {AiFillAppstore} from "react-icons/ai";
import React from "react";
import {Section} from "./Section";
import PerfectScrollbar from 'react-perfect-scrollbar'

function Sidebar() {
    return (
        <div className={classes.sidebarContainer}>
            <PerfectScrollbar>
                <div className={classes.logoContainer}>
                    <img src={logo} alt={"Logo"}/>
                </div>
                <div className={classes.menuContainer}>
                    <Section title={"Admin Tools"}>
                        <ListItem icon={<AiFillAppstore/>} title={"Overview"}/>
                        <ListItem icon={<AiFillAppstore/>} title={"Products"}/>
                        <ListItem icon={<AiFillAppstore/>} title={"Campagins"}/>
                        <ListItem icon={<AiFillAppstore/>} title={"Schedules"}/>
                        <ListItem icon={<AiFillAppstore/>} title={"Payouts"}/>
                        <ListItem icon={<AiFillAppstore/>} title={"Statements"}/>
                        <ListItem icon={<AiFillAppstore/>} title={"Settings"}/>
                    </Section>

                    <Section title={"Insights"}>
                        <ListItem icon={<AiFillAppstore/>} title={"Overview"}/>
                        <ListItem icon={<AiFillAppstore/>} title={"Products"}/>
                        <ListItem icon={<AiFillAppstore/>} title={"Campagins"} badgeContent={2}/>
                    </Section>
                </div>
            </PerfectScrollbar>
        </div>
    )
}

export {Sidebar};
