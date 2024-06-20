export const ucFirst = (string) =>  {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export const prettyDate = (date) => {
    return new Date(date).toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });
}