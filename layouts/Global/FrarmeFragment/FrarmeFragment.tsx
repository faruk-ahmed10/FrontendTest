import React from 'react';
import MainContent from '../MainContent/MainContent';
import {Sidebar} from '../Sidebar/Sidebar';

const FrameFragment = ({children}: any) => {
    return (
        <>
            <Sidebar />
            <MainContent children={children} />
        </>
    );
};

export default FrameFragment;
