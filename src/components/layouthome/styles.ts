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

    .stars {
      color: #c93b59;
      font-weight: 700;
      margin-left: 2px;
    }

    ul {
      list-style-type: none;
      margin-left: 15px;
    }
  }

  .row {
    height: 100%;
    align-items: center;
  }
`
