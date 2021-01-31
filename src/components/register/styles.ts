import styled from 'styled-components'

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #c93b59;
  color: rgb(105, 104, 104);
  font-family: sans-serif;

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
    padding: 15px 0 0;
    margin-top: 10px;
    background-color: rgb(208 208 208 / 17%);
    border-radius: 12px;
    width: 100%;
  }

  .form__field {
    font-family: inherit;
    width: 91%;
    border: 0;
    border-bottom: 2px solid $gray;
    outline: 0;
    font-size: 1.3rem;
    color: #000;
    padding: 7px 0;
    background: transparent;
    transition: border-color 0.2s;
    margin-left: 23px;

    &::placeholder {
      color: transparent;
    }

    &:placeholder-shown ~ .form__label {
      font-size: 1.3rem;
      cursor: text;
      top: 20px;
    }
  }

  .form__label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 1rem;
    color: $gray;
    margin-left: 25px;
  }

  .form__field:focus {
    ~ .form__label {
      position: absolute;
      top: 0;
      display: block;
      transition: 0.2s;
      font-size: 1rem;
      color: $primary;
      font-weight: 700;
    }

    padding-bottom: 6px;
    font-weight: 700;
    border-width: 3px;
    border-image: linear-gradient(to right, $primary, $secondary);
    border-image-slice: 1;
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

  .register-btn {
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
    .register-btn {
      width: 131px;
    }
  }

  @media (max-width: 283px) {
    .register-btn {
      font-size: 1.3rem !important;
    }
  }

  @media (max-width: 450px) {
    .register-btn {
      font-size: 1.5rem;
    }
    .css-img-button {
      width: 88%;
    }
  }
`
