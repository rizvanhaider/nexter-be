import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type SubscriberWhereInput = {
  email?: StringFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
