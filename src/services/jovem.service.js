import { api } from "./api";

export async function submitJovemForm(payload) {
  const { data } = await api.post("/jovem", payload);
  return data;
}
