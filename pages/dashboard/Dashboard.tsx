import React from "react";
import FrameFragment from "../../layouts/Global/FrarmeFragment/FrarmeFragment";
import {Intro} from "../../layouts/Global/Dashboard/Intro";

class Dashboard extends React.Component<any, any> {
    render(): React.ReactNode {
        return (
            <div>
               <FrameFragment>
                   <Intro />
               </FrameFragment>
            </div>
        )
    }
}

export default Dashboard;
