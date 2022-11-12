import styled from 'styled-components';

const LoginContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: rgb(0, 43, 54);
  .login_panel {
    width: 400px;
    min-height: 300px;
    border-radius: 12px;
    overflow: hidden;
    background-color: rgb(5, 56, 71);
    box-shadow: 0 0 18px rgb(0 0 0 / 50%);
    padding: 20px;

    .username,
    .password {
      height: 42px;
      display: flex;
      align-items: center;

      margin: 35px 0 30px;
      overflow: hidden;
      color: #fff;
      input {
        flex: 1;
        width: 100%;
        height: 100%;
        border-radius: 42px;
        font-size: 15px;
        padding-left: 20px;
        color: #000;
      }
    }

    .bottom_box {
      display: flex;
      justify-content: space-around;
      .register,
      .login {
        width: 100px;
        height: 50px;
        border-radius: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgb(8, 88, 112);
        color: #fff;
        font-size: 18px;
        margin: 10px 0 0;
      }
    }
  }
`;

export default LoginContainer;
