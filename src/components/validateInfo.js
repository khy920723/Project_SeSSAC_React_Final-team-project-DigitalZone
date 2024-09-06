export default function validateInfo(values) {
  let errors = {};

  if (!values.username.trim()) {
    errors.username = "사용자명을 입력해 주십시오.";
  } //username

  if (!values.email) {
    errors.email = "이메일을 입력해 주십시오.";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "올바른 이메일 주소를 입력해 주십시오.";
  } //email

  if (!values.password) {
    errors.password = "비밀번호를 입력해 주십시오.";
  } else if (values.password.length < 8) {
    errors.password = "비밀번호는 8자 이상이어야 합니다.";
  } //password

  if (!values.password2) {
      errors.password2 = "비밀번호 확인이 필요합니다."
  } else if (values.password2 !== values.password) {
      errors.password2 = "비밀번호가 일치하지 않습니다."
  } //password2

  if (!values.mobile) {
    errors.mobile = "휴대폰 번호를 입력해 주십시오.";
  } //username

  return errors;
}
