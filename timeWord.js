const timeWord = time => {
    const [hour, min] = time.split(":");
    hour = parseInt(hour);
    min = parseInt(hour);
    const result = [];
    const WORD = {
        single: {
            0: "",
            1: "one",
            2: "two",
            3: "three",
            4: "four",
            5: "five",
            6: "six",
            7: "seven",
            8: "eight",
            9: "nine",
            10: "ten",
            11: "eleven",
            12: "twelve",
            13: "thirteen",
            14: "fourteen",
            15: "fifteen",
            16: "sixteen",
            17: "seventeen",
            18: 'eightteen',
            19: "nineteen"
        }, 
        multiple: {
            2: "twenty",
            3: "thirty",
            4: 'fourty',
            5: "fifty"
        }
    }

    if(hour === 0 && min === 0){
        return "midnight";
    } else if(hour === 12 && min === 0){
        return "noon";
    } else if(hour === 0){
        result.push("twelve");
    } else if(hour <= 12){
        result.push(WORD.single[hour])
    } else if (hour > 12 && hour < 25) {
        let newHour = hour - 12;
        result.push(WORD.single[newHour])
    } else {
        return "Enter a valid time";
    }

    if(min === 0 ){
        result.push("o’clock");
    } else if(min < 10){
        result.push("oh"+ " " +WORD.single[min]);
    } else if(min >= 10 && min <= 19){
        result.push(WORD.single[min]);
    } else if(min > 19 && min <60){
        let newMin = min.toString().split("")
        if(newMin[1] == 0){
            result.push(WORD.multiple[newMin[0]]);
        } else{

            result.push(WORD.multiple[newMin[0]]+" "+WORD.single[newMin[1]]);
        }
    } else{
        return "Enter a valid time";
    }

    hour >= 12 ? result.push("pm") : result.push("am");

return result.join(" ")
}

module.exports = timeWord