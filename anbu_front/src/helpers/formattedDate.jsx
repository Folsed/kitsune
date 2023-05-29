import { format } from 'date-fns'
import { uk } from 'date-fns/locale'

export const formattedDate = (date) => {
    const formattedDate = format(new Date(date), 'd MMMM yyyy', { locale: uk })
    const capitalizedMonth = formattedDate.replace(/(^|\s)(\p{Ll})/gu, change => change.toUpperCase())

    return capitalizedMonth
}
