import styled from 'styled-components'
import { GlobalColors } from '../../Global'

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: ${GlobalColors.corSecundaria};
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;
`

export const BtnPesquisar = styled.button`
  background-color: ${GlobalColors.corPrincipal};
  border: 1px solid ${GlobalColors.corPrincipal};
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: ${GlobalColors.corSecundaria};
  margin-left: 8px;
  cursor: pointer;
`

export const Campo = styled.input`
  padding: 0 16px;
  outline-color: ${GlobalColors.corPrincipal};
`