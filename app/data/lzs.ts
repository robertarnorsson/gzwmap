import { MarkerType, lz } from "~/lib/types";
import { LamangRecoveryInitiative, MithrasSecuritySystems, CrimsonShieldInternational } from "./factions";
import { BanPa, BlueLagoon, FortNarith, HuntersParadise, KiuVongsa, MidnightSapphire, NamThaven, PhaLang, PhaLangAirfield, Sawmill, TigerBay, YBL1 } from "./locations";

export const ALPHA1: lz = {
  id: "LZ-90C53M",
  name: "ALPHA 1",
  position: [23270.286021054624,20831.08761001807],
  discoverable: false,
  types: [MarkerType.LZ, MarkerType.LRI, MarkerType.PHALANG],
  location: PhaLang,
  faction: LamangRecoveryInitiative
};

export const ALPHA2: lz = {
  id: "LZ-MFCZYK",
  name: "ALPHA 2",
  position: [21313.972388869504,21263.689082468252],
  discoverable: false,
  types: [MarkerType.LZ, MarkerType.LRI, MarkerType.PHALANG],
  location: PhaLang,
  faction: LamangRecoveryInitiative
};

export const ALPHA3: lz = {
  id: "LZ-9KC7CX",
  name: "ALPHA 3",
  position: [21612.34636213281,20033.121282091568],
  discoverable: true,
  types: [MarkerType.LZ, MarkerType.LRI, MarkerType.PHALANG],
  location: PhaLang,
  faction: LamangRecoveryInitiative
};

export const BRAVO1: lz = {
  id: "LZ-ZMVI2R",
  name: "BRAVO 1",
  position: [15686.038078410764, 11837.731415924447],
  discoverable: false,
  types: [MarkerType.LZ, MarkerType.MSS, MarkerType.NAMTHAVEN],
  location: NamThaven,
  faction: MithrasSecuritySystems
};

export const BRAVO2: lz = {
  id: "LZ-V6X68C",
  name: "BRAVO 2",
  position: [17454.18325621555, 12793.892647895247],
  discoverable: false,
  types: [MarkerType.LZ, MarkerType.MSS, MarkerType.NAMTHAVEN],
  location: NamThaven,
  faction: MithrasSecuritySystems
};

export const BRAVO3: lz = {
  id: "LZ-B8NQ44",
  name: "BRAVO 3",
  position: [16432.648140861824, 13554.11821036863],
  discoverable: true,
  types: [MarkerType.LZ, MarkerType.MSS, MarkerType.NAMTHAVEN],
  location: NamThaven,
  faction: MithrasSecuritySystems
};

export const CHARLIE1: lz = {
  id: "LZ-LMRA9V",
  name: "CHARLIE 1",
  position: [10971.562365050118, 21884.845857546272],
  discoverable: false,
  types: [MarkerType.LZ, MarkerType.CSI, MarkerType.KIUVONGSA],
  location: KiuVongsa,
  faction: CrimsonShieldInternational
};

export const CHARLIE2: lz = {
  id: "LZ-TH16ZT",
  name: "CHARLIE 2",
  position: [10228.210238646843, 20002.904019857553],
  discoverable: false,
  types: [MarkerType.LZ, MarkerType.CSI, MarkerType.KIUVONGSA],
  location: KiuVongsa,
  faction: CrimsonShieldInternational
};

export const CHARLIE3: lz = {
  id: "LZ-F63FPL",
  name: "CHARLIE 3",
  position: [11480.602558904846, 20070.46464488615],
  discoverable: true,
  types: [MarkerType.LZ, MarkerType.CSI, MarkerType.KIUVONGSA],
  location: KiuVongsa,
  faction: CrimsonShieldInternational
};

export const FOXTROT1: lz = {
  id: "LZ-FAAIOP",
  name: "FOXTROT 1",
  position: [14902.045283641288,22064.538811683913],
  discoverable: false,
  types: [MarkerType.LZ, MarkerType.HUNTERSPARADISE],
  location: HuntersParadise,
};

export const FOXTROT2: lz = {
  id: "LZ-540X6V",
  name: "FOXTROT 2",
  position: [13791.906718522056,21927.03530999337],
  discoverable: true,
  types: [MarkerType.LZ, MarkerType.HUNTERSPARADISE],
  location: HuntersParadise,
};

export const FOXTROT3: lz = {
  id: "LZ-VL42YA",
  name: "FOXTROT 3",
  position: [13870.829500613861, 20642.248046024877],
  discoverable: true,
  types: [MarkerType.LZ, MarkerType.HUNTERSPARADISE],
  location: HuntersParadise,
};

export const INDIA1: lz = {
  id: "LZ-UYB9DS",
  name: "INDIA 1",
  position: [23287.97850184789,16349.985310665721],
  discoverable: false,
  types: [MarkerType.LZ, MarkerType.BANPA],
  location: BanPa,
};

export const INDIA2: lz = {
  id: "LZ-D9JZHZ",
  name: "INDIA 2",
  position: [22529.838916313038,15800.615167153941],
  discoverable: true,
  types: [MarkerType.LZ, MarkerType.BANPA],
  location: BanPa,
};

export const INDIA3: lz = {
  id: "LZ-9U3A16",
  name: "INDIA 3",
  position: [21798.863034746497, 16813.980815632818],
  discoverable: true,
  types: [MarkerType.LZ, MarkerType.BANPA],
  location: BanPa,
};

export const LIMA1: lz = {
  id: "LZ-8TD3YI",
  name: "LIMA 1",
  position: [10909.912078540192,13509.568465485141],
  discoverable: true,
  types: [MarkerType.LZ, MarkerType.YBL1],
  location: YBL1,
};

export const LIMA2: lz = {
  id: "LZ-JZ4SX2",
  name: "LIMA 2",
  position: [11333.923259713902,12769.041895547958],
  discoverable: false,
  types: [MarkerType.LZ, MarkerType.YBL1],
  location: YBL1,
};

export const LIMA3: lz = {
  id: "LZ-P2Q8RV",
  name: "LIMA 3",
  position: [12076.15934793099, 13995.011202306481],
  discoverable: false,
  types: [MarkerType.LZ, MarkerType.YBL1],
  location: YBL1,
};

export const ECHO1: lz = {
  id: "LZ-CKW0BK",
  name: "ECHO 1",
  position: [9915.064408436621,17783.13562439619],
  discoverable: true,
  types: [MarkerType.LZ, MarkerType.SAWMILL],
  location: Sawmill,
};

export const ECHO2: lz = {
  id: "LZ-FSJGLU",
  name: "ECHO 2",
  position: [10340.70736014786,16943.07204126685],
  discoverable: false,
  types: [MarkerType.LZ, MarkerType.SAWMILL],
  location: Sawmill,
};

export const ECHO3: lz = {
  id: "LZ-8OL89S",
  name: "ECHO 3",
  position: [10978.185550721006, 17419.249176044093],
  discoverable: false,
  types: [MarkerType.LZ, MarkerType.SAWMILL],
  location: Sawmill,
};

export const KILO1: lz = {
  id: "LZ-PYL7A1",
  name: "KILO 1",
  position: [22341.787128684362,12398.897199174731],
  discoverable: true,
  types: [MarkerType.LZ, MarkerType.BLUELAGOON],
  location: BlueLagoon,
};

export const KILO2: lz = {
  id: "LZ-PYGB22",
  name: "KILO 2",
  position: [23070.972291004495,12308.131493655163],
  discoverable: true,
  types: [MarkerType.LZ, MarkerType.BLUELAGOON],
  location: BlueLagoon,
};

export const KILO3: lz = {
  id: "LZ-RGO7Q7",
  name: "KILO 3",
  position: [23062.693711837863, 13205.558185429007],
  discoverable: true,
  types: [MarkerType.LZ, MarkerType.BLUELAGOON],
  location: BlueLagoon,
};

export const JULIET1: lz = {
  id: "LZ-XKFA9Z",
  name: "JULIET 1",
  position: [21388.824282878133,15769.441888599353],
  discoverable: true,
  types: [MarkerType.LZ, MarkerType.TIGERBAY],
  location: TigerBay,
};

export const JULIET2: lz = {
  id: "LZ-GBFIA4",
  name: "JULIET 2",
  position: [20945.209997484264,13986.83238920378],
  discoverable: true,
  types: [MarkerType.LZ, MarkerType.TIGERBAY],
  location: TigerBay,
};

export const JULIET3: lz = {
  id: "LZ-J1365Q",
  name: "JULIET 3",
  position: [22195.25300435851,13640.402185786621],
  discoverable: true,
  types: [MarkerType.LZ, MarkerType.TIGERBAY],
  location: TigerBay,
};

export const JULIET4: lz = {
  id: "LZ-9QX7NX",
  name: "JULIET 4",
  position: [20018.659402665227, 14870.979318768048],
  discoverable: true,
  types: [MarkerType.LZ, MarkerType.TIGERBAY],
  location: TigerBay,
};

export const DELTA1: lz = {
  id: "LZ-MDB4RO",
  name: "DELTA 1",
  position: [13070.35783252685, 15074.9596685017],
  discoverable: true,
  types: [MarkerType.LZ, MarkerType.FORTNARITH],
  location: FortNarith,
};

export const DELTA2: lz = {
  id: "LZ-X7NSNV",
  name: "DELTA 2",
  position: [11449.533934716892,15689.2994753938],
  discoverable: true,
  types: [MarkerType.LZ, MarkerType.FORTNARITH],
  location: FortNarith,
};

export const DELTA3: lz = {
  id: "LZ-LQXO3O",
  name: "DELTA 3",
  position: [10056.136766239302,14830.683785385934],
  discoverable: true,
  types: [MarkerType.LZ, MarkerType.FORTNARITH],
  location: FortNarith,
};

export const DELTA4: lz = {
  id: "LZ-CY5PSD",
  name: "DELTA 4",
  position: [8921.522208799672, 15786.740383854158],
  discoverable: true,
  types: [MarkerType.LZ, MarkerType.FORTNARITH],
  location: FortNarith,
};

export const HOTEL1: lz = {
  id: "LZ-8ZHPX4",
  name: "HOTEL 1",
  position: [17329.56391838899,21825.108210557086],
  discoverable: false,
  types: [MarkerType.LZ, MarkerType.MIDNIGHTSAPPHIRE],
  location: MidnightSapphire,
};

export const HOTEL2: lz = {
  id: "LZ-3D6SPN",
  name: "HOTEL 2",
  position: [17210.292847033175,20357.691513243117],
  discoverable: true,
  types: [MarkerType.LZ, MarkerType.MIDNIGHTSAPPHIRE],
  location: MidnightSapphire,
};

export const HOTEL3: lz = {
  id: "LZ-HGHE0K",
  name: "HOTEL 3",
  position: [15277.580874311128,20786.173789744047],
  discoverable: true,
  types: [MarkerType.LZ, MarkerType.MIDNIGHTSAPPHIRE],
  location: MidnightSapphire,
};

export const HOTEL4: lz = {
  id: "LZ-DPUJPW",
  name: "HOTEL 4",
  position: [16338.321960287696, 19772.040366207362],
  discoverable: true,
  types: [MarkerType.LZ, MarkerType.MIDNIGHTSAPPHIRE],
  location: MidnightSapphire,
};

export const GOLF1: lz = {
  id: "LZ-JEJT81",
  name: "GOLF 1",
  position: [18318.74433486675,20370.88667329696],
  discoverable: true,
  types: [MarkerType.LZ, MarkerType.PHALANGAIRFIELD],
  location: PhaLangAirfield,
};

export const GOLF2: lz = {
  id: "LZ-81H96H",
  name: "GOLF 2",
  position: [19079.193631948197,19755.691359744593],
  discoverable: true,
  types: [MarkerType.LZ, MarkerType.PHALANGAIRFIELD],
  location: PhaLangAirfield,
};

export const GOLF3: lz = {
  id: "LZ-XFITWI",
  name: "GOLF 3",
  position: [17902.657412599187, 19433.08063280357],
  discoverable: true,
  types: [MarkerType.LZ, MarkerType.PHALANGAIRFIELD],
  location: PhaLangAirfield,
};

export const LZs: lz[] = [
  ALPHA1,
  ALPHA2,
  ALPHA3,
  BRAVO1,
  BRAVO2,
  BRAVO3,
  CHARLIE1,
  CHARLIE2,
  CHARLIE3,
  FOXTROT1,
  FOXTROT2,
  FOXTROT3,
  INDIA1,
  INDIA2,
  INDIA3,
  LIMA1,
  LIMA2,
  LIMA3,
  ECHO1,
  ECHO2,
  ECHO3,
  KILO1,
  KILO2,
  KILO3,
  JULIET1,
  JULIET2,
  JULIET3,
  JULIET4,
  DELTA1,
  DELTA2,
  DELTA3,
  DELTA4,
  HOTEL1,
  HOTEL2,
  HOTEL3,
  HOTEL4,
  GOLF1,
  GOLF2,
  GOLF3,
];
