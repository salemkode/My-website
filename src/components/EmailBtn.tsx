"use client";

import NextIcon from "@assets/images/next.svg";
import { Button } from "@components/ui/button";
import Image from "next/image";
import React, { useState } from "react";

const EmailBtn: React.FC<any> = ({ text, _class }) => {
  const [email] = useState("hello@salemkode.com");
  const [popup, setPopup] = useState(false);
  const [alert, setAlert] = useState(false);

  const showPopup = () => {
    setPopup(!popup);
    copyMail();
  };

  const copyMail = () => {
    navigator.clipboard.writeText(email);
    if (!alert) {
      setAlert(true);
      setTimeout(() => setAlert(false), 500);
    }
  };

  return (
    <Button className="rounded-full group flex">
      <a
        onClick={copyMail}
        href={`mailto:${email}`}
        className="flex items-center p-2"
      >
        <strong>{text}</strong>
        <Image
          src={NextIcon.src}
          width={24}
          height={24}
          alt="Next to email icon"
          className="ml-2 p-0.5 transition-[margin] group-hover:ml-6"
        />
      </a>
      <div className="fade">{alert && <div>Coped</div>}</div>
    </Button>
  );
};

export default EmailBtn;
