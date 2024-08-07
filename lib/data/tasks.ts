import { task } from "@/lib/types";

import { FirstRecon }                     from "@/lib/data/tasks/first-recon";
import { CacheRetrieval }                 from "@/lib/data/tasks/cache-retrieval";
import { MedsWanted }                     from "@/lib/data/tasks/meds-wanted";
import { LeaveNoManBehind }               from "@/lib/data/tasks/leave-no-man-behind";
import { LittleBirdDown }                 from "@/lib/data/tasks/little-bird-down";
import { RestoringOrder }                 from "@/lib/data/tasks/restoring-order";
import { RatsNest }                       from "@/lib/data/tasks/rats-nest";
import { LostAndFound }                   from "@/lib/data/tasks/lost-and-found";
import { MedicalDetective }               from "@/lib/data/tasks/medical-detective";
import { HelpingHand }                    from "@/lib/data/tasks/helping-hand";
import { SecretCompassion }               from "@/lib/data/tasks/secret-compassion";
import { RadioSilence }                   from "@/lib/data/tasks/radio-silence";
import { Reclamation }                    from "@/lib/data/tasks/reclamation";
import { FirstHit }                       from "@/lib/data/tasks/first-hit";
import { NativeNegotiations }             from "@/lib/data/tasks/native-negotiations";
import { CovertResearch }                 from "@/lib/data/tasks/covert-research";
import { ToolsOfTheTrade }                from "@/lib/data/tasks/tools-of-the-trade";
import { LastFarewell }                   from "@/lib/data/tasks/last-farewell-part-1";
import { LeftBehind }                     from "@/lib/data/tasks/left-behind-part-1";
import { LastFlight }                     from "@/lib/data/tasks/last-flight";
import { ASingleDrop }                    from "@/lib/data/tasks/a-single-drop";
import { SkycrawlersPartOne }             from "@/lib/data/tasks/skycrawlers-part-1";
import { SkycrawlersPartTwo }             from "@/lib/data/tasks/skycrawlers-part-2";
import { WingClipping }                   from "@/lib/data/tasks/wing-clipping";
import { BusinessOrPleasure }             from "@/lib/data/tasks/business-or-pleasure";
import { FinalCheckout }                  from "@/lib/data/tasks/final-checkout"
import { ManifestDestiny }                from "@/lib/data/tasks/manifest-destiny"
import { AtTheMoundsOfMadness }           from "@/lib/data/tasks/at-the-mounds-of-madness"
import { ItsInTheWaterPartOne }           from "@/lib/data/tasks/its-in-the-water-part-1"
import { ItsInTheWaterPartTwo }           from "@/lib/data/tasks/its-in-the-water-part-2"
import { TheShadowOverBanPaPartOne }      from "@/lib/data/tasks/the-shadow-over-ban-pa-part-1"
import { TheShadowOverBanPaPartTwo }      from "@/lib/data/tasks/the-shadow-over-ban-pa-part-2"
import { LineInTheSand }                  from "@/lib/data/tasks/line-in-the-sand"
import { TheValueOfSharing }              from "@/lib/data/tasks/the-value-of-sharing"
import { UninvitedGuests }                from "@/lib/data/tasks/uninvited-guests"
import { WarmWelcome }                    from "@/lib/data/tasks/warm-welcome"
import { LamangConnection }               from "@/lib/data/tasks/lamang-connection"
import { TheMostDangerousGame }           from "@/lib/data/tasks/the-most-dangerous-game";
import { OnTheRange }                     from "@/lib/data/tasks/on-the-range";
import { GunsAndAmmo }                    from "@/lib/data/tasks/guns-and-ammo";
import { ShootingGallery }                from "@/lib/data/tasks/shooting-gallery";
import { TrueGrit }                       from "@/lib/data/tasks/true-grit";
import { OneShotOneKill }                 from "@/lib/data/tasks/one-shot-one-kill";
import { TheBrave }                       from "@/lib/data/tasks/the-brave";
import { Carnivore }                      from "@/lib/data/tasks/carnivore";
import { UpToSnuff }                      from "@/lib/data/tasks/up-to-snuff";
import { IWentISawIConqueredPartOne }     from "@/lib/data/tasks/i-went-i-saw-i-conquered-part-1";
import { IWentISawIConqueredPartTwo }     from "@/lib/data/tasks/i-went-i-saw-i-conquered-part-2";
import { IWentISawIConqueredPartThree }   from "@/lib/data/tasks/i-went-i-saw-i-conquered-part-3";
import { InvadersFromAfar }               from "@/lib/data/tasks/invaders-from-afar";
import { Timber }                         from "@/lib/data/tasks/timber";
import { FuelShortage }                   from "@/lib/data/tasks/fuel-shortage";
import { EOD }                            from "@/lib/data/tasks/eod";
import { HazardousTreasures }             from "@/lib/data/tasks/hazardous-treasures";
import { NightOcean }                     from "@/lib/data/tasks/night-ocean";
import { DeepWaters }                     from "@/lib/data/tasks/deep-waters";
import { FreshMeatPartOne }               from "@/lib/data/tasks/fresh-meat-part-1";
import { FreshMeatPartTwo }               from "@/lib/data/tasks/fresh-meat-part-2";
import { FreshMeatPartThree }             from "@/lib/data/tasks/fresh-meat-part-3";
import { WhatWasLeft }                    from "@/lib/data/tasks/what-was-left";
import { OutOfTheBlue }                   from "@/lib/data/tasks/out-of-the-blue";
import { JetNMark }                       from "@/lib/data/tasks/jets-n-marks";
import { HackerPartOne }                  from "@/lib/data/tasks/hacker-part-1";
import { HackerPartTwo }                  from "@/lib/data/tasks/hacker-part-2";
import { ForthNarithStroll }              from "@/lib/data/tasks/forth-narith-stroll";
import { NeighbourlyHelp }                from "@/lib/data/tasks/neighbourly-help";
import { FamilyHeirloom }                 from "@/lib/data/tasks/family-heirloom";
import { MissingColleaguePartOne }        from "@/lib/data/tasks/missing-colleague-part-1";
import { MissingColleaguePartTwo }        from "@/lib/data/tasks/missing-colleague-part-2";
import { LostLover }                      from "@/lib/data/tasks/lost-lover";
import { Prisoner23 }                     from "@/lib/data/tasks/prisoner-23";
import { SaveTheRebellion }               from "@/lib/data/tasks/save-the-rebellion";
import { DeepDepravity }                  from "@/lib/data/tasks/deep-depravity";
import { TheNegotiator }                  from "@/lib/data/tasks/the-negotiator";
import { LivingInBurrows }                from "@/lib/data/tasks/living-in-burrows";
import { NewNeighbours }                  from "@/lib/data/tasks/new-neighbours";
import { RebelScum }                      from "@/lib/data/tasks/rebel-scum";
import { DutyToTheCountry }               from "@/lib/data/tasks/duty-to-the-country";
import { FinalLiberation }                from "@/lib/data/tasks/final-liberation";
import { CrimeDoesntPay }                 from "@/lib/data/tasks/crime-doesnt-pay";
import { DirtDigger }                     from "@/lib/data/tasks/dirt-digger";
import { FelonyAndPunishment }            from "@/lib/data/tasks/felony-and-punishment";
import { NobelPowder }                    from "@/lib/data/tasks/nobel-powder";
import { LastFarewellPartTwo }            from "@/lib/data/tasks/last-farewell-part-2";
import { DeepestDarkestFantasies }        from "@/lib/data/tasks/deepest-darkest-fantasies";
import { Paparazzi }                      from "@/lib/data/tasks/paparazzi";
import { LipOut }                         from "@/lib/data/tasks/lip-out";
import { LeftBehindPartTwo }              from "@/lib/data/tasks/left-behind-part-2";
import { TheCongressman }                 from "@/lib/data/tasks/the-congressman";
import { CelebrityCrash }                 from "@/lib/data/tasks/celebrity-crash";
import { SweetLittleLies }                from "@/lib/data/tasks/sweet-little-lies";
import { LastResort }                     from "@/lib/data/tasks/last-resort";
import { Weeding }                        from "@/lib/data/tasks/weeding";
import { TheManWhoDisappeared }           from "@/lib/data/tasks/the-man-who-disappeared";
import { GirlsJustWannaHaveFun }          from "@/lib/data/tasks/girls-just-wanna-have-fun";
import { KnowYourEnemy }                  from "@/lib/data/tasks/know-your-enemy";
import { AcademicIntrest }                from "@/lib/data/tasks/academic-intrest";
import { LocalGolfStar }                  from "@/lib/data/tasks/local-golf-star";
import { PricelessPossessions }           from "@/lib/data/tasks/priceless-possessions";
import { NoQuestionsAsked }               from "@/lib/data/tasks/no-questions-asked";
import { WhatsInTheBox }                  from "@/lib/data/tasks/whats-in-the-box";
import { ArtisansList }                   from "@/lib/data/tasks/artisans-list-part-1";
import { ArtisansListPartTwo }            from "@/lib/data/tasks/artisans-list-part-2";
import { Baked }                          from "@/lib/data/tasks/baked";
import { AyeAyeCaptain }                  from "@/lib/data/tasks/aye-aye-captain";
import { Incognito }                      from "@/lib/data/tasks/incognito";
import { LostGirl }                       from "@/lib/data/tasks/lost-girl-part-1";
import { LostGirlPartTwo }                from "@/lib/data/tasks/lost-girl-part-2";
import { Unnameable }                     from "@/lib/data/tasks/unnameable";
import { BigEntrance }                    from "@/lib/data/tasks/big-entrance";
import { Unlra }                          from "@/lib/data/tasks/unlra-part-1";
import { UnlraPartTwo }                   from "@/lib/data/tasks/unlra-part-2";
import { UnlraPartThree }                 from "@/lib/data/tasks/unlra-part-3";
import { UnlraPartFour }                  from "@/lib/data/tasks/unlra-part-4";
import { MallVigilante }                  from "@/lib/data/tasks/mall-vigilante";
import { HideAndSeek }                    from "@/lib/data/tasks/hide-and-seek";
import { WhatRemains }                    from "@/lib/data/tasks/what-remains";
import { TestResults }                    from "@/lib/data/tasks/test-results";
import { Ripper }                         from "@/lib/data/tasks/ripper";
import { Peacekeeper }                    from "@/lib/data/tasks/peacekeeper";
import { CrumbCollector }                 from "@/lib/data/tasks/crumb-collector";
import { BuyerOfUntoldTruths }            from "@/lib/data/tasks/buyer-of-untold-truths";
import { NarcoticBargains }               from "@/lib/data/tasks/narcotic-bargain";

export const Tasks: task[] = [
  FirstRecon, 
  CacheRetrieval,
  MedsWanted,
  LeaveNoManBehind,
  LittleBirdDown,
  RestoringOrder,
  RatsNest,
  LostAndFound,
  MedicalDetective,
  HelpingHand,
  SecretCompassion,
  RadioSilence,
  Reclamation,
  FirstHit,
  NativeNegotiations,
  CovertResearch,
  ToolsOfTheTrade,
  LastFarewell,
  LeftBehind,
  LastFlight,
  ASingleDrop,
  SkycrawlersPartOne,
  SkycrawlersPartTwo,
  WingClipping,
  BusinessOrPleasure,
  FinalCheckout,
  ManifestDestiny,
  AtTheMoundsOfMadness,
  ItsInTheWaterPartOne,
  ItsInTheWaterPartTwo,
  TheShadowOverBanPaPartOne,
  TheShadowOverBanPaPartTwo,
  LineInTheSand,
  TheValueOfSharing,
  UninvitedGuests,
  WarmWelcome,
  LamangConnection,
  TheMostDangerousGame,
  OnTheRange,
  GunsAndAmmo,
  ShootingGallery,
  TrueGrit,
  OneShotOneKill,
  TheBrave,
  Carnivore,
  UpToSnuff,
  IWentISawIConqueredPartOne,
  IWentISawIConqueredPartTwo,
  IWentISawIConqueredPartThree,
  InvadersFromAfar,
  Timber,
  FuelShortage,
  EOD,
  HazardousTreasures,
  Prisoner23,
  SaveTheRebellion,
  DeepDepravity,
  TheNegotiator,
  LivingInBurrows,
  NewNeighbours,
  RebelScum,
  DutyToTheCountry,
  FinalLiberation,
  NightOcean,
  DeepWaters,
  FreshMeatPartOne,
  FreshMeatPartTwo,
  FreshMeatPartThree,
  WhatWasLeft,
  OutOfTheBlue,
  JetNMark,
  HackerPartOne,
  HackerPartTwo,
  ForthNarithStroll,
  NeighbourlyHelp,
  FamilyHeirloom,
  MissingColleaguePartOne,
  MissingColleaguePartTwo,
  LostLover,
  CrimeDoesntPay,
  DirtDigger,
  FelonyAndPunishment,
  NobelPowder,
  LastFarewellPartTwo,
  DeepestDarkestFantasies,
  Paparazzi,
  LipOut,
  LeftBehindPartTwo,
  TheCongressman,
  CelebrityCrash,
  SweetLittleLies,
  LastResort,
  Weeding,
  TheManWhoDisappeared,
  GirlsJustWannaHaveFun,
  KnowYourEnemy,
  AcademicIntrest,
  LocalGolfStar,
  PricelessPossessions,
  NoQuestionsAsked,
  WhatsInTheBox,
  ArtisansList,
  ArtisansListPartTwo,
  Baked,
  AyeAyeCaptain,
  Incognito,
  LostGirl,
  LostGirlPartTwo,
  Unnameable,
  BigEntrance,
  Unlra,
  UnlraPartTwo,
  UnlraPartThree,
  UnlraPartFour,
  MallVigilante,
  HideAndSeek,
  WhatRemains,
  TestResults,
  Ripper,
  Peacekeeper,
  CrumbCollector,
  BuyerOfUntoldTruths,
  NarcoticBargains
]