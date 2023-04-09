import { DateRangeExtensionProperties } from "./date-range";

export type PersonalDateRangeExtensionProperties =
  DateRangeExtensionProperties & {
    personID: string;
  };
