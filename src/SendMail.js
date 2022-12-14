import { Close } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";
import "./SendMail.css";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "./features/mailSlice";
import { db } from "./firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const SendMail = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (formData) => {
    console.log(formData.message);

    addDoc(collection(db, "emails"), {
      to: formData.to,
      subject: formData.subject,
      message: formData.message,
      timestamp: serverTimestamp(),
    });
    dispatch(closeSendMessage());
  };

  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New Message</h3>
        <Close
          onClick={() => {
            dispatch(closeSendMessage());
          }}
          className="sendMail__close"
        />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("to", { required: true })}
          placeholder="To"
          type="email"
        />
        {errors.to && <p className="sendMail__error">'To' is required.</p>}
        <input
          {...register("subject", { required: true })}
          placeholder="Subject"
          type="text"
        />
        {errors.subject && (
          <p className="sendMail__error">'Subject' is required.</p>
        )}

        <textarea
          {...register("message", { required: true })}
          placeholder="Message..."
          className="sendMail__message"
        ></textarea>
        {errors.message && (
          <p className="sendMail__error">'Message' is required.</p>
        )}

        <div className="sendMail__options">
          <Button className="sendMail__send" type="submit">
            Send
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SendMail;
