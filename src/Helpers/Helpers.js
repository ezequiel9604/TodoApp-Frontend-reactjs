
export const Categories = [
    "Family","Health","Home","Work",
];

export const Frequencies = [
    "Daily","Weekly","Monthly",
];

export const WeekDays = [
    "Sun","Mon","Tue","Wed","Thu","Fri","Sat"
];

export const YearMonths = [
    "Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"
];

export const Days = [
    0, 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,
    18,19,20,21,22,23,24,25,26,27,28,29,30
];

export function getRenderedDate(weekdays, yearmonths, frequency, date, handleDay, handleMonth){

    let result;
    if(frequency === "Weekly"){
        weekdays.forEach((current, index)=>{
            if(index === date.getDay()){
                result= (<select value={current} onChange={handleDay}> 
                            {weekdays.map((curr, ind)=>{
                            return <option value={ind} key={curr}>{curr}</option>;
                        })} </select>);
            }
        });
    }

    if(frequency === "Monthly"){
        yearmonths.forEach((current, index)=>{
            if(index === date.getMonth()){
                result= (<select value={current} onChange={handleMonth}> 
                            {yearmonths.map((curr, ind)=>{
                            return <option value={curr} key={curr}>{curr}</option>;
                        })} </select>);
            }
        });
    }

    return result;
}

export function getRenderedTime(alldays, frequency, date, handleTime, handleDate){

    let result;
    const dateString = date.toLocaleTimeString();
    if(frequency === "Daily" || frequency === "Weekly"){
        result= (<input type="time" onChange={handleTime}
                    defaultValue={date.getHours()<10? "0"+dateString:dateString} />);

    }
    
    if(frequency === "Monthly"){
        alldays.forEach((current, index)=>{
            if(date.getDate() === index){
                result= (<select value={current} onChange={handleDate}> 
                    {alldays.map((current)=>{
                    return <option value={current} key={current}>{current}</option>;
                })} </select>);
            }
        });
    }
    return result;
}

export function createDateWithStringTime(time, year, month, day){
    let hours = "";
    let minutes = "";
    for (let i = 0; i < time.length; i++) {
        if(time[i] === ":"){
            hours = parseInt(time[i-2]+time[i-1]);
            minutes = parseInt(time[i+1]+time[i+2]);
        }
    }

    return new Date(year, month, day, hours, minutes);
}

export function getRenderedSampleTime(weekdays, yearmonths, frequency, year, month, day, hour, minute){
    let result;
    const date = new Date(year, month, day);
    
    if(frequency === "Daily"){
        result= (<time>{getHour(year, month, day, hour, minute)}</time>);
    }
    else if(frequency === "Weekly"){
        weekdays.forEach((current, index)=>{
            if(index === (date.getDay()))
                result= (<time>{getHour(year, month, day, hour, minute)} <br /> 
                    &nbsp;&nbsp;&nbsp; {current}</time>);
            
        });
    }
    else if(frequency === "Monthly"){
        yearmonths.forEach((current, index)=>{
            if(index === (month))
                result= (<time>{`${date.getDate()} ${current}`}<br /> {year}</time>);
            
        });
    }
    return result;
}


function getHour(year, month, day, hour, minute){
        
    const date = new Date(year, month, day, hour, minute);
    if(date >= 12)
        return `${(date.getHours()<10)? '0'+date.getHours():date.getHours()}:${(date.getMinutes()<10)? 
            '0'+date.getMinutes():date.getMinutes()} pm`;
    else
        return `${(date.getHours()<10)? '0'+date.getHours():date.getHours()}:${(date.getMinutes()<10)? 
            '0'+date.getMinutes():date.getMinutes()} am`;
}
