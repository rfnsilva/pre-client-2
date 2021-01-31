import styled from 'styled-components'

interface Props {
  isOpenSidebar: boolean
  widthSidebarOpen: boolean
}

export const Container = styled.div<Props>`
  margin-left: ${props =>
    props.isOpenSidebar || props.widthSidebarOpen ? '85px;' : '0;'};
  width: 100%;

  .card {
    width: 100%;
    max-width: 850px;
    height: 100%;
    border-radius: 20px;
    box-shadow: 0px 8px 16px 4px #9e9e9e;
    margin-top: 15px;
    padding: 25px;

    label {
      margin-top: 0.5rem;
    }

    .profile-img {
      width: 180px;
      height: 180px;
      justify-content: left;
      border-radius: 90px;
      display: block;
      margin-left: auto;
      margin-right: auto;
    }

    .stars {
      color: rgb(167, 40, 69);
      font-weight: 700;
      margin-left: 2px;
    }

    .input {
      display: block;
      width: 100%;
      height: 2.5rem;
      padding: 0.375rem 0.75rem;
      font-size: 1rem;
      color: #495057;
      background-color: #fff;
      background-clip: padding-box;
      border: 1px solid #ced4da;
      border-radius: 0.25rem;
      transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
      outline: 0;
    }
  }

  .row {
    height: 100%;
    align-items: center;
  }

  .input-upload {
    width: 100%;
  }

  .input-upload-label {
    width: 100%;
    height: 38px;
    color: #fff;
    padding-top: 10px;
    text-align: center;
    border-radius: 5px;
    background-color: #317bff;
    cursor: pointer;
  }

  .btn-primary {
    width: 100%;
  }

  .alt {
    height: 280px;
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

  .updateButton {
    button {
      background-color: #c93b59;
      margin-top: 22px;
      border-radius: 10px;
      width: 30%;
      height: 45px;
      color: #fff;
    }
  }

  @media (max-width: 768px) {
    .alt {
      height: 280px;
    }
  }
`
