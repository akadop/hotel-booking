import { Columns, Content, Grid, GridBody, Text, TitleWrapper } from '../../shared/grid';

import BOOK_ROOM_MUTATION from './bookRoomMutation';
import { Mutation } from 'react-apollo';
import ReservationForm from './reservation-form';
import { TextPlaceholder } from '../../shared/placeholders';
import { Title } from '../../shared/typography';

const BookRoom = () => {
  return (
    <Grid isIntro>
      <Mutation mutation={BOOK_ROOM_MUTATION}>
        {(bookRoom, { data, loading }) => {
          // not worried about the error state in this demo
          const handleSubmit = values => {
            const { name, hotelName, arrivalDate, departureDate } = values;
            const input = { name, hotelName, arrivalDate, departureDate };
            return bookRoom({
              variables: { input }
            });
          };

          if (loading) {
            return <TextPlaceholder />;
          }

          const determineTitle = data
            ? `Thanks, ${data.createReservation.name}, room at
                    ${data.createReservation.hotelName}   has been booked!`
            : `enjoy life by booking a room now`;

          const determineParagraph = data
            ? `Your reservation ID is ${data.createReservation.id}, set for your arrival on
                      ${data.createReservation.arrivalDate}.`
            : `Book hotels and resorts directly with Hilton to make your next business trip
                      or vacation more relaxing and affordable.`;

          return (
            <Content>
              <TitleWrapper>
                <Title>{determineTitle}</Title>
              </TitleWrapper>
              <GridBody>
                <Columns>
                  <Text>{determineParagraph}</Text>
                </Columns>
                {!data && (
                  <Columns>
                    <ReservationForm handleSubmit={handleSubmit} />
                  </Columns>
                )}
              </GridBody>
            </Content>
          );
        }}
      </Mutation>
    </Grid>
  );
};

export default BookRoom;
