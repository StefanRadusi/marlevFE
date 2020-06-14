import * as React from "react";

export const messageContext = {
    changeMessage: () => {}
}

export const MessageContext = React.createContext(
    messageContext.changeMessage
);