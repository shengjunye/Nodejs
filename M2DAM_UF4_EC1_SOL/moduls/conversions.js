exports.conversioBytesGigabytes = (memoria) => {
    return Math.round(memoria / 1073741824);
}

exports.conversioBytesMegabytes = (memoria) => {
    let megabytes = memoria * 9.5367431640625^10-7;
    return megabytes;
}