export const formatDateTime = (dateString: string, timeOnly?: boolean): string => {
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const date = new Date(dateString);
    const localDate = date.toLocaleString(["en"], { timeZone: timeZone, hour12: false });
    const [dateStringFormatted, timeStringFormatted] = localDate.split(', ');
    const [month, day, year] = dateStringFormatted.split('/');
    const [hour, minute] = timeStringFormatted.split(':');
    if (timeOnly) {
        return `${hour.padStart(2, '0')}:${minute.padStart(2, '0')}`;
    } else {
        return `${day.padStart(2, '0')}.${month.padStart(2, '0')}.${year} ${hour.padStart(2, '0')}:${minute.padStart(2, '0')}`;
    }
}
