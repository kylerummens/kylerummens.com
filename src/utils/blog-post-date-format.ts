export const blogPostDateFormat = (date: string) => {
    if (!date || isNaN(Date.parse(date))) return '';
    const d = new Date(date);

    const day = d.getDate().toString().padStart(2, '0');
    const month = (d.getMonth() + 1).toString().padStart(2, '0');
    const year = d.getFullYear();

    return month + '.' + day + '.' + year;
}