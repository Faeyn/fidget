export const timeInterval = 100

export const secondOverTime = (timeInterval / 1000)

function addLeadingZero(number: number) {
    return number < 10 ? `0${number}` : `${number}`;
  }

export function getTimeString(time: number): string {
    const minutes = addLeadingZero(Math.floor(time * secondOverTime / 60));
    const seconds = addLeadingZero(+((time * secondOverTime % 60)).toFixed(0));
    return  `${minutes}:${seconds}`
}

