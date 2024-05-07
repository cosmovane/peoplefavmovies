import { Info } from "../types/types";

// Function to sort information by a given property
// It returns -1 if the property is undefined
export function sortInfo(info: Info[], property: keyof Info) {
    return info.sort((a, b) => {
        const propA = a[property];
        const propB = b[property];

        if (propA && propB) {
            // Compare the values of the specified property
            if (propA < propB) return -1;
            if (propA > propB) return 1;
            return 0;
        } else {
            return -1;
        }
    });
}
