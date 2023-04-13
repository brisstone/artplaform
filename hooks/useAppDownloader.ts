import React from 'react'
import { MixpanelTracking } from 'services/Mixpanel'

const APP_DEEPLINK_BASE_URL = 'https://link.artsplit.com'
const PLAYSTORE_URL = 'https://play.google.com/store/apps/details?id=com.artsplit.app&hl=en&gl=NG'
const APPSTORE_URL = 'https://apps.apple.com/ng/app/artsplit/id1591490402'

export default function useAppDownloader () {
    const download = () => {
        MixpanelTracking.getInstance().track("download", {
            userAgent: navigator.userAgent
        })
        if (navigator.userAgent.includes('iPhone')) {
            window.open(APPSTORE_URL)
        } else if (navigator.userAgent.includes('Android')) {
            window.open(PLAYSTORE_URL)
        } else {
            window.open(APPSTORE_URL)
            window.open(PLAYSTORE_URL)
        }
    }

    const getDownloadLinkByDevice = React.useCallback(() => {
        if (navigator.userAgent.includes('iPhone')) return APPSTORE_URL
        return PLAYSTORE_URL
    }, [])

    const openApp = React.useCallback((screen='42AL') => {
        if (
            navigator.userAgent.includes('iPhone')
            || navigator.userAgent.includes('Android')
        ) {
            window.open(`${APP_DEEPLINK_BASE_URL}/${screen}`)
        } else {
            window.open(APPSTORE_URL)
            window.open(PLAYSTORE_URL)
        }
    }, [])

    return {
        PLAYSTORE_URL,
        APPSTORE_URL,
        download,
        getDownloadLinkByDevice,
        openApp
    }
}