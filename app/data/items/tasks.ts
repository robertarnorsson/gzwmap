import { MarkerType, item } from "~/lib/types";

export const FakeIntel: item = {
  id: "I-ZC1MA1",
  name: "Fake Intel",
  shortName: "Intel",
  description: "Intel containing deceptive information to confuse the enemy and benefit the PMC.",
  size: [1, 1],
  image: "/items/tasks/fake-intel.png",
  types: [MarkerType.ITEM, MarkerType.INTEL]
}