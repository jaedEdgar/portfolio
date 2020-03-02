import styled from 'styled-components'

const Button = styled.button`
  padding: 18px 50px;
  font-size: 14px;
  font-family: 'Roboto';
  ${({ outline }) => outline && `
    background: transparent;
    color: #FFF;
    outline: none;
    border: 1px solid #fff;
    &:focus, &:hover, &:active {
      background: transparent;
      outline: none;
    }
  `}
`

export default Button