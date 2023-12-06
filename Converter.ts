enum NumerationType {
    RomanNumerals = 1,
    NumbersAbbreviations = 2,
    Binary = 3,
    TimeInMilliseconds = 4,
    TimeInSeconds = 5
}
enum Temperature {
    Fahrenheit = 0,
    Celsius = 1,
    Kelvin = 2
}
enum WeightUnit {
    Kilograms = 0,
    Grams = 1,
    Milligrams = 2,
    MetricTons = 3,
    Pounds = 4,
    Ounces = 5,
    Carats = 6,
    Stones = 7,
    ShortTons = 8,
    LongTons = 9,
    TroyPounds = 10,
    TroyOunces = 11,
    Grains = 12
}
enum LengthUnit {
    Meters = 0,
    Kilometers = 1,
    Centimeters = 2,
    Millimeters = 3,
    Inches = 4,
    Feet = 5,
    Yards = 6,
    Miles = 7
}
function findBiggestSubtraction(Num: number) {
    let maxSubtraction = 0 - Infinity;
    for (let i = 0; i < NumList.length; i++)
        if (Num - NumList[i] + 1 > 0)
            maxSubtraction = NumList[i];
    return maxSubtraction;
}
function convertToTime(input: number): string {
    // Calculate the time values in seconds, minutes, hours, days, and years
    let seconds = Math.floor(input / 1000) % 60;
    let minutes = Math.floor(input / (1000 * 60)) % 60;
    let hours = Math.floor(input / (1000 * 60 * 60)) % 24;
    let days = Math.floor(input / (1000 * 60 * 60 * 24)) % 365;
    let years = Math.floor(input / (1000 * 60 * 60 * 24 * 365));

    // Create the formatted time string
    let timeString = '';
    if (years > 0) {
        timeString += years.toString() + 'y:';
    }
    if (days > 0) {
        timeString += days.toString() + 'd:';
    }
    if (hours > 0) {
        timeString += hours.toString() + 'h:';
    }
    if (minutes > 0) {
        timeString += minutes.toString() + 'm:';
    }
    timeString += seconds.toString() + 's';

    return timeString;
}

function numberToBinary(num: number): string {
    let binary = "";
    while (num > 0) {
        binary = (num % 2) + binary;
        num = Math.floor(num / 2);
    }
    return binary;
}

function ConvertToNumeral(Number2: number) {
    let String2 = "";
    while (Number2 != 0) {
        const Sub = findBiggestSubtraction(Number2);
        String2 += NumeralsList[NumList.indexOf(Sub)];
        Number2 -= Sub;
    }
    return String2;
}
function roundToDecimal(num: number, decimalPlaces: number) {
    let factor = 10 ** decimalPlaces
    return Math.round(num * factor) / factor
} 
function abbreviateNumber(value: number, Decimals: number) {
    if (value >= 1000) {
    let numlist = [
        ["K", "1000"],
        ["M", "1000000"],
        ["B", "1000000000"],
        ["T", "1000000000000"],
        ["Qa", "1000000000000000"],
        ["Qi", "1000000000000000000"],
        ["Sx", "1e+21"],
        ["Sp", "1e+24"],
        ["Oc", "1e+27"],
        ["No", "1e+30"],
        ["Dc", "1e+33"],
        ["Ud", "1e+36"],
        ["Dd", "1e+39"],
        ["Td", "1e+42]"],
        ["Qad", "1e+45"],
        ["Qid", "1e+48"],
        ["Sxd", "1e+51"],
        ["Spd", "1e+54"],
        ["Ocd", "1e+57"],
        ["Nod", "1e+60"],
        ["Vg", "1e+63"]
    ]
    let Position = Math.floor((convertToText(value).length - 1) / 3) - 1
    let abbr = "" + convertToText(roundToDecimal(value / parseFloat(numlist[Position][1]), Decimals)) + numlist[Position][0]
    return abbr
    } else {
        return value
    }
}

const NumList = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000, 4000, 5000, 9000, 10000, 40000, 50000, 90000, 100000, 400000, 500000, 900000, 1000000, 4000000, 5000000, 9000000, 10000000, 40000000, 50000000, 90000000, 1000000000, 4000000000, 5000000000, 9000000000, 10000000000];
const NumeralsList = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M", "MV̅", "V̅", "MX̅", "X̅", "X̅L̅", "L̅", "X̅C̅", "C̅", "C̅D̅", "D̅", "C̅M̅", "M̅", "M̅V̿", "V̿", "M̅X̅̅", "X̅̅", "X̅̅L̅̅", "L̅̅", "X̅̅C̅̅", "C̅̅", "C̅̅V̿̅", "V̿̅", "C̅̅X̿̅", "X̿̅"];
//% color="#3AE510"
namespace coverter {

    //% block="convert $Value to $Type"
    export function ConvertNumber(Value: number, Type: NumerationType) {
        if (Type == 1) {
            return ConvertToNumeral(Value)
        } else if (Type == 2) {
            return abbreviateNumber(Value,1)
        } else if (Type == 3) {
            return numberToBinary(Value)
        } else if (Type == 4) {
            return convertToTime(Value)
        } else {
            return convertToTime(Value * 1000)
        }
    }

    //% block="Convert $value $fromUnit to $toUnit"
    export function convertTemperature(value: number, fromUnit: Temperature, toUnit: Temperature): number {
        if (fromUnit === toUnit) {
            return value; // No conversion needed if the units are the same
        }

        // Convert from the source unit to Celsius
        let celsiusValue = 0;
        if (fromUnit === Temperature.Fahrenheit) {
            celsiusValue = (value - 32) * (5 / 9);
        } else if (fromUnit === Temperature.Kelvin) {
            celsiusValue = value - 273.15;
        } else {
            celsiusValue = value; // Already in Celsius
        }

        // Convert from Celsius to the target unit
        let result = 0;
        if (toUnit === Temperature.Fahrenheit) {
            result = (celsiusValue * 9 / 5) + 32;
        } else if (toUnit === Temperature.Kelvin) {
            result = celsiusValue + 273.15;
        } else {
            result = celsiusValue; // Already in the target unit
        }

        return result;
    }

    //% block="Convert $value $fromUnit to $toUnit"
    export function convertWeight(value: number, fromUnit: WeightUnit, toUnit: WeightUnit): number {
        if (fromUnit === toUnit) {
            return value; // No conversion needed if the units are the same
        }

        // Define conversion factors for each unit
        let conversionFactors: number[] = [
            1, // Kilograms
            0.001, // Grams
            0.000001, // Milligrams
            1000, // Metric Tons
            0.453592, // Pounds
            0.0283495, // Ounces
            0.2, // Carats
            6.35029, // Stones
            907.185, // Short Tons
            1016.05, // Long Tons
            0.373242, // Troy Pounds
            0.0311035, // Troy Ounces
            0.0647989 // Grains
        ];

        // Convert the input value to grams
        let gramsValue = value * conversionFactors[fromUnit];

        // Convert from grams to the target unit
        let result = gramsValue / conversionFactors[toUnit];

        return result;
    }
    //% block="Convert $value $fromUnit to $toUnit"
    export function convertLength(value: number, fromUnit: LengthUnit, toUnit: LengthUnit): number {
        if (fromUnit === toUnit) {
            return value; // No conversion needed if the units are the same
        }

        // Define conversion factors for each unit
        let conversionFactors: number[] = [
            1, // Meters
            1000, // Kilometers
            0.01, // Centimeters
            0.001, // Millimeters
            0.0254, // Inches
            0.3048, // Feet
            0.9144, // Yards
            1609.34 // Miles
        ];

        // Convert the input value to meters
        let metersValue = value * conversionFactors[fromUnit];

        // Convert from meters to the target unit
        let result = metersValue / conversionFactors[toUnit];

        return result;
    }


}