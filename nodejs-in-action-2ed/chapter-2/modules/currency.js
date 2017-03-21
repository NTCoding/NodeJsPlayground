const canadianDollar = 0.91;

function roundToTwoDecimals(amount) {
	return Math.round(amount * 100) / 100;
}

exports.canadianToUS = (canadian) => {
	return roundToTwoDecimals(canadian * canadianDollar);
}

exports.USToCanadian = (us) => {
	return roundToTwoDecimals(us / canadianDollar);
}