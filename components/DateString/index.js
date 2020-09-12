import { parse, format, parseISO } from "date-fns";

const DateString = ({ dateString, full = false, parseType = "iso" }) => {
  const outputFormat = full ? "LLLL d, yyyy" : "LLLL yyyy";
  const date =
    parseType == "iso"
      ? parseISO(dateString)
      : parse(dateString, "dd/MM/yyyy", new Date());
  return <time dateTime={dateString}>{format(date, outputFormat)}</time>;
};

export default DateString;
