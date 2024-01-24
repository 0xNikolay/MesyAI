import React from "react";
import Dropdown from "./Dropdown";
import { useAtom, useAtomValue } from "jotai";
import { baseAtom, boobsAtom, boobsValueAtom, assAtom, assValueAtom, bodyTypeAtom, expressionAtom, ageAtom, hairStyleAtom, baseValueAtom, bodyTypeValueAtom, expressionValueAtom, ageValueAtom, hairStyleValueAtom } from "../Variable";

const Character = () => {
    const baseArray = useAtomValue(baseAtom);
    const boobsArray = useAtomValue(boobsAtom);
    const assArray = useAtomValue(assAtom);
    const bodyTypeArray = useAtomValue(bodyTypeAtom);
    const expressionArray = useAtomValue(expressionAtom);
    const ageArray = useAtomValue(ageAtom);
    const hairStyleArray = useAtomValue(hairStyleAtom);
    const [base, setBase] = useAtom(baseValueAtom);
    const [boobs, setBoobs] = useAtom(boobsValueAtom);
    const [ass, setAss] = useAtom(assValueAtom);
    const [bodyType, setBodyType] = useAtom(bodyTypeValueAtom);
    const [expression, setExpression] = useAtom(expressionValueAtom);
    const [age, setAge] = useAtom(ageValueAtom);
    const [hairStyle, setHairStyle] = useAtom(hairStyleValueAtom);
    return (
        <div className="w-full h-full flex flex-col p-5 gap-2 overflow-y-scroll">
            <p className="text-white/60">Base</p>
            <Dropdown id="base" data={base} setData={setBase} list={baseArray} placeholder="Select Base" />
            <p className="text-white/60">Boobs</p>
            <Dropdown id="boobs" data={boobs} setData={setBoobs} list={boobsArray} placeholder="Select Boobs Size" />
            <p className="text-white/60">Ass</p>
            <Dropdown id="ass" data={ass} setData={setAss} list={assArray} placeholder="Select Ass Size" />
            <p className="text-white/60">Body Type</p>
            <Dropdown id="bodyType" data={bodyType} setData={setBodyType} list={bodyTypeArray} placeholder="Select Body Type" />
            <p className="text-white/60">Expression</p>
            <Dropdown id="expression" data={expression} setData={setExpression} list={expressionArray} placeholder="Select Expression" />
            <p className="text-white/60">Age</p>
            <Dropdown id="age" data={age} setData={setAge} list={ageArray} up={true} placeholder="Select Age" />
            <p className="text-white/60">Hair Style</p>
            <Dropdown id="hairStyle" data={hairStyle} setData={setHairStyle} list={hairStyleArray} up={true} placeholder="Select Hair Style" />
        </div>
    );
};

export default Character;
