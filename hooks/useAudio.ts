import * as React from 'react';


export default function useAudio (src: string) {
    const audio = React.useRef<HTMLAudioElement>()

    React.useEffect(() => {
        audio.current = new Audio(src)
    }, [])

    return audio.current
}