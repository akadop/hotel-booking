import { Card, CardWrapper, InnerCardWrapper } from '../../shared/cards';
import { Columns, Content, Grid, GridBody, Text, TitleWrapper } from '../../shared/grid';
import { P, Title } from '../../shared/typography';

import { Fragment } from 'react';
import { Query } from 'react-apollo';
import { TextPlaceholder } from '../../shared/placeholders';
import getAllReservationsQuery from './getAllReservations';

const AllReservations = () => (
  <Grid isIntro>
    <Content>
      <TitleWrapper>
        <Title>look at all reservations</Title>
      </TitleWrapper>
      <GridBody>
        <Columns>
          <Text>
            There is a ton of fake data in the JSON, so i've limited it to 50 results per call via a
            pagination cursor.
          </Text>
        </Columns>
        <CardWrapper>
          <Query
            query={getAllReservationsQuery}
            variables={{ cursor: 0 }}
            fetchPolicy="cache-and-network"
          >
            {({ data, loading, error }) => {
              if (loading) {
                return (
                  <Card>
                    <InnerCardWrapper>
                      <TextPlaceholder />
                    </InnerCardWrapper>
                  </Card>
                );
              }
              if (data) {
                const { reservations } = data.getAllReservations;
                return (
                  <Fragment>
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
                  </Fragment>
                );
              }
              return null;
            }}
          </Query>
        </CardWrapper>
      </GridBody>
    </Content>
  </Grid>
);

export default AllReservations;
