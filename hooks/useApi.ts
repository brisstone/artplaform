import React from 'react'
import { ArtsplitApiResponse } from 'services/API.service'

export default function useApi<T=any> (
    apiCallFn: () => Promise<ArtsplitApiResponse<T>>,
    dependencies: Array<any> = [],
    _default: any = {}
) {
    const [isLoaded, setIsLoaded] = React.useState(false)
    const [ data, setData ] = React.useState<T>(_default as T)

    React.useEffect(() => {
        setIsLoaded(false)
        apiCallFn().then(({ data }) => {
            setData(data ?? _default)
            setIsLoaded(true)
        })
    }, dependencies)

    return {
        isLoaded,
        data
    }
}