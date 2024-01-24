import React from "react";
import Dropdown from "./Dropdown";
import Slider from "./Slider";
import { useAtom, useAtomValue } from "jotai";
import { clothingAtom, clothingTypeAtom, clothingColorAtom, clothingPatternAtom, clothingMaterialAtom, clothingValueAtom, clothingTypeValueAtom, clothingColorValueAtom, clothingPatternValueAtom, clothingMaterialValueAtom } from "../Variable";

const Clothing = () => {
    const clothingArray = useAtomValue(clothingAtom);
    const clothingTypeArray = useAtomValue(clothingTypeAtom);
    const clothingColorArray = useAtomValue(clothingColorAtom);
    const clothingPatternArray = useAtomValue(clothingPatternAtom);
    const clothingMaterialArray = useAtomValue(clothingMaterialAtom);
    const [clothing, setClothing] = useAtom(clothingValueAtom);
    const [clothingType, setClothingType] = useAtom(clothingTypeValueAtom);
    const [clothingColor, setClothingColor] = useAtom(clothingColorValueAtom);
    const [clothingPattern, setClothingPattern] = useAtom(clothingPatternValueAtom);
    const [clothingMaterial, setClothingMaterial] = useAtom(clothingMaterialValueAtom);
    return (
        <div className="w-full h-full flex flex-col p-5 gap-2 overflow-y-scroll">
            <p className="text-white/60">Clothing</p>
            <Dropdown id="clothing" list={clothingArray} data={clothing} setData={setClothing} placeholder="Select Clothing" />
            <p className="text-white/60">Clothing Type</p>
            <Dropdown id="clothingType" list={clothingTypeArray} data={clothingType} setData={setClothingType} placeholder="Select Clothing Type" />
            <p className="text-white/60">Clothing Color</p>
            <Dropdown id="clothingColor" list={clothingColorArray} data={clothingColor} setData={setClothingColor} placeholder="Select Clothing Color" />
            <p className="text-white/60">Clothing Pattern</p>
            <Dropdown id="clothingPattern" list={clothingPatternArray} data={clothingPattern} setData={setClothingPattern} placeholder="Select Clothing Pattern" />
            <p className="text-white/60">Clothing Material</p>
            <Dropdown id="clothingMaterial" list={clothingMaterialArray} data={clothingMaterial} setData={setClothingMaterial} up={true} placeholder="Select Clothing Material" />
        </div>
    );
};

export default Clothing;
