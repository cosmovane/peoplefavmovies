// Adds possessive "'s" or "''" based on the name
export function addPossessive(name: string) {
  if (name[name.length - 1].toLowerCase() === "s") {
    return `${name}'`;
  } else {
    return `${name}'s`;
  }
}
