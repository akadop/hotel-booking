import {
  Button,
  FieldTitle,
  FieldWrapper,
  FormWrapper,
  Input,
  Label
} from '../../shared/form-elements';
import { Field, Form } from 'react-final-form';

import { isValidDate } from '../../../core/utils';

const errors = {
  MISSING_NAME: 'Name required',
  MISSING_HOTEL_NAME: 'We need the name of the hotel!',
  MISSING_ARRIVAL_DATE: 'Arrival date is required',
  MISSING_DEPARTURE_DATE: 'Departure date is required',
  INVALID_DATE: 'Invalid Date Format. (YYYY/MM/DD, YYYY-MM-DD)'
};

const ReservationForm = ({ handleSubmit }) => {
  const today = new Date().toISOString();

  return (
    <Form
      initialValues={{
        name: '',
        hotelName: '',
        arrivalDate: today,
        departureDate: ''
      }}
      validate={values => {
        const err = {};
        if (!values.name) {
          err.name = errors.MISSING_NAME;
        }
        if (!values.hotelName) {
          err.hotelName = errors.MISSING_HOTEL_NAME;
        }
        if (!values.arrivalDate) {
          err.arrivalDate = errors.MISSING_ARRIVAL_DATE;
        } else if (!isValidDate(values.arrivalDate)) {
          err.arrivalDate = errors.INVALID_DATE;
        }
        if (!values.departureDate) {
          err.departureDate = errors.MISSING_DEPARTURE_DATE;
        } else if (!isValidDate(values.departureDate)) {
          err.departureDate = errors.INVALID_DATE;
        }
        return err;
      }}
      onSubmit={handleSubmit}
      render={({ handleSubmit, submitting, pristine, values }) => {
        return (
          <FormWrapper onSubmit={handleSubmit}>
            <FieldTitle>Name</FieldTitle>
            <Field
              name="name"
              render={({ input, meta }) => {
                const validationStates = {
                  active: meta.active,
                  error: meta.error && !meta.pristine && !meta.active
                };
                return (
                  <FieldWrapper {...validationStates}>
                    <Input {...input} type="text" placeholder="Walter White" />
                    <Label {...validationStates}>
                      {(meta.touched && meta.error) || 'What is your name?'}
                    </Label>
                  </FieldWrapper>
                );
              }}
            />
            <FieldTitle>Hotel Location (any)</FieldTitle>
            <Field
              name="hotelName"
              render={({ input, meta }) => {
                const validationStates = {
                  active: meta.active,
                  error: meta.error && !meta.pristine && !meta.active
                };
                return (
                  <FieldWrapper {...validationStates}>
                    <Input {...input} type="text" placeholder="Hilton NYC" />
                    <Label {...validationStates}>
                      {(meta.touched && meta.error) || 'Where are you staying?'}
                    </Label>
                  </FieldWrapper>
                );
              }}
            />
            <FieldTitle>Arrival Date</FieldTitle>
            <Field
              name="arrivalDate"
              render={({ input, meta }) => {
                const validationStates = {
                  active: meta.active,
                  error: meta.error && !meta.pristine && !meta.active
                };
                return (
                  <FieldWrapper {...validationStates}>
                    <Input {...input} type="text" placeholder="Arrival Date" />
                    <Label {...validationStates}>
                      {(meta.touched && meta.error) || 'When are you arriving?'}
                    </Label>
                  </FieldWrapper>
                );
              }}
            />
            <FieldTitle>Departure Date</FieldTitle>
            <Field
              name="departureDate"
              render={({ input, meta }) => {
                const validationStates = {
                  active: meta.active,
                  error: meta.error && !meta.pristine && !meta.active
                };
                return (
                  <FieldWrapper {...validationStates}>
                    <Input {...input} type="text" placeholder="Departure Date" />
                    <Label {...validationStates}>
                      {(meta.touched && meta.error) || 'When are you departing?'}
                    </Label>
                  </FieldWrapper>
                );
              }}
            />
            <Button type="submit" disabled={pristine || submitting}>
              Book Reservation ›
            </Button>
          </FormWrapper>
        );
      }}
    />
  );
};

export default ReservationForm;
