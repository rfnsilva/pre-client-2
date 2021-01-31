import styled from 'styled-components'

interface Props {
  isOpenSidebar: boolean
  widthView: boolean
}

export const Container = styled.div<Props>`
  display: flex;

  .navbar-nav {
    display: flex;
    flex-direction: column;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
  }

  .sidebar {
    min-height: 100vh;
  }

  .bg-gradient-primary {
    background-color: #34383e;
    background-size: cover;
  }

  .accordion {
    overflow-anchor: none;
  }

  .sidebar-brand {
    color: #fff;
    height: 4.375rem;
    text-decoration: none;
    font-size: 1rem;
    font-weight: 800;
    padding: 1.5rem 1rem;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.05rem;
    z-index: 1;
  }

  .rotate-n-15 {
    transform: rotate(-15deg);
  }

  .sidebar-dark hr.sidebar-divider {
    border-top: 1px solid rgba(255, 255, 255, 0.15);
  }

  .sidebar-heading {
    text-align: left;
    padding: 0 1rem;
    font-weight: 800;
    font-size: 0.65rem;
  }

  .sidebar hr.sidebar-divider {
    margin: 0 1rem 1rem;
  }

  .sidebar-brand-text {
    display: none;
  }

  .nav-item {
    position: relative;
  }

  .nav-link {
    display: flex;
    flex-direction: column;
    font-weight: 700;
    color: #c93b59 !important;
    text-align: center;
    padding: 0.75rem 1rem;
    align-items: center;
    cursor: pointer;
    border-left: 2px solid transparent;

    svg {
      width: 26px;
      height: 33px;
    }
  }

  .nav-link span {
    font-size: 0.65rem;
    display: block;
    color: #fff !important;
  }

  .nav-link:hover {
    background-color: #1d1e21;
    border-left: 2px solid #c93b59;
  }

  .sidebar-heading {
    color: rgba(255, 255, 255, 0.4);
    text-align: center;
    padding: 0 1rem;
    font-weight: 800;
    font-size: 0.65rem;
  }

  .collapse-header {
    margin: 0;
    white-space: nowrap;
    padding: 0.5rem 1.5rem;
    text-transform: uppercase;
    font-weight: 800;
    font-size: 0.65rem;
    color: #b7b9cc;
  }

  .collapse-item {
    padding: 0.5rem 1rem;
    margin: 0 0.5rem;
    display: block;
    color: #3a3b45;
    text-decoration: none;
    border-radius: 0.35rem;
    white-space: nowrap;
  }

  @media (min-width: 768px) {
    .sidebar-heading {
      text-align: left;
      font-size: 0.65rem;
    }

    .sidebar-brand-text {
      display: inline;
    }

    sup {
      top: -0.5em;
      position: relative;
      font-size: 75%;
      line-height: 0;
      vertical-align: baseline;
    }

    .nav-link {
      display: block;
      width: 100%;
      text-align: left;
      padding: 1rem;
      display: flex;
      align-items: center;
    }

    .nav-link span {
      font-size: 0.85rem;
      display: inline;
    }
  }

  @media (max-width: 767px) {
    .toggled {
      display: ${props =>
        props.isOpenSidebar ? 'block !important' : 'none !important'};
    }
  }
`
