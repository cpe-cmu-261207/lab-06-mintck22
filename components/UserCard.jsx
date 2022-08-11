import React from "react";
import {
  IconChevronDown,
  IconChevronUp,
  IconMailForward,
  IconMapPins,
} from "@tabler/icons";
import { useState } from "react";
import UserCardDetail from "../components/UserCardDetail";

export default function UserCard(props) {
  const [isMouseClicked, setIsMouseClicked] = useState(false);

  return (
    <div
      onClick={() => {
        if (isMouseClicked === false) setIsMouseClicked(true);
        else setIsMouseClicked(false);
      }}
    >
      <div className="border-bottom">
        {/* main section */}
        <div className="d-flex align-items-center p-3">
          <img src={props.img} width="90px" class="rounded-circle me-4" />
          <span className="text-center display-6 me-auto">{props.name}</span>

          {!isMouseClicked && <IconChevronDown />}
          {isMouseClicked && <IconChevronUp />}
        </div>
        {isMouseClicked && <UserCardDetail key={props.name} {...props} />}
      </div>
    </div>
  );
}
