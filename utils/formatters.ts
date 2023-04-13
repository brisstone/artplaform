import dayjs from "dayjs"
import RelativeTime from "dayjs/plugin/relativeTime"
dayjs.extend(RelativeTime)

const MONTHS = [
    'January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December',
]

export const formatDate = (date: string, yearOnly = false) => {
    const dt = new Date(date)
    return yearOnly
           ? dt.getFullYear()
           : `${MONTHS[dt.getMonth()]} ${dt.getDate()}, ${dt.getFullYear()}`
}

export const getRelativeTime = (date: string) => {
    return dayjs().to(dayjs(date))
}

export const formatNumber = (num: number) => (
    new Intl.NumberFormat("en-US").format(num)
)

export const formatPrice = (price: number, currency = 'USD') => (
    new Intl.NumberFormat("en-US", {
        style: "currency",
        currency,
    }).format(price)
)

export const slugify = (text: string) => {
    return `${text}`.toLowerCase().replace(/[\s\W]+/g, '-')
}

export const maskName = (firstName: string, lastName: string) => {
    return `${firstName[0]?.[0]}***** ${lastName[0]?.[0] ?? lastName[0]}`
}