import styled from 'styled-components'

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #c93b59;
  color: rgb(105, 104, 104);
  font-family: sans-serif;

  //CSS Card
  .container {
    width: 600px;
  }

  .card {
    padding: 1.2rem 3rem 1rem 3rem;
    margin: 1rem 1rem 0 1rem;
    border-radius: 1.5rem;
    border-color: rgba(238, 237, 237, 0.438);
    box-shadow: 5px 8px 10px #80808033;
  }

  @media (max-width: 767px) {
    .card {
      padding: 1.5rem 1.5rem 1rem 1.5rem;
    }
  }

  .card-1 {
    background: linear-gradient(
      to right,
      #ffffff 50%,
      rgba(241, 224, 190, 0.507)
    );
  }

  .img-fluid {
    display: flex;
    align-items: center;
    -webkit-user-drag: none;
  }

  @media (max-width: 400px) {
    .container {
      width: 100%;
    }
  }

  .col {
    overflow: visible;
  }

  .row {
    overflow: visible;
    margin: 0;
  }

  //CSS Input
  .form__group {
    position: relative;
    margin-top: 10px;
    background-color: rgb(208 208 208 / 17%);
    border-radius: 12px;
    width: 100%;
  }

  .css-img-button {
    display: flex;
    margin-top: 38px;
    justify-content: space-between;
    align-items: center;
    width: 97%;
  }

  .error {
    width: 100%;
    color: red;
    background: linear-gradient(
      to right,
      #ffffff 50%,
      rgba(241, 224, 190, 0.507)
    );
  }

  //CSS Button
  .login-btn {
    font-family: Hack, monospace;
    background: #c93b59;
    color: #fff;
    cursor: pointer;
    font-size: 2em;
    padding: 1.5rem;
    border: 0;
    transition: all 0.5s;
    border-radius: 10px;
    width: 100%;
    position: relative;
    outline: none;
    &:hover {
      background: #861d33;
      transition: all 0.5s;
      border-radius: 10px;
      color: #ffffff;
    }
  }

  .nav-link {
    font-size: 18px;
    text-align: end;
    color: #fff !important;
    margin-right: 9px;

    a {
      background-color: #8e253b;
      cursor: pointer;
    }
  }

  @media (max-width: 380px) {
    .login-btn {
      width: 121px;
    }
  }

  @media (max-width: 283px) {
    .login-btn {
      font-size: 1.3rem !important;
    }
  }

  @media (max-width: 450px) {
    .login-btn {
      font-size: 1.5rem;
    }

    .css-img-button {
      width: 88%;
    }
  }
`
