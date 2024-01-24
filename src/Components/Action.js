import React from "react";
import Dropdown from "./Dropdown";
import { useAtom, useAtomValue } from "jotai";
import { actionAtom, actionValueAtom, seedAtom } from "../Variable";

const Action = () => {
    const actionArray = useAtomValue(actionAtom);
    const [action, setAction] = useAtom(actionValueAtom);
    const [seed, setSeed] = useAtom(seedAtom);
    return (
        <div className="w-full h-full flex flex-col p-5 gap-2">
            <p className="text-white/60">Action</p>
            <Dropdown id="action" list={actionArray} data={action} setData={setAction} placeholder="Select Action" />
            <p className="text-white/60">Seed</p>
            <input type="number" min={0} max={999999} id="seed" className="w-full h-10 rounded-lg bg-white/10 text-white/75 p-2 px-3 outline-none" value={seed} onChange={(e) => setSeed(e.target.value)} />
        </div>
    );
};

export default Action;
