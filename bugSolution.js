function myFunc() {
  for (let i = 0; i < 10; i++) {
    console.log(i);
    if (i === 5) {
      // Perform the task at i === 5, without breaking the loop
      console.log("Reached 5!");
    }
  }
}
