import {
  Button,
  FieldTitle,
  FieldWrapper,
  FormWrapper,
  Input,
  Label
} from '../../shared/form-elements';
import { Field, Form } from 'react-final-form';

import { isBetween } from '../../../core/utils';

const FindReservationForm = ({ handleSubmit }) => {
  return (
    <Form
      validate={values => {
        const err = {};
        if (!values.id) {
          err.id = 'Reservation ID required';
        } else if (!isBetween(values.id, 36, 36)) {
          err.id = 'Reservation ID must 36 characters';
        }
        return err;
      }}
      onSubmit={handleSubmit}
      render={({ handleSubmit, submitting, pristine, values }) => {
        return (
          <FormWrapper onSubmit={handleSubmit}>
            <FieldTitle>Reservation ID</FieldTitle>
            <Field
              name="id"
              render={({ input, meta }) => {
                const validationStates = {
                  active: meta.active,
                  error: meta.error && !meta.pristine && !meta.active
                };
                return (
                  <FieldWrapper {...validationStates}>
                    <Input
                      {...input}
                      type="text"
                      placeholder="3295ef14-c0aa-46a0-b00b-bbb48fcf3dd1"
                    />
                    <Label {...validationStates}>
                      {(meta.touched && meta.error) || 'What is your reservation ID?'}
                    </Label>
                  </FieldWrapper>
                );
              }}
            />
            <Button type="submit" disabled={pristine || submitting}>
              Find reservation ›
            </Button>
          </FormWrapper>
        );
      }}
    />
  );
};

export default FindReservationForm;
