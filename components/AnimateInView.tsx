import * as React from 'react';
import { motion } from 'framer-motion';

type AnimationTypes = 'SlideLeft' | 'SlideRight' |
                      'SlideUp' | 'SlideDown' | 'FadeIn'

const getAnimations = (distance = 240): Record<AnimationTypes, {
    initial: Record<string, any>,
    final: Record<string, any>
}> => ({
    FadeIn: {
        initial: {
            opacity: 0
        },
        final: {
            opacity: 1
        }
    },
    SlideLeft: {
        initial: {
            opacity: 0,
            x: distance
        },
        final: {
            opacity: 1,
            x: 0
        }
    },
    SlideRight: {
        initial: {
            opacity: 0,
            x: -distance
        },
        final: {
            opacity: 1,
            x: 0
        }
    },
    SlideUp: {
        initial: {
            opacity: 0,
            y: distance
        },
        final: {
            opacity: 1,
            y: 0
        }
    },
    SlideDown: {
        initial: {
            opacity: 0,
            y: -distance
        },
        final: {
            opacity: 1,
            y: 0
        }
    }
})

export interface AnimateInViewProps {
    children: React.ReactNode;
    animation?: AnimationTypes;
    distance?: number;
    delay?: number;
}

const AnimateInView: React.FC<AnimateInViewProps> = ({
    animation = 'FadeIn',
    children,
    distance,
    delay = 0.35
}) => {
    const Animations = React.useMemo(() => getAnimations(distance), [distance])

    return (
        <motion.div
            initial={Animations[animation as AnimationTypes].initial}
            whileInView={Animations[animation as AnimationTypes].final}
            viewport={{ once: true }}
            transition={{
                delay
            }}
        >
            { children }
        </motion.div>
    )
}

export default AnimateInView