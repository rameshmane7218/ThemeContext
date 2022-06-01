function getTime(seconds) {
    const sec = seconds % 60;
    const min = Math.floor(seconds / 60) % 60;
    const hr = Math.floor(seconds / (60 * 60));
  
    return ` ${hr > 9 ? hr : "0" + hr}hr : ${min > 9 ? min : "0" + min}m : ${
      sec > 9 ? sec : "0" + sec
    }s `;
  }
  
  
  export { getTime };