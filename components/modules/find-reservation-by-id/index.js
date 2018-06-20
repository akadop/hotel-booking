import { Card, CardWrapper, InnerCardWrapper } from '../../shared/cards';
import { Columns, Content, Grid, GridBody, Text, TitleWrapper } from '../../shared/grid';
import { P, Title } from '../../shared/typography';

import FIND_RESERVATION_QUERY from './findReservationQuery';
import FindReservationForm from './form';
import { Query } from 'react-apollo';
import { TextPlaceholder } from '../../shared/placeholders';
import exampleIds from './example-ids';
import { withRouter } from 'next/router';

const FindReservation = ({ router }) => {
  console.log(exampleIds);

  // shallow route after hitting submit so we can provide the query component a variable
  const handleSubmit = values => {
    const href = `/reservation?id=${values.id}`;
    const as = href;
    return router.push(href, as, { shallow: true });
  };

  return (
    <Grid isIntro>
      <Content>
        <TitleWrapper>
          <Title>find your reservation.</Title>
        </TitleWrapper>
        <GridBody>
          <Columns>
            <Text>
              Looking for details about your reservation? just type in your reservation id!
            </Text>
            <Text>hint: check the console.log for a list of them.</Text>
          </Columns>
          <Columns>
            <FindReservationForm handleSubmit={handleSubmit} />
          </Columns>
          <CardWrapper>
            {router.query.id && (
              <Query query={FIND_RESERVATION_QUERY} variables={{ id: router.query.id }}>
                {({ data, loading }) => {
                  // not worried about the error state in this demo
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
                    const {
                      arrivalDate,
                      departureDate,
                      id,
                      hotelName,
                      name
                    } = data.getReservationById;
                    return (
                      <Card>
                        <InnerCardWrapper>
                          <P>Name: {name}</P>
                          <P>Arrival: {arrivalDate}</P>
                          <P>Departure: {departureDate}</P>
                          <P>Hotel: {hotelName}</P>
                          <P>Reservation Id: {id}</P>
                        </InnerCardWrapper>
                      </Card>
                    );
                  }
                  return null;
                }}
              </Query>
            )}
          </CardWrapper>
        </GridBody>
      </Content>
    </Grid>
  );
};

export default withRouter(FindReservation);
