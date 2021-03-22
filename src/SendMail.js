import React from "react";
import "./SendMail.css";
import CloseIcon from "@material-ui/icons/Close";
import { Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "./features/mailSlice";
import firebase from "firebase";
import { db } from "./firebase";

function SendMail() {
  const { register, handleSubmit, reset, errors } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (formData) => {
    console.log(formData);
    db.collection("emails").add({
      to: formData.to,
      subject: formData.subject,
      message: formData.message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    reset({
      to: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New Message</h3>
        <CloseIcon
          className="sendMail__close"
          onClick={() => dispatch(closeSendMessage())}
        />
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="To"
          name="to"
          type="email"
          ref={register({ required: true })}
        />
        {errors.to && <p className="sendMail__error">To is required!</p>}

        <input
          placeholder="Subject"
          name="subject"
          type="text"
          ref={register({ required: true })}
        />
        {errors.subject && (
          <p className="sendMail__error">Subject is required!</p>
        )}

        <textarea
          className="sendMail__message"
          name="message"
          placeholder="Message..."
          ref={register({ required: true })}
        />
        {errors.message && (
          <p className="sendMail__error">Message is required!</p>
        )}
        {/* <input
          placeholder="Message..."
          type="text"
          className="sendMail__message"
        /> */}

        <div className="sendMail__options">
          <Button
            className="sendMail__send"
            variant="contained"
            color="primary"
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
