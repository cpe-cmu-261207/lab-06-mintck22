import React from "react";
import {
  IconChevronDown,
  IconChevronUp,
  IconMailForward,
  IconMapPins,
} from "@tabler/icons";

export default function UserCardDetail(prop) {
  return (
    <div>
      <div className="text-center">
        <p>
          <IconMailForward /> {prop.email}
        </p>
        <p>
          <IconMapPins /> {prop.address}
        </p>
      </div>
    </div>
  );
}
