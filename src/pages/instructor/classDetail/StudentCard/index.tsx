import * as styles from '@/pages/instructor/classDetail/StudentCard/index.css';
import Flex from '@/components/Flex';
import Head from '@/components/Head';
import Text from '@/components/Text';
import { formatDateTime } from '@/utils/timeCalculate';

interface ParticipantsProps {
  reservationId: number;
  bookerName: string;
  bookerPhoneNumber: string;
  reservationDateTime: string;
}

interface StudentCardProps {
  participants: ParticipantsProps;
  index: number;
}

const StudentCard = ({ participants, index }: StudentCardProps) => {
  return (
    <div className={styles.cardContainerStyle}>
      <div className={styles.cardNumberStyle}>
        <Head level="h2" tag="h6">
          {index + 1}
        </Head>
      </div>
      <Flex direction="column" gap="0.2rem" width="100%">
        <Text tag="b9">{participants.bookerName}</Text>
        <Flex gap="3.5rem" align="center" width="100%" justify="spaceBetween">
          <Text tag="b7" color="gray9">
            {participants.bookerPhoneNumber}
          </Text>
          <Text tag="c1" color="gray9">
            {formatDateTime(participants.reservationDateTime)}
          </Text>
        </Flex>
      </Flex>
    </div>
  );
};

export default StudentCard;