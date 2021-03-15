import {css} from "@emotion/css";
import {IStyles} from "../../../app/Interfaces/StyleSheet.Interface";

export const styles: IStyles = {
    card: {
        background: "red",
    }
};

export const classes = {
    mainContainer: css(`
        position: absolute;
        top: 0;
        bottom: 0;
        left: 17%;
        width: 60%;
        overflow: auto;
        box-shadow: inset -1px 0px 0px #E4E4E4;
        padding: 40px;
    `),
};
