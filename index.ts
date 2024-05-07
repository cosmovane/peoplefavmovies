/*
Vanessa Nunez - Full Stack Engineer
Date: May 6th, 2024
Purpose of the script: Show active people's information sorted by name
*/

import { peopleInfo } from "./data/peopleInfo";
import { Status } from "./types/types";
import { sortInfo } from "./utils/sorting";
import { addPossessive } from "./utils/string";

// Add the date the script was ran (Today's date) to each object in peopleInfo
const today = new Date();

peopleInfo.forEach((person) => {
  // Add the current date to each object
  person.lastExecution = today;
});

// Log name, date and favorite movie of only active records
const activeRecords = peopleInfo.filter(
  (person) => person.status === Status.ACTIVE,
);
if (activeRecords.length > 0) {
  const sortedActiveRecords = sortInfo(activeRecords, "name");
  sortedActiveRecords.forEach((person) => {
    console.log(
      `${addPossessive(person.name)} current favorite movie is ${person.favoriteMovie}, updated on ${person.lastExecution?.toDateString()}.`,
    );
  });
} else {
  console.log("No active records found.");
}
