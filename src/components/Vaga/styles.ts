import styled from 'styled-components'
import { GlobalColors } from '../../Global'

export const VagaLi = styled.li`
  border: 1px solid ${GlobalColors.corPrincipal};
  background-color: ${GlobalColors.corSecundaria};
  color: ${GlobalColors.corPrincipal};
  padding: 16px;
  transition: all ease 0.3s;
  border-radius: 8px;

  :hover {
    background-color: ${GlobalColors.corPrincipal};
    color: ${GlobalColors.corSecundaria};
  }
`
export const VagaTitulo = styled.h3`
  font-weight: bold;
  margin-bottom: 16px;
`

export const VagaLink = styled.a`
  border-color: ${GlobalColors.corSecundaria};
  background-color: ${GlobalColors.corPrincipal};
  color: ${GlobalColors.corSecundaria};
  display: inline-block;
  padding: 8px 16px;
  text-decoration: none;
  margin-top: 16px;
  font-weight: bold;
  font-size: 14px;
  border-radius: 8px;
  text-align: center;

  :hover {
    border-color: ${GlobalColors.corPrincipal};
    background-color: ${GlobalColors.corSecundaria};
    color: ${GlobalColors.corPrincipal};
  }

  @media (max-width: 768px) {
    display: block;
  }
`
