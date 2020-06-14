import React from "react";
import Button from "@material-ui/core/Button";
import {sendMail} from "./sendMail";
import {MessageContext} from "../../../../common/Message/messageContext";

export default class SendMailButton extends React.Component {
    render() {
        const {mailData, disabled} = this.props;
        const changeMessage = this.context;

        return (
            <Button title="Completeaza campurile de mai sus"
                    variant="outlined"
                    onClick={() => sendMail(mailData, changeMessage)}
                    disabled={disabled}
            >
                Trimite
            </Button>);
    }
}
SendMailButton.contextType = MessageContext;