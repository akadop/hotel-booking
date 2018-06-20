import AllReservations from '../components/modules/find-all-reservations';
import WithAll from '../core/lib/withAll';

const AllReservationsPage = () => {
  return <AllReservations />;
};

export default WithAll(AllReservationsPage);
