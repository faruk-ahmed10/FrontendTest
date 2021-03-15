import {css} from "@emotion/css";
import {IStyles} from "../../../app/Interfaces/StyleSheet.Interface";

export const styles: IStyles = {
    card: {
        background: "red",
    }
};

export const classes = {
    introGreetings: css(`
        font-size: 20px;
        font-weight: 500;
        margin-bottom: 5px;
    `),

    introHeading: css(`
        font-size: 34px;
        font-weight: 500;
    `),
};
