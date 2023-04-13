import * as React from 'react';
import { Fireworks as ReactFireworks } from '@fireworks-js/react'
import type { FireworksHandlers } from '@fireworks-js/react'

const Fireworks: React.FC<{ active?: boolean }> = ({ active }) => {
    const ref = React.useRef<FireworksHandlers>(null)

    React.useEffect(() => {
        ref.current?.[active ? 'start' : 'stop']()
    }, [active])

    return (
        <ReactFireworks
            ref={ref}
            options={{
                opacity: 0.5,
                sound: {
                    enabled: true
                }
            }}
            style={{
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                position: 'fixed',
                zIndex: 1111111111
            }}
        />
    )
}

export default Fireworks