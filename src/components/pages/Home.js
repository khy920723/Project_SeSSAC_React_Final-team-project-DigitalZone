import React from "react";
import Gnb from "../Gnb";
import Loginbf_pannel1 from "../Loginbf_pannel1";
import Loginbf_pannel2 from "../Loginbf_pannel2";
import Loginbf_pannel3 from "../Loginbf_pannel3";
import Logined_home from "../Logined_home";

export default function Home() {
  return (
    <div className="home">
        <Gnb />
        {/* userState가 true일 때 */}
      <Logined_home />
    </div>
  );
}
