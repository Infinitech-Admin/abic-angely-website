"use client";
import { Button, Input, Spinner, Textarea } from "@nextui-org/react";
import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-hot-toast";

const FeedbackForm = () => {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const user_id = process.env.NEXT_PUBLIC_USER_ID;

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post(
        `https://abicmanpowerservicecorp.com/api/main/testimonial`,
        { user_id, first_name, last_name, message },
      );
      toast.success("Feedback submitted successfully!");
      setFirstName("");
      setLastName("");
      setMessage("");
    } catch (error) {
      toast.error("Failed to submit feedback.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="min-w-lg flex flex-col gap-4 py-8">
        <Input
          required
          label="First Name"
          placeholder="eg. Juan"
          value={first_name}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <Input
          required
          label="Last Name"
          placeholder="eg. Dela Cruz"
          value={last_name}
          onChange={(e) => setLastName(e.target.value)}
        />
        <Textarea
          required
          label="Message"
          placeholder="Leave us message.."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button
          className="bg-violet-500 text-white text-base uppercase"
          isDisabled={loading}
          type="submit"
          variant="solid"
        >
          {loading ? <Spinner color="current" size="sm" /> : "Submit Feedback"}
        </Button>
      </div>
    </form>
  );
};

export default FeedbackForm;
