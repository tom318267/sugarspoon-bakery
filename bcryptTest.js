const bcrypt = require("bcryptjs");

const plaintextPassword = "TestPassword123";

bcrypt.hash(plaintextPassword, 12, function (err, hashedPassword) {
  if (err) {
    console.error(err);
    return;
  }

  console.log("Generated Hash:", hashedPassword);

  bcrypt.compare(plaintextPassword, hashedPassword, function (err, result) {
    if (err) {
      console.error(err);
    } else {
      console.log("Password match:", result); // Should be true
    }
  });
});
