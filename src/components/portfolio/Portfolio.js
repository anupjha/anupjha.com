import React from "react";
import Terminal from "../about/Terminal";
import Style from "../about/About.module.scss";
import { Box } from "@mui/material";
import { info } from "../../info/Info";

export default function Portfolio() {
  const firstName = info.firstName.toLowerCase();
  function experienceText() {
    return (
      <>
        <p>
          <span style={{ color: info.baseColor }}>
            {firstName}
            {info.lastName.toLowerCase()} $
          </span>{" "}
          cd experience
        </p>
        <p>
          <span style={{ color: info.baseColor }}>
            experience <span className={Style.green}>(main)</span> $
          </span>{" "}
          ls
        </p>
        <p style={{ color: info.baseColor }}> Worked With</p>

        {info.experience.map((e, index) => (
          <p key={index}>
            {e.company} {"    >>"}
            {e.designation}
            {"    >>"}
            {e.duration}
          </p>
        ))}
      </>
    );
  }

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      mt={"3rem"}
    >
      <Terminal text={experienceText()} />
    </Box>
  );
}
