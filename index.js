function sumOfAreas(squareSide, rectSideA, rectSideB, circleRadius, ellipseMajorAxis, ellipseMinorAxis) {
	const sSquare = squareSide ** 2;
	const sRect = rectSideA * rectSideB;
	const sCircle = Math.PI * circleRadius ** 2;
	const sEllipse = ellipseMajorAxis * ellipseMinorAxis * Math.PI;
	return sSquare + sRect + sCircle + sEllipse;
}

module.exports = sumOfAreas;