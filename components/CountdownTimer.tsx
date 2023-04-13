import * as React from 'react';
import {
  Tag,
  TagLeftIcon,
  TagLabel,
  TagProps,
} from '@chakra-ui/react'
import Countdown, { CountdownRenderProps } from "react-countdown";
import { MdTimer } from "react-icons/md";
import { CountdownTimeDeltaFn } from 'react-countdown/dist/Countdown';

export const CountdownTimerRenderer = ({
  days,
  hours,
  minutes,
  seconds,
  completed,
}: CountdownRenderProps, delimiter=' ') => {
  if (completed) {
    return <span>ended</span>;
  }
  return (
    <span>
      {days ? `${days}d${delimiter}` : ' '}
      {hours}h{delimiter}{minutes}m{delimiter}{seconds}s
    </span>
  );
};

const CountdownTimer: React.FC<{
  time?: string | number | Date,
  delimiter?: string,
  onTick?: CountdownTimeDeltaFn
} & TagProps> = (props) => {
    return props?.time ? (
        <Tag
          size="md"
          variant="subtle"
          borderRadius={"full"}
          bg="white"
          p={2} pr={3}
          { ...props }
        >
          <TagLeftIcon as={MdTimer} boxSize="16px" color={"orange.400"} />

          <TagLabel color={"gray.500"}>
            <Countdown
              date={props.time}
              renderer={
                (renderProps) => CountdownTimerRenderer(renderProps, props.delimiter)
              }
              onTick={props.onTick}
            />
          </TagLabel>
        </Tag>
    ) : <></>
}

export default CountdownTimer