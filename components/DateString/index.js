import { parse, format } from "date-fns";

const DateString = ({ dateString }) => {
  const date = parse(dateString, "dd/MM/yyyy", new Date());
  return <time dateTime={dateString}>{format(date, "LLLL yyyy")}</time>;
};

export default DateString;
