import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId } from "../env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token:
    "sk3JjrzuwSfi70g4bxiJGjRhXYYN4OAHWSHCsNm1Mv6VwdXkbiQ6xrw8Lftjs1r0ct8zPQ2JxYkg80UXPCNv6Uz7VSsyYLPXmkNC5wleF58iqvXep2oRRyNZGUj9iJmPnLZ1HCWVjE8egqvjTlGxIqYveWJVZTvbm0sDZr6brkzNmubx1TbC",
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
});
