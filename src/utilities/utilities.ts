  export const formatTime = (time: string): string => {
    let hour: string = time?.split(':')[0];
    let min: string = time?.split(':')[1];
    let hourToNum = parseInt(hour)
    if (hourToNum >= 12) {
      let formattedTime = hourToNum - 12 === 0 ? hourToNum : hourToNum - 12;
      return `${formattedTime}:${min} pm`
    } else {
      return `${hourToNum === 0 ? '12' : hourToNum}:${min} am`
    }
  }