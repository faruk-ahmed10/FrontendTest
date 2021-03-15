import { css } from "@emotion/css";
import { IStyles } from "../../../app/Interfaces/StyleSheet.Interface";

export const styles:IStyles = {
    card: {
        background: "red",
    }
};

export const classes = {
    sidebarContainer: css(`
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        width: 17%;
        overflow: auto;
        box-shadow: inset -1px 0px 0px #E4E4E4;
    `),
    logoContainer: css(`
        text-align: center;
        padding-top: 30px;
        
        & img {
            width: 130px;
        }
    `),

    menuContainer: css(`
        margin-top: 30px;
        margin-left: 10px;
        margin-right: 10px;
    `),

    section: css(`
        border-bottom: 1px solid #e4e4e4;
        padding-bottom: 30px;
        margin-bottom: 30px;
    `),

    menuSectionName: css(`
        padding: 0 20px;
        color: #808191;
        font-weight: 500;
        font-size: 12px;
        line-height: 16px;
        margin-bottom: 15px;
    `),

    menu: css(`
        position: relative;
        padding: 10px;
        border-radius: 12px;
        display: flex;
        align-items: center;
        height: 45px;
        color: #808191;
        cursor: pointer;
        
        &:hover {
            background: #6C5DD3;
            color: #ffffff;
        }
        
        & .title {
            margin-left: 13px;
            font-size: 14px;
            font-weight: 600;
        }
        
        & table {
            width: 100%;
        }
        
        & table td:nth-child(2) {
            width: 100%;
        }
        
        .flex-centered {
            display: flex;
            justify-content: center;
            align-items: center;
        }
    `),

    badge: css(`
        width: 20px;
        height: 20px;
        border-radius: 50%;
        right: 0px;
        top: 0px;
        background: #FF754C;
        color: #ffffff;
        font-family: arial;
        font-size: 12px;
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: center;
    `)
};
