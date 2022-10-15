/**
 * essa função transforma minutos para horas em formato string
 * ex.: 1100 -> "18:20"
 * 
 * @param minutesToHoursString
 * @returns 
 */

 export function convertMinutesToHoursString(minutesAmount: number){
   const hours = Math.floor(minutesAmount / 60)
   const minutes = minutesAmount % 60
  // 1880/60 -> 18%60 -> 20


  return (
    `${hours}:${minutes}`
  )
}