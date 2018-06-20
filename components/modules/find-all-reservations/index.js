import { Card, CardWrapper, InnerCardWrapper } from '../../shared/cards';
import { Columns, Content, Grid, GridBody, Text, TitleWrapper } from '../../shared/grid';
import { P, Title } from '../../shared/typography';

import { Query } from 'react-apollo';
import { TextPlaceholder } from '../../shared/placeholders';
import getAllReservationsQuery from './getAllReservations';

const AllReservations = () => (
  <Grid isIntro>
    <Content>
      <TitleWrapper>
        <Title>all reservations</Title>
      </TitleWrapper>
      <GridBody>
        <Columns>
          <Text>
            There is a ton of fake data in the JSON, so i have limited it to around 60 results per
            call via a pagination cursor.
          </Text>
        </Columns>
        <Query
          query={getAllReservationsQuery}
          variables={{ cursor: 1 }}
          fetchPolicy="cache-and-network"
        >
          {({ data, loading, error }) => {
            if (loading) {
              return (
                <CardWrapper>
                  <Card>
                    <InnerCardWrapper>
                      <TextPlaceholder />
                    </InnerCardWrapper>
                  </Card>
                </CardWrapper>
              );
            }
            if (error) {
              return (
                <CardWrapper>
                  <Card>
                    <InnerCardWrapper>
                      <P>Reservation Not Found</P>
                    </InnerCardWrapper>
                  </Card>
                </CardWrapper>
              );
            }
            if (data) {
              const { reservations } = data.getAllReservations;
              return (
                <CardWrapper>
                  {reservations.map(reservation => {
                    const { name, hotelName, arrivalDate, departureDate, id } = reservation;
                    return (
                      <Card key={id}>
                        <InnerCardWrapper>
                          <P>Name: {name}</P>
                          <P>Arrival: {arrivalDate}</P>
                          <P>Departure: {departureDate}</P>
                          <P>Hotel: {hotelName}</P>
                          <P>Reservation Id: {id}</P>
                        </InnerCardWrapper>
                      </Card>
                    );
                  })}
                </CardWrapper>
              );
            }
            return;
          }}
        </Query>
      </GridBody>
    </Content>
  </Grid>
);

export default AllReservations;
