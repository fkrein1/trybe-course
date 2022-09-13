var DaysOfWeek;
(function (DaysOfWeek) {
    DaysOfWeek[DaysOfWeek["SUNDAY"] = 1] = "SUNDAY";
    DaysOfWeek[DaysOfWeek["MONDAY"] = 2] = "MONDAY";
    DaysOfWeek[DaysOfWeek["TUESDAY"] = 3] = "TUESDAY";
    DaysOfWeek[DaysOfWeek["WEDNESDAY"] = 4] = "WEDNESDAY";
    DaysOfWeek[DaysOfWeek["THURSDAY"] = 5] = "THURSDAY";
    DaysOfWeek[DaysOfWeek["FRIDAY"] = 6] = "FRIDAY";
    DaysOfWeek[DaysOfWeek["SATURDAY"] = 7] = "SATURDAY";
})(DaysOfWeek || (DaysOfWeek = {}));
console.log(DaysOfWeek[1]);
console.log(DaysOfWeek['SUNDAY']);
var RainbowColors;
(function (RainbowColors) {
    RainbowColors["RED"] = "VERMELHO";
    RainbowColors["ORANGE"] = "LARANJA";
    RainbowColors["YELLOW"] = "AMARELO";
    RainbowColors["GREEN"] = "VERDE";
    RainbowColors["BLUE"] = "AZUL";
    RainbowColors["INDIGO"] = "INDIGO";
    RainbowColors["VIOLET"] = "VIOLETA";
})(RainbowColors || (RainbowColors = {}));
console.log(RainbowColors['RED']);
console.log(RainbowColors.RED);
