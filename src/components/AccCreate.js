import React from "react";
import "./Acc.css";
import { Button } from "./Button";
import Gnb from "./Gnb";
import SupTab from "./SupTab";
import useForm from "./useForm";
import validateInfo from "./validateInfo";
import LocationBar from "./LocationBar";
import FadeIn from "react-fade-in/lib/FadeIn";

function AccCreate() {
  const { handleChange, handleSubmit, values, errors } = useForm(validateInfo);

  return (
    <div className="account">
      <Gnb />
      <div className="create">
      <LocationBar depth1="계정 설정" depth2="관리자 계정 생성" />
        <SupTab />
      <FadeIn>
        <div className="form-content">
          <form className="form" onSubmit={handleSubmit}>
            <div className="form-inputs">
              <label htmlFor="userid" className="form-label">
                아이디
              </label>
              <input
                className="form-input userid-input"
                type="text"
                name="userid"
                value={values.userid}
                onChange={handleChange}
              />
              <Button type="button" buttonStyle="btn--gray">
                중복확인
              </Button>
            </div>
            {/* userid */}
            <div className="form-inputs">
              <label htmlFor="password" className="form-label">
                비밀번호
              </label>
              <input
                className="form-input"
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
              />
              {errors.password && (
              <span className="error-msg"> {errors.password}</span>
            )}
            </div>
            {/* password */}
            <div className="form-inputs">
              <label htmlFor="email" className="form-label">
                E-Mail
              </label>
              <input
                className="form-input"
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
              />
              {errors.email && (
              <span className="error-msg"> {errors.email}</span>
            )}
            </div>
            {/* email */}
            <div className="form-inputs">
              <label htmlFor="username" className="form-label">
                사용자명
              </label>
              <input
                className="form-input"
                type="text"
                name="username"
                value={values.username}
                onChange={handleChange}
              />
              {errors.username && (
              <span className="error-msg"> {errors.username}</span>
            )}
            </div>
            {/* username */}
            <div className="form-inputs">
              <label htmlFor="mobile" className="form-label">
                휴대폰 번호
              </label>
              <input
                className="form-input"
                type="tel"
                name="mobile"
                value={values.mobile}
                onChange={handleChange}
              />
              {errors.mobile && (
              <span className="error-msg"> {errors.mobile}</span>
            )}
            </div>
            {/* mobile */}
            <Button type="submit" buttonStyle="btn--yellow">
              저장
            </Button>
          </form>
        </div>
    </FadeIn>
      </div>
    </div>
  );
}

export default AccCreate;
