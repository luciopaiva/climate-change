
class MathUtil {

    static wattHourToKcal(wattHour) {
        return wattHour * 0.85984522785899;
    }

    static floatToStr(value, precision = 1) {
        return value.toFixed(precision);
    }

    static percToStr(value, precision = 1) {
        return (value * 100).toFixed(precision);
    }
}
