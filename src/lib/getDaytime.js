import { format } from "date-fns";

export default function getDaytime() {
  let currentHour = format(new Date(), "H");

  if (currentHour >= 0 && currentHour < 12) {
    return "manha";
  } else if (currentHour >= 12 && currentHour <= 18) {
    return "tarde";
  } else if (currentHour > 18 && currentHour <= 23) {
    return "noite";
  }
}
