const uptime = (startTime: Date) => {

    let Today = new Date();
    let date1 = startTime.getTime();
    let date2 = Today.getTime();
    let total = (date2 - date1) / 1000;

    let day = Math.floor(total / (24 * 60 * 60));   
    let afterDay = total - day * 24 * 60 * 60;      
    let hour = Math.floor(afterDay / (60 * 60));    
    let afterHour = total - day * 24 * 60 * 60 - hour * 60 * 60;    
    let min = Math.floor(afterHour / 60);           
    let afterMin = Math.round(total - day * 24 * 60 * 60 - hour * 60 * 60 - min * 60); 
    console.log(`Uptime: ${day} / ${hour} : ${min} : ${afterMin}`);

    if (day >= 1) {
        return day + ' Day(s) ' + hour + 'Hour(s)'/* + min + 'Minute(s)' + afterMin*/;
    }
    else {
        return /*day + ' Days' +*/ hour + 'Hour(s) ' + min + 'Minute(s)' /*+ afterMin + 'Second(s)'*/;
    }
};

export { uptime };