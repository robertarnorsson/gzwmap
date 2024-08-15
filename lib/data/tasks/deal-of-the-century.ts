import { MarkerType, ObjectiveType, objective, task } from "@/lib/types";
import { Banshee } from "@/lib/data/vendors";
import { BanPa } from "@/lib/data/locations";

const DealOfTheCentury_Objective1: objective = {
    id: "O-9ALI1W",
    name: "Evidence",
    description: " 	Retrieve the evidence and report back to Banshee",
    position: [11026.5158151703, 14525.409605168943],
    type: ObjectiveType.COLLECT,
    types: [MarkerType.TASK, MarkerType.COLLECT, MarkerType.BANSHEE, MarkerType.FORTNARITH],
    location: BanPa
}

export const DealOfTheCentury: task = {
    id: "T-GA8GE6",
    name: "Deal Of The Century",
    briefing: "Ah, it's good to see you again. Listen, do you remember the jets and how shitty they looked? I can't stop thinking about them. You see, I've heard some interesting rumors about a deal to modernize the Lamangese air forces... well, and the description you brought doesn't add up. I'm really curious. I want you to go to Fort Narith HQ and look for documents that might shed some light on this mystery. It is obvious that someone fucked up... be it on purpose or by mistake; we better find out. You know how it is in this business; every bit of dirt matters, and if I could get my hands on some... You know what? I had a good enough tough-guy reason prepared, but fuck it. Let's start with a clean slate. This is probably a hard pill to swallow, but I'm an Interpol agent named James Miller, and I'm not looking for this kind of information because I want to blackmail people, but because I want to arrest them. In fact, everything you've done for me has been for the greater good. I've checked your background and tested you enough times to make an educated decision; you won't rat me out. It's not in your nature. You keep quiet when it comes to your clients. I would really appreciate it if you would help me find enough evidence to take down the big shots that are exploiting this country.",
    debriefing: "You just made my day! This document is exactly what I needed. It looks like the former base commander had a lucrative side business selling government weapons, but on this occasion, he bit off more than he could chew. He thought he could buy these wrecks and report them as new. The Lamangese government is as corrupt as they come, but they couldn't even turn a blind eye to what he had done this time. That's why he was kicked out of the army. He must have been a big shot if they did not execute him. Very interesting. Thank you for this intel. I hope we can collaborate again.",
    objectives: [
        DealOfTheCentury_Objective1,
    ],
    vendor: Banshee,
    level: 0,
}
