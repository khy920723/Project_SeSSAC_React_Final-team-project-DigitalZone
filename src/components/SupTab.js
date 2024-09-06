import React from "react";
import { NavLink } from "react-router-dom";

function SupTab() {
  return (
    <ul className="acc-tab">
      <li>
        <NavLink end to="/account">
          계정변경
        </NavLink>
      </li>
      <li>
        <NavLink to="/account/create">관리자 계정생성</NavLink>
      </li>
      <li>
        <NavLink to="/account/manage">계정관리</NavLink>
      </li>
    </ul>
  );
}

export default SupTab;
