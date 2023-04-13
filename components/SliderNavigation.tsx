import * as React from 'react';
import {
    Flex,
    IconButton
} from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

const SliderNavigation: React.FC<{
    onPrevious?: () => void,
    onNext?: () => void,
    children?: React.ReactNode
}> = ({ onPrevious, onNext, children }) => (
    <Flex
      gap={5}
      justifyContent={["center", "center", "center", "center", "flex-end"]}
      alignItems="center"
      py={5}
    >
      <IconButton
        aria-label="previous artist"
        icon={<ChevronLeftIcon />}
        fontSize={28}
        variant="outline"
        width="60px"
        height="60px"
        rounded="full"
        borderColor="gray.400"
        color="gray.400"
        onClick={onPrevious}
      />
      { children }
      <IconButton
        aria-label="next artist"
        icon={<ChevronRightIcon />}
        fontSize={28}
        variant="outline"
        width="60px"
        height="60px"
        rounded="full"
        borderColor="gray.400"
        color="gray.400"
        onClick={onNext}
      />
    </Flex>
);

export default SliderNavigation