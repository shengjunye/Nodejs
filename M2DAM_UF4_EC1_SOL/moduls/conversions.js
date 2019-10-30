exports.bytesToGB = (bytes) => {
	return Math.round(bytes / 1073741824);
}

exports.bytesToMB = function (bytes) {
	return Math.round(bytes / 1048576);
}

