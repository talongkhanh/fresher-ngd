/**
 * Hàm định dạng lại ngày
 * @param {*} d ngày cần định dạng lại
 * @returns ngày đã được định dạng
 * CreatedBy: TLKhanh(08/03/2021)
 */

module.exports.formatDate = (d) => {
    if (!d) return null
    const date = new Date(d)
    const dd = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()
    const mm = date.getMonth() + 1 < 10 ? `0${date.getMonth() +1 }` : date.getMonth() + 1
    const yyyy = date.getFullYear()
    return `${dd}/${mm}/${yyyy}`
}