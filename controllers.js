export function bombBoxes() {
  console.log("I am here");
  return Array.from({ length: 10 }, () => Math.floor(Math.random() * 10));
}
