export const DataStr = (str) => {
    let parms = str.split(/[\.\-\/]/);
    let yyyy = parseInt(parms[0],10);
    let mm   = parseInt(parms[1],10);
    let dd   = parseInt(parms[2],10);
    const date = [yyyy, mm, dd];
    return date[2] + '/' + date[1] + '/' + date[0];
}