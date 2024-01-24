import React from "react";
import Dropdown from "./Dropdown";
import Slider from "./Slider";
import { useAtom, useAtomValue } from "jotai";
import { backgroundAtom, cameraAngleAtom, lightingAtom, qualityAtom, qualityValueAtom, lightingValueAtom, settingAtom, styleAtom, backgroundValueAtom, cameraAngleValueAtom, settingValueAtom, styleValueAtom } from "../Variable";

const Composition = () => {
    const backgroundArray = useAtomValue(backgroundAtom);
    const cameraAngleArray = useAtomValue(cameraAngleAtom);
    const settingArray = useAtomValue(settingAtom);
    const styleArray = useAtomValue(styleAtom);
    const lightingArray = useAtomValue(lightingAtom);
    const qualityArray = useAtomValue(qualityAtom);
    const [background, setBackground] = useAtom(backgroundValueAtom);
    const [cameraAngle, setCameraAngle] = useAtom(cameraAngleValueAtom);
    const [setting, setSetting] = useAtom(settingValueAtom);
    const [style, setStyle] = useAtom(styleValueAtom);
    const [lighting, setLighting] = useAtom(lightingValueAtom);
    const [quality, setQuality] = useAtom(qualityValueAtom);

    return (
        <div className="w-full h-full flex flex-col p-5 gap-2 overflow-y-scroll">
            <p className="text-white/60">Quality</p>
            <Dropdown id="quality" data={quality} setData={setQuality} list={qualityArray} placeholder="Select Quality" />
            <p className="text-white/60">Lighting</p>
            <Dropdown id="lighting" data={lighting} setData={setLighting} list={lightingArray} placeholder="Select Lighting" />
            <p className="text-white/60">Background</p>
            <Dropdown id="background" data={background} setData={setBackground} list={backgroundArray} placeholder="Select Background" />
            <p className="text-white/60">Camera Angle</p>
            <Dropdown id="cameraAngle" data={cameraAngle} setData={setCameraAngle} list={cameraAngleArray} placeholder="Select Camera Angle" />
            <p className="text-white/60">Setting</p>
            <Dropdown id="setting" data={setting} setData={setSetting} list={settingArray} up={true} placeholder="Select Setting" />
            <p className="text-white/60">Style</p>
            <Dropdown id="style" data={style} setData={setStyle} list={styleArray} up={true} placeholder="Select Style" />
        </div>
    );
};

export default Composition;
