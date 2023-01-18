const USER_ROLE = {
  user: "USER",
  admin: "ADMIN",
};

const codeRegExp = /^[0-9]{9}$/;
const emailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

module.exports = { USER_ROLE, codeRegExp, emailRegExp };
