const isWeekend = day => {
    //
    return day % 7 === 0 || day % 7 === 6
  }

const getDayName = day => {
    //Date.now
  const date = new Date(2018, 0, day);

  const options = {weekday: "long" };

  return new Intl.DateTimeFormat("en-US", options)
  .format(date);
}

  export{isWeekend, getDayName}