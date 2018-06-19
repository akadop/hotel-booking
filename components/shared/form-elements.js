import styled from 'react-emotion';

export const FormWrapper = styled.form`
  align-items: center;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
`;

export const FieldWrapper = styled.div(
  {
    width: '100%',
    backgroundColor: props.theme.colors.white,
    border: `2px solid ${props.theme.colors.n100}`,
    borderRadius: '100px',
    position: 'relative'
  },
  props =>
    props.error && {
      border: `2px solid ${props.theme.colors.error}`
    }
);

export const Input = styled.input`
  background-color: transparent;
  border: none;
  color: ${props => props.theme.colors.n880};
  height: 56px;
  padding: 0 16px;
  position: relative;
  width: 100%;
  transition: 0.1s padding ease-in-out;
  -webkit-appearance: none;
`;

export const Button = styled.button`
  display: inline-flex;
  background: ${props => props.theme.colors.black};
  border: 2px solid ${props => props.theme.fontWeight.black};
  font-weight: ${props => props.theme.fontWeight.black};
  color: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.borderRadius.button};
  box-shadow: ${props => props.theme.boxShadow.button};
  padding: 8px 20px;
  cursor: pointer;
  margin: 0.75em 0 0 0;
  height: 56px;
  text-align: center;
  transition: border 0.2s, background 0.2s, color 0.2s ease-out;
  &:hover {
    border: 2px solid ${props => props.theme.fontWeight.black};
    background: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.black};
  }
`;
