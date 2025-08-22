import { Tables } from "@/supabase/types";


export type Cabin = Pick<Tables<"cabins">, "id" | "name" | "regular_price" | "image" | "max_capacity"|"discount">;
