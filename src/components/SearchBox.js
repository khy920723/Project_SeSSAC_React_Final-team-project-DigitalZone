import { Button } from "./Button";
import React, { useState } from "react";
import userData from "./userData";
import "./SearchBox.css";

function SearchBox() {
  const [idKey, setIdKey] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="search-box">
      <div className="left-container">
        <input
          type="text"
          className="search-input"
          placeholder="사용자명, 아이디, 휴대폰 번호"
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        <ul className="search-list">
          {userData
            .filter((values) => {
              if (searchTerm === "") {
                return values;
              } else if (
                values.username.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return values;
              } else if (
                values.userid.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return values;
              } else if (
                values.mobile.replace(/[-]/g, "").includes(searchTerm)
              ) {
                return values;
              }
            })
            .map((values) => {
              return (
                <li
                  className="search-item"
                  key={values.id}
                  onClick={() => {
                    setIdKey(values.id);
                  }}
                >
                  {values.department} {values.username}
                </li>
              );
            })}
        </ul>
      </div>
      <div className="right-container">
        <form className="search-field">
          <div className="form-inputs">
            <label htmlFor="userid" className="form-label">
              아이디
            </label>
            <input
              type="text"
              className="readOnly"
              readOnly
              value={
                idKey != null ? userData.find((c) => c.id === idKey).userid : ""
              }
            />
          </div>
          <div className="form-inputs">
            <label htmlFor="password" className="form-label">
              비밀번호
            </label>
            <input
              type="text"
              defaultValue={
                idKey != null
                  ? userData.find((c) => c.id === idKey).password
                  : ""
              }
            />
          </div>
          <div className="form-inputs">
            <label htmlFor="email" className="form-label">
              이메일
            </label>
            <input
              type="email"
              defaultValue={
                idKey != null ? userData.find((c) => c.id === idKey).email : ""
              }
            />
          </div>
          <div className="form-inputs">
            <label htmlFor="username" className="form-label">
              사용자명
            </label>
            <input
              type="text"
              defaultValue={
                idKey != null
                  ? userData.find((c) => c.id === idKey).username
                  : ""
              }
            />
          </div>
          <div className="form-inputs">
            <label htmlFor="mobile" className="form-label">
              휴대폰 번호
            </label>
            <input
              type="text"
              defaultValue={
                idKey != null ? userData.find((c) => c.id === idKey).mobile : ""
              }
            />
          </div>
          <div className="search-field-btn">
            <Button type="button" buttonStyle="btn--yellow">
              삭제
            </Button>
            <Button type="submit" buttonStyle="btn--yellow">
              저장
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SearchBox;
