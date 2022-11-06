function sumOfAreas(squareSide, rectSideA, rectSideB, circleRadius, ellipseMajorAxis, ellipseMinorAxis) {
	return squareSide ** 2 + rectSideA * rectSideB + Math.PI * circleRadius ** 2 + ellipseMajorAxis * ellipseMinorAxis * Math.PI;
}

module.exports = sumOfAreas;