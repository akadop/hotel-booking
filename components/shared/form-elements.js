import styled from 'react-emotion';

export const FormWrapper = styled.form`
  align-items: center;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
`;

export const FieldWrapper = styled.div`
  width: 100%;
  background-color: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.borderRadius.default};
  position: relative;
  border: ${props =>
    (props.error && `2px solid ${props.theme.colors.error}`) ||
    `2px solid ${props.theme.colors.n100}`};
`;

export const Label = styled.label(
  {
    fontSize: '12px',
    left: '16px',
    lineHeight: '24px',
    opacity: 0,
    pointerEvents: 'none',
    position: 'absolute'
  },
  props => ({
    color:
      (props.error && props.theme.colors.error) ||
      (props.active && props.theme.colors.purple) ||
      props.theme.colors.white,
    top: (props.active && '4px') || '24px',
    opacity: (props.active && '1') || '0',
    transition: props.theme.transitions.curve,
    fontWeight: props.theme.fontWeight.medium
  })
);

export const FieldTitle = styled.span`
  color: ${props => props.theme.colors.black};
  display: block;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.35em;
  margin: 1.15em 0 0.5em 0;
  text-align: center;
  text-indent: 0.35em;
  text-transform: uppercase;
`;

export const Input = styled.input`
  background-color: transparent;
  border: none;
  color: ${props => props.theme.colors.n900};
  height: 56px;
  font-size: 0.85em;
  padding: 0 16px;
  position: relative;
  width: 100%;
  transition: 0.1s padding ease-in-out;
  -webkit-appearance: none;
`;

export const Button = styled.button`
  display: inline-flex;
  background: ${props => props.theme.colors.black};
  border: 2px solid ${props => props.theme.colors.black};
  font-weight: ${props => props.theme.fontWeight.black};
  color: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.borderRadius.button};
  box-shadow: ${props => props.theme.boxShadow.button};
  padding: 8px 20px;
  cursor: pointer;
  margin: 0.75em 0 0 0;
  height: 50px;
  text-align: center;
  transition: border 0.2s, background 0.2s, color 0.2s ease-out;
  &:hover {
    border: 2px solid ${props => props.theme.fontWeight.black};
    background: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.black};
  }
`;
