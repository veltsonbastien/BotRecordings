import {Styles} from "react-modal";

export const modalStyles: Styles =
    {
        overlay: {
            background: "transparent"
        },
        content: {
            background: "rgb(0,0,0,0.9)",
            color: "white",
            position: "relative",
            display: "flex",
            justifyContent: "center",
            marginLeft: "50%",
            transform: "translateX(-50%)",
            marginTop: "5%",
            inset: "0",
            width: "80%",
            height: "80%",
            flexDirection: "column",
            padding: "0 15%",
        }
    }