var hoursSlept = Number(prompt("How many hours did you sleep last night?"));

if (hoursSlept === 8) {
  console.log(`You slept great!`);
} else if (hoursSlept <= 8) {
  console.log(`You need more sleep!`);
} else {
  console.log(`You sleep too much, dude!`);
}
