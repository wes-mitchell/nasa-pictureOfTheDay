export const getInfo = () => {
  return fetch('https://api.nasa.gov/planetary/apod?api_key=2lZtQb2Eypo0OdqW2dPurGEC1db33hXiQoTtMP3R&date=2008-12-22')
  .then(response => response.json())
  .then(nasaInfo => nasaInfo)
}
