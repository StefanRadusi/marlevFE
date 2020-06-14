import React from "react";

import './Message.scss';

export default function Message({message}) {
    return (
        <div className={"message " + message.type}>{message.text}</div>);
}