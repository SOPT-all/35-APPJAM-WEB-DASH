import React from 'react';
import Card from '@/pages/class/Card';
import Flex from '@/components/Flex';
import Text from '@/components/Text';
import { lessonData } from '@/constants/LessonData';
import { IcClose } from '@/assets/svg';

interface LessonData {
  lessonLocation: string;
  lessonStreetAddress: string;
  lessonOldStreetAddress: string;
}

const LocationInfo = () => {
  const { lessonLocation, lessonStreetAddress, lessonOldStreetAddress }: LessonData = lessonData;

  return (
    <Flex direction="column" justify="center" gap="1.2rem">
      <Card>
        <Flex align="center" justify="spaceBetween" gap="1.6rem" width="100%">
          {/* 왼쪽 */}
          <Flex direction="column" gap="0.6rem">
            <Text tag="b4" color="black">
              {lessonLocation}
            </Text>
            <Flex direction="column" gap="0.4rem">
              <Flex justify="spaceBetween">
                <Flex marginRight="0.4rem">
                  <Text tag="b7" color="gray6">
                    주소
                  </Text>
                </Flex>
                <Text tag="b7" color="gray7">
                  {lessonStreetAddress.split('\n').map((line, idx) => (
                    <React.Fragment key={idx}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </Text>
              </Flex>

              <Flex justify="spaceBetween">
                <Flex marginRight="0.4rem">
                  <Text tag="b7" color="gray6">
                    지번
                  </Text>
                </Flex>
                <Text tag="b7" color="gray7">
                  {lessonOldStreetAddress}
                </Text>
              </Flex>
            </Flex>
          </Flex>

          {/* 오른쪽 */}
          <IcClose width={41} />
        </Flex>
      </Card>
    </Flex>
  );
};

export default LocationInfo;
