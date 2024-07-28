"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";
import "xp.css/dist/XP.css";

export default function Page() {
  const [maximized, setMaximized] = useState(false);
  console.log(maximized);
  const [closed, setClosed] = useState(false);
  const [minimized, setMinimized] = useState(false);
  return (
    <div
      className={cn(
        "h-[100svh] w-[100vw] flex p-4 bg-[#ebe9d8]",
        minimized && "items-end justify-start",
        !minimized && "items-center justify-center"
      )}
    >
      {!closed ? (
        <div
          className={cn(
            "window",
            maximized && "h-full w-full",
            !maximized && "max-w-[800px] w-full",
            minimized && "w-[350px]"
          )}
        >
          <div className={
            cn("title-bar p-4", 
              minimized && "cursor-pointer",
            )} onClick={() => {
              minimized && setMinimized(false)
              }}>
            <div className="title-bar-text">Read the fucking prompt</div>
            {!minimized && (
              <div className="title-bar-controls">
                <button
                  onClick={() => setMinimized((state) => !state)}
                  aria-label="Minimize"
                ></button>
                <button
                  onClick={() => setMaximized((state) => !state)}
                  aria-label="Maximize"
                ></button>
                <button
                  onClick={() => setClosed(true)}
                  aria-label="Close"
                ></button>
              </div>
            )}
          </div>
          {!minimized && (
            <div className="window-body h-full">
              <pre className="overflow-auto h-full">
                Microsoft❮R❯ Windows DOS <br />${`❮C❯`} Copyright Microsoft Corp
                1990-2001.
                <br /> <br />${`C:\WINDOWS\SYSTEM32>`} Please take a look at
                what i have been doing lately
                <br />
                <Link href="/olafurarnalds">olafurarnalds look a like</Link>
                <br />
                <Link href="/gummisig">variable font things</Link>
                <br />
                <br />${`C:\WINDOWS\SYSTEM32>`} I am currently working on a page
                transitions
                <br />${`C:\WINDOWS\SYSTEM32>`} I hope you enjoy your stay.
              </pre>
            </div>
          )}
        </div>
      ) : (
        <div className="text-[3vw] text-black max-w-[490px]">
          Congratilation you closed the window ?
        </div>
      )}
    </div>
  );
}
