import bcrypt from "bcrypt";
import colors from "colors";

export const hashPassword = async (password) => {
  try {
    const saltRounds = 10; //Number of CPU cycles for hashing.
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  } catch (error) {
    console.log(error.bgRed.white);
  }
};

export const comparePassword = async (password, hashedPassword) => {
  return bcrypt.compare(password, hashedPassword);
};
