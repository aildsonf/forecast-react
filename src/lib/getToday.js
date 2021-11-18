import format from "date-fns/format";

export default function getToday() {
  return format(new Date(), "dd/MM/yyyy");
}
