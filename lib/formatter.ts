export const formatNumber = (value: number) => {
    return value.toLocaleString('en-GB', {
        style: 'decimal',
        maximumFractionDigits: 0
    })
}