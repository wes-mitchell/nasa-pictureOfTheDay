export const getInfo = () => {
  return fetch('https://api.nasa.gov/planetary/apod?api_key=2lZtQb2Eypo0OdqW2dPurGEC1db33hXiQoTtMP3R')
  .then(response => response.json())
  .then(nasaInfo => nasaInfo)
}

export const bDayPic = (bday) => {
  return fetch(`https://api.nasa.gov/planetary/apod?api_key=2lZtQb2Eypo0OdqW2dPurGEC1db33hXiQoTtMP3R&date=${bday}`)
  .then(response => response.json())
  .then(nasaInfo => nasaInfo)
}