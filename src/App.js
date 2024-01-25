import React, { useEffect, useState } from "react";
import { useAtom, useAtomValue } from "jotai";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Character from "./Components/Character";
import Composition from "./Components/Composition";
import Clothing from "./Components/Clothing";
import Action from "./Components/Action";
import { attributesAtom, baseValueAtom, seedAtom, boobsValueAtom, assValueAtom, bodyTypeValueAtom, expressionValueAtom, ageValueAtom, hairStyleValueAtom, clothingValueAtom, clothingTypeValueAtom, clothingColorValueAtom, clothingPatternValueAtom, clothingMaterialValueAtom, backgroundValueAtom, cameraAngleValueAtom, settingValueAtom, styleValueAtom, lightingValueAtom, qualityValueAtom, actionValueAtom } from "./Variable";
import { baseAtom, boobsAtom, assAtom, bodyTypeAtom, expressionAtom, ageAtom, hairStyleAtom, clothingAtom, clothingTypeAtom, clothingColorAtom, clothingPatternAtom, clothingMaterialAtom, backgroundAtom, cameraAngleAtom, settingAtom, styleAtom, lightingAtom, qualityAtom, actionAtom } from "./Variable";

function App() {
    const [swiper, setSwiper] = useState();
    const [swiper2, setSwiper2] = useState();
    const [attributes, setAttributes] = useAtom(attributesAtom);
    const [base, setbase] = useAtom(baseValueAtom);
    const [boobs, setboobs] = useAtom(boobsValueAtom);
    const [ass, setass] = useAtom(assValueAtom);
    const [bodyType, setbodyType] = useAtom(bodyTypeValueAtom);
    const [expression, setexpression] = useAtom(expressionValueAtom);
    const [age, setage] = useAtom(ageValueAtom);
    const [hairStyle, sethairStyle] = useAtom(hairStyleValueAtom);
    const [clothing, setclothing] = useAtom(clothingValueAtom);
    const [clothingType, setclothingType] = useAtom(clothingTypeValueAtom);
    const [clothingColor, setclothingColor] = useAtom(clothingColorValueAtom);
    const [clothingPattern, setclothingPattern] = useAtom(clothingPatternValueAtom);
    const [clothingMaterial, setclothingMaterial] = useAtom(clothingMaterialValueAtom);
    const [background, setbackground] = useAtom(backgroundValueAtom);
    const [cameraAngle, setcameraAngle] = useAtom(cameraAngleValueAtom);
    const [setting, setsetting] = useAtom(settingValueAtom);
    const [style, setstyle] = useAtom(styleValueAtom);
    const [lighting, setlighting] = useAtom(lightingValueAtom);
    const [quality, setquality] = useAtom(qualityValueAtom);
    const [action, setaction] = useAtom(actionValueAtom);
    const [seed, setSeed] = useAtom(seedAtom);
    const [working, setWorking] = useState(false);
    const baseArray = useAtomValue(baseAtom);
    const boobsArray = useAtomValue(boobsAtom);
    const assArray = useAtomValue(assAtom);
    const bodyTypeArray = useAtomValue(bodyTypeAtom);
    const expressionArray = useAtomValue(expressionAtom);
    const ageArray = useAtomValue(ageAtom);
    const hairStyleArray = useAtomValue(hairStyleAtom);
    const clothingArray = useAtomValue(clothingAtom);
    const clothingTypeArray = useAtomValue(clothingTypeAtom);
    const clothingColorArray = useAtomValue(clothingColorAtom);
    const clothingPatternArray = useAtomValue(clothingPatternAtom);
    const clothingMaterialArray = useAtomValue(clothingMaterialAtom);
    const backgroundArray = useAtomValue(backgroundAtom);
    const cameraAngleArray = useAtomValue(cameraAngleAtom);
    const settingArray = useAtomValue(settingAtom);
    const styleArray = useAtomValue(styleAtom);
    const lightingArray = useAtomValue(lightingAtom);
    const qualityArray = useAtomValue(qualityAtom);
    const actionArray = useAtomValue(actionAtom);

    function RandomData() {
        setbase(baseArray[Math.floor(Math.random() * baseArray.length)]);
        setboobs(boobsArray[Math.floor(Math.random() * boobsArray.length)]);
        setass(assArray[Math.floor(Math.random() * assArray.length)]);
        setbodyType(bodyTypeArray[Math.floor(Math.random() * bodyTypeArray.length)]);
        setexpression(expressionArray[Math.floor(Math.random() * expressionArray.length)]);
        setage(ageArray[Math.floor(Math.random() * ageArray.length)]);
        sethairStyle(hairStyleArray[Math.floor(Math.random() * hairStyleArray.length)]);
        setclothing(clothingArray[Math.floor(Math.random() * clothingArray.length)]);
        setclothingType(clothingTypeArray[Math.floor(Math.random() * clothingTypeArray.length)]);
        setclothingColor(clothingColorArray[Math.floor(Math.random() * clothingColorArray.length)]);
        setclothingPattern(clothingPatternArray[Math.floor(Math.random() * clothingPatternArray.length)]);
        setclothingMaterial(clothingMaterialArray[Math.floor(Math.random() * clothingMaterialArray.length)]);
        setbackground(backgroundArray[Math.floor(Math.random() * backgroundArray.length)]);
        setcameraAngle(cameraAngleArray[Math.floor(Math.random() * cameraAngleArray.length)]);
        setsetting(settingArray[Math.floor(Math.random() * settingArray.length)]);
        setstyle(styleArray[Math.floor(Math.random() * styleArray.length)]);
        setlighting(lightingArray[Math.floor(Math.random() * lightingArray.length)]);
        setquality(qualityArray[Math.floor(Math.random() * qualityArray.length)]);
        setaction(actionArray[Math.floor(Math.random() * actionArray.length)]);

        return "Done";
    }

    // useEffect(() => {

    // }, [base, boobs, ass, bodyType, seed, expression, age, hairStyle, clothing, clothingType, clothingColor, clothingPattern, clothingMaterial, background, cameraAngle, setting, style, lighting, quality, action]);

    function swiperClicker() {
        let active = "cursor-pointer text-white font-bold bg-primary-950/50 px-2 py-1 rounded-lg shadow-inner";
        let inactive = "cursor-pointer text-white/75 font-bold px-2 py-1";
        if (swiper2.activeIndex === 2) {
            document.getElementById("CharacterSlide2").setAttribute("class", active);
            document.getElementById("ClothingSlide2").setAttribute("class", inactive);
            document.getElementById("CompositionSlide").setAttribute("class", inactive);
            document.getElementById("ActionSlide").setAttribute("class", inactive);
        } else if (swiper2.activeIndex === 3) {
            document.getElementById("CharacterSlide2").setAttribute("class", inactive);
            document.getElementById("ClothingSlide2").setAttribute("class", active);
            document.getElementById("CompositionSlide").setAttribute("class", inactive);
            document.getElementById("ActionSlide").setAttribute("class", inactive);
        } else if (swiper2.activeIndex === 0) {
            document.getElementById("CharacterSlide2").setAttribute("class", inactive);
            document.getElementById("ClothingSlide2").setAttribute("class", inactive);
            document.getElementById("CompositionSlide").setAttribute("class", active);
            document.getElementById("ActionSlide").setAttribute("class", inactive);
        } else if (swiper2.activeIndex === 1) {
            document.getElementById("CharacterSlide2").setAttribute("class", inactive);
            document.getElementById("ClothingSlide2").setAttribute("class", inactive);
            document.getElementById("CompositionSlide").setAttribute("class", inactive);
            document.getElementById("ActionSlide").setAttribute("class", active);
        }
    }

    return (
        <div className="bg-primary-950 w-full min-h-screen h-full py-5 md:py-10 flex items-center justify-center">
            <div className="w-[95%] md:w-[90%] h-[90%] grid grid-cols-1 md:grid-cols-4 gap-3">
                <div className="bg-white/10 hidden md:block h-full w-full rounded-xl customShadow overflow-hidden">
                    <div className="bg-white/10 shadow w-full h-14 flex gap-3 items-center justify-start px-5">
                        <p
                            onClick={() => {
                                swiper.slideTo(0);
                                if (swiper.activeIndex === 0) {
                                    document.getElementById("CharacterSlide").setAttribute("class", "cursor-pointer text-white font-bold bg-primary-950/50 px-2 py-1 rounded-lg shadow-inner");
                                    document.getElementById("ClothingSlide").setAttribute("class", "cursor-pointer text-white/75 font-bold px-2 py-1");
                                } else {
                                    document.getElementById("CharacterSlide").setAttribute("class", "cursor-pointer text-white/75 font-bold px-2 py-1");
                                    document.getElementById("ClothingSlide").setAttribute("class", "cursor-pointer text-white font-bold bg-primary-950/50 px-2 py-1 rounded-lg shadow-inner");
                                }
                            }}
                            id="CharacterSlide"
                            className="cursor-pointer text-white font-bold bg-primary-950/50 px-2 py-1 rounded-lg shadow-inner"
                        >
                            Character
                        </p>
                        <p
                            onClick={() => {
                                swiper.slideTo(1);
                                if (swiper.activeIndex === 0) {
                                    document.getElementById("CharacterSlide").setAttribute("class", "cursor-pointer text-white font-bold bg-primary-950/50 px-2 py-1 rounded-lg shadow-inner");
                                    document.getElementById("ClothingSlide").setAttribute("class", "cursor-pointer text-white/75 font-bold px-2 py-1");
                                } else {
                                    document.getElementById("CharacterSlide").setAttribute("class", "cursor-pointer text-white/75 font-bold px-2 py-1");
                                    document.getElementById("ClothingSlide").setAttribute("class", "cursor-pointer text-white font-bold bg-primary-950/50 px-2 py-1 rounded-lg shadow-inner");
                                }
                            }}
                            id="ClothingSlide"
                            className="cursor-pointer px-2 py-1 text-white/75 font-bold"
                        >
                            Clothing
                        </p>
                    </div>

                    <Swiper
                        onSwiper={(swiper) => {
                            setSwiper(swiper);
                        }}
                        className="h-full"
                        spaceBetween={50}
                        slidesPerView={1}
                        simulateTouch={false}
                    >
                        <SwiperSlide>
                            <Character />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Clothing />
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className="h-fit md:h-full w-full flex flex-col md:col-span-2 md:grid md:grid-rows-6 gap-3">
                    <div className="bg-white/10 w-full h-[calc(100vw+3rem)] md:h-full md:aspect-auto  row-span-5 rounded-xl customShadow overflow-hidden relative">
                        <img
                            id="previewImg"
                            onError={() => {
                                if (document.getElementById("previewImg").getAttribute("src") !== "") {
                                    document.getElementById("previewImg").classList.add("opacity-0");
                                    setTimeout(() => {
                                        document.getElementById("previewImg").setAttribute("src", document.getElementById("previewImg").src);
                                        document.getElementById("previewImg").classList.remove("opacity-0");
                                    }, 2000);
                                }
                            }}
                            onLoad={() => {
                                document.getElementById("loader").classList.add("hidden");
                                setWorking(false);
                            }}
                            src=""
                            className="absolute left-0 bottom-0 md:top-0 opacity-0  w-full h-full object-contain z-10"
                        />
                        <img
                            id="previousImg"
                            onError={() => {
                                if (document.getElementById("previousImg").getAttribute("src") === "") {
                                    document.getElementById("previousImg").src = "/images/demo" + (Math.floor(Math.random() * 10) + 1) + ".jpg";
                                }
                                document.getElementById("previousImg").classList.add("opacity-0");
                                setTimeout(() => {
                                    document.getElementById("previousImg").setAttribute("src", document.getElementById("previousImg").src);
                                    document.getElementById("previousImg").classList.remove("opacity-0");
                                }, 2000);
                            }}
                            src=""
                            className="absolute left-0 bottom-0 md:top-0  h-full w-full object-contain z-0"
                        />
                        <img src="/logo512.png" className="absolute right-3 bottom-3 h-10 w-10 drop-shadow-2xl z-20" />
                        <div className="absolute top-3 right-3 flex items-center justify-center gap-3">
                            <div className="relative group cursor-pointer z-20">
                                <svg title="Upload" className="h-10 w-10 drop-shadow-2xl z-30 bg-white rounded-full p-2 group-hover:scale-105 overflow-visible" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="#ff763b" d="M0 100V0h72l28 28v72H0z" />
                                    <path fill="#e64500" d="M0 100V72L72 0l28 28-72 72H0z" />
                                    <path fill="#ff763b" d="M72 0h1l27 27v1H72V0z" />
                                    <path d="M34.828 55.721v3.853H23.29v7.704h9.738v3.87H23.29V81.75h-4.878V55.721h16.416zm9.252 26.028h-4.86V55.721h4.86v26.028zm10.691-3.996h10.422v3.996H49.93V55.721h4.842v22.032zm30.187-22.032v3.853H73.42v7.218h9.09v3.726h-9.09v7.362h11.538v3.87H68.542V55.721h16.416z" fill="#fff" />
                                </svg>
                                <input
                                    type="file"
                                    onChange={(event) => {
                                        let file = event.currentTarget.files[0];
                                        let reader = new FileReader();
                                        reader.onloadend = function () {
                                            document.getElementById("loader").classList.remove("hidden");
                                            var formdata = new FormData();
                                            let imgsrc = reader.result.split("base64,")[1];
                                            formdata.append("image", imgsrc);

                                            var requestOptions = {
                                                method: "POST",
                                                body: formdata,
                                                redirect: "follow",
                                            };

                                            fetch("https://api.imgbb.com/1/upload?expiration=600&key=8560d0a3da0674cd1bca85f36f734d81", requestOptions)
                                                .then((response) => response.json())
                                                .then((result) => {
                                                    if (result.success === true) {
                                                        document.getElementById("previewImg").src = result.data.url;
                                                        if (document.getElementById("previewImg").classList.contains("opacity-0")) {
                                                            document.getElementById("previewImg").classList.remove("opacity-0");
                                                        }
                                                    } else {
                                                        alert("Error uploading image");
                                                    }
                                                })
                                                .catch((error) => console.log("error", error))
                                                .finally(() => {
                                                    document.getElementById("loader").classList.add("hidden");
                                                });
                                        };
                                        reader.readAsDataURL(file);
                                    }}
                                    id="uploadFile"
                                    className="absolute left-0 top-0 opacity-0 w-full h-full object-contain z-10"
                                />
                            </div>
                            <svg
                                title="nudify"
                                onClick={() => {
                                    if (!working) {
                                        setWorking(true);
                                        document.getElementById("loader").classList.remove("hidden");
                                        if (document.getElementById("previewImg").getAttribute("src") !== "") document.getElementById("previousImg").setAttribute("src", document.getElementById("previewImg").getAttribute("src"));
                                        var myHeaders = new Headers();
                                        myHeaders.append("Content-Type", "application/json");
                                        let imageSrc = "";
                                        if (
                                            document
                                                .getElementById("previewImg")
                                                .getAttribute("src")
                                                .includes(process.env.REACT_APP_SERVER + "/api/v1/image/")
                                        ) {
                                            imageSrc = document.getElementById("previewImg").getAttribute("src").split("/").at(-1);
                                        } else {
                                            imageSrc = document.getElementById("previewImg").getAttribute("src");
                                        }
                                        var raw = JSON.stringify({
                                            image: imageSrc,
                                            cameraAngle: cameraAngle,
                                            age: age,
                                            base: base,
                                            expression: expression,
                                            bodyType: bodyType,
                                            style: style,
                                            action: action,
                                            boobs: boobs,
                                            ass: ass,
                                            clothing: clothing,
                                            hairStyle: hairStyle,
                                            quality: quality,
                                            clothingColor: clothingColor,
                                            clothingType: clothingType,
                                            clothingMaterial: clothingMaterial,
                                            clothingPattern: clothingPattern,
                                            lighting: lighting,
                                            setting: setting,
                                            background: background,
                                            seed: seed,
                                        });

                                        var requestOptions = {
                                            method: "POST",
                                            headers: myHeaders,
                                            body: raw,
                                            redirect: "follow",
                                        };

                                        fetch(process.env.REACT_APP_SERVER + "/api/v1/nudify", requestOptions)
                                            .then((response) => response.json())
                                            .then((result) => {
                                                if (Object.keys(result).includes("error")) {
                                                    alert(result.error);
                                                } else {
                                                    let imgUrl = process.env.REACT_APP_SERVER + "/api/v1/image/" + result.job + ".png";
                                                    document.getElementById("previewImg").setAttribute("src", imgUrl);
                                                }
                                            })
                                            .catch((error) => console.log("error", error));
                                    }
                                }}
                                className="h-10 w-10 drop-shadow-2xl z-20 bg-white rounded-full p-2 hover:scale-105 overflow-visible cursor-pointer"
                                viewBox="0 0 504.48 504.48"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path fill="#faba81" d="M472.932 100.594s-194.878-32.265-220.69 131.637l12.588 209.081h182.29l25.812-138.099c0 .001 70.982-103.247 0-202.619m-441.384 0c-70.983 99.372 0 202.62 0 202.62L57.36 441.312h180.983l13.895-209.081C226.426 68.329 31.548 100.594 31.548 100.594" />
                                <path fill="#e64500" d="M70.335 63.167c-22.943 0-41.543 18.6-41.543 41.543.927-1.368 1.774-2.745 2.754-4.114 0 0 194.878-32.265 220.69 131.637 25.812-163.902 220.698-131.637 220.698-131.637 1.368 1.924 2.595 3.849 3.866 5.782v-1.668c0-22.943-18.6-41.543-41.543-41.543H70.335z" />
                                <path fill="#f4935e" d="M319.946 331.091c-33.643-17.275-56.144-52.33-58.913-90.81.167-2.67.264-5.352.264-8.046a8.5 8.5 0 0 0-8.5-8.499h-.001c-.094 0-.184.011-.277.014-.093-.003-.184-.014-.277-.014h-.001a8.501 8.501 0 0 0-8.5 8.499 127.46 127.46 0 0 0 .264 8.05c-2.77 38.479-25.271 73.533-58.912 90.807a8.5 8.5 0 0 0 7.764 15.123c27.499-14.119 48.551-38.469 59.662-67.189 11.111 28.72 32.164 53.069 59.662 67.189a8.499 8.499 0 0 0 11.444-3.679 8.5 8.5 0 0 0-3.679-11.445z" />
                                <path fill="#e64500" d="M406.091 217.973c.794-6.718 5.464-12.65 12.341-14.733 9.278-2.807 18.273 2.834 21.875 11.714 0 0 1.139 2.127 1.377 6.515.327 5.967-1.377 11.864-4.537 16.931l-16.852 26.527-28.337-12.853c-5.447-2.463-10.134-6.435-13.171-11.582-2.233-3.778-2.463-6.179-2.463-6.179-1.924-9.384 2.436-19.068 11.705-21.875 6.886-2.083 13.675.388 18.062 5.535" />
                            </svg>
                            <svg
                                title="random"
                                onClick={() => {
                                    let temp = RandomData();
                                }}
                                className="h-10 w-10 drop-shadow-2xl z-20 bg-white rounded-full hover:scale-105 overflow-visible cursor-pointer"
                                viewBox="0 0 512 512"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    style={{
                                        fill: "#ff763b",
                                    }}
                                    d="m289.065 135.808-96.123 48.067-96.123-48.067 96.123-48.061z"
                                />
                                <path
                                    style={{
                                        fill: "#fc611f",
                                    }}
                                    d="M192.942 306.278 96.819 259.2V135.808l96.123 48.067z"
                                />
                                <path
                                    style={{
                                        fill: "#e64500",
                                    }}
                                    d="m192.942 306.278 96.123-47.078V135.808l-96.123 48.067z"
                                />
                                <path
                                    style={{
                                        fill: "#fff",
                                    }}
                                    d="M153.882 221.379c0 6.733-4.029 10.706-9.001 8.873-4.972-1.833-9.001-8.781-9.001-15.514 0-6.733 4.029-10.706 9.001-8.873 4.971 1.838 9.001 8.781 9.001 15.514zm80.931 1.361c0 6.733 4.029 10.706 9.001 8.873 4.972-1.833 9.001-8.781 9.001-15.514 0-6.733-4.029-10.706-9.001-8.873-4.971 1.839-9.001 8.782-9.001 15.514zm-29.26-16.972c0 6.733 4.029 10.706 9.001 8.873s9.001-8.781 9.001-15.514-4.029-10.706-9.001-8.873-9.001 8.781-9.001 15.514zm0 66.488c0 6.733 4.029 10.706 9.001 8.873 4.972-1.833 9.001-8.781 9.001-15.514s-4.029-10.706-9.001-8.873-9.001 8.781-9.001 15.514zm54.912-93.563c0 6.733 4.029 10.706 9.001 8.873s9.001-8.781 9.001-15.514c0-6.733-4.029-10.706-9.001-8.873-4.967 1.833-9.001 8.776-9.001 15.514zm0 66.488c0 6.733 4.029 10.706 9.001 8.873 4.972-1.833 9.001-8.781 9.001-15.514s-4.029-10.706-9.001-8.873-9.001 8.782-9.001 15.514zm-136.894-68.889c0 6.733-4.029 10.706-9.001 8.873-4.972-1.833-9.001-8.781-9.001-15.514 0-6.733 4.029-10.706 9.001-8.873 4.972 1.833 9.001 8.781 9.001 15.514zm56.551 94.167c0 6.733-4.029 10.706-9.001 8.873-4.972-1.833-9.001-8.781-9.001-15.514 0-6.733 4.029-10.706 9.001-8.873 4.971 1.838 9.001 8.781 9.001 15.514z"
                                />
                                <ellipse
                                    style={{
                                        fill: "#fff",
                                    }}
                                    cx={192.942}
                                    cy={135.808}
                                    rx={12.611}
                                    ry={8.53}
                                />
                                <path
                                    style={{
                                        fill: "#ff763b",
                                    }}
                                    d="m414.776 351.278-101.954-33.986-33.987-101.955 101.955 33.987z"
                                />
                                <path
                                    style={{
                                        fill: "#fc611f",
                                    }}
                                    d="m226.263 403.845-34.678-101.258 87.25-87.25 33.987 101.955z"
                                />
                                <path
                                    style={{
                                        fill: "#e64500",
                                    }}
                                    d="m226.263 403.845 101.263 34.683 87.25-87.25-101.954-33.986z"
                                />
                                <path
                                    style={{
                                        fill: "#fff",
                                    }}
                                    d="M306.253 341.693c-4.762 4.762-4.721 10.419.092 12.641 4.813 2.217 12.575.159 17.336-4.603 4.762-4.762 4.721-10.419-.092-12.641s-12.575-.158-17.336 4.603zm-47.017 47.012c-4.762 4.762-4.721 10.419.092 12.641 4.813 2.217 12.575.159 17.336-4.603 4.762-4.762 4.721-10.419-.092-12.641-4.813-2.222-12.575-.158-17.336 4.603zm77.363-36.843c-4.762 4.762-4.721 10.419.092 12.641 4.813 2.222 12.575.159 17.336-4.603s4.721-10.419-.092-12.641c-4.812-2.222-12.574-.159-17.336 4.603zm-47.017 47.017c-4.762 4.762-4.721 10.419.092 12.641 4.813 2.217 12.575.159 17.336-4.603 4.762-4.762 4.721-10.419-.092-12.641s-12.574-.159-17.336 4.603zm74.65-37.504c-4.762 4.762-4.721 10.419.092 12.641 4.813 2.217 12.575.159 17.336-4.603s4.721-10.419-.092-12.641c-4.813-2.217-12.575-.159-17.336 4.603zm-47.017 47.017c-4.762 4.762-4.721 10.419.092 12.641 4.813 2.217 12.575.159 17.336-4.603 4.762-4.762 4.721-10.419-.092-12.641-4.813-2.222-12.575-.159-17.336 4.603zm-48.087-145.511c-4.762 4.762-10.419 4.721-12.641-.092-2.217-4.813-.159-12.575 4.603-17.336 4.762-4.762 10.419-4.721 12.641.092 2.222 4.813.158 12.575-4.603 17.336zm-26.599 106.573c-4.762 4.762-10.419 4.721-12.641-.092-2.217-4.813-.159-12.575 4.603-17.336s10.419-4.721 12.641.092.159 12.574-4.603 17.336z"
                                />
                                <ellipse
                                    transform="rotate(-45.001 346.797 283.278)"
                                    style={{
                                        fill: "#fff",
                                    }}
                                    cx={346.798}
                                    cy={283.273}
                                    rx={8.53}
                                    ry={12.61}
                                />
                            </svg>
                            <svg
                                title="reimagine"
                                onClick={() => {
                                    setSeed(seed + 1);
                                    if (!working) {
                                        setWorking(true);

                                        var raw = JSON.stringify({
                                            cameraAngle: cameraAngle,
                                            age: age,
                                            base: base,
                                            expression: expression,
                                            bodyType: bodyType,
                                            style: style,
                                            action: action,
                                            boobs: boobs,
                                            ass: ass,
                                            clothing: clothing,
                                            hairStyle: hairStyle,
                                            quality: quality,
                                            clothingColor: clothingColor,
                                            clothingType: clothingType,
                                            clothingMaterial: clothingMaterial,
                                            clothingPattern: clothingPattern,
                                            lighting: lighting,
                                            setting: setting,
                                            background: background,
                                            seed: seed,
                                        });
                                        var myHeaders = new Headers();
                                        myHeaders.append("Content-Type", "application/json");

                                        var requestOptions = {
                                            method: "POST",
                                            headers: myHeaders,
                                            body: raw,
                                        };
                                        document.getElementById("loader").classList.remove("hidden");
                                        if (document.getElementById("previewImg").getAttribute("src") !== "") document.getElementById("previousImg").setAttribute("src", document.getElementById("previewImg").getAttribute("src"));
                                        fetch(process.env.REACT_APP_SERVER + "/api/v1/sdxl/generate", requestOptions)
                                            .then((response) => response.json())
                                            .then((result) => {
                                                if (Object.keys(result).includes("error")) {
                                                    alert(result.error);
                                                } else {
                                                    let imgUrl = process.env.REACT_APP_SERVER + "/api/v1/image/" + result.job + ".png";
                                                    document.getElementById("previewImg").setAttribute("src", imgUrl);
                                                }
                                            })
                                            .catch((error) => console.log("error", error));
                                    }
                                }}
                                viewBox="0 0 512 512"
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-10 w-10 drop-shadow-2xl z-20 bg-white rounded-full p-2 hover:scale-105 overflow-visible cursor-pointer"
                            >
                                <path fill="#e54500" d="m97.478 235.728 49.618 242.514L512 33.758z" />
                                <path fill="#fb611f" d="M251.837 373.231 147.096 478.242l17.836-152.711 66.841 1.829z" />
                                <path fill="#fe763b" d="M512 33.758 109.455 294.271 0 232.606zm0 0-.529 1.474-211.225 364.567-135.314-74.268z" />
                            </svg>
                        </div>
                        <svg id="loader" className="hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-white/30 rounded-full" xmlns="http://www.w3.org/2000/svg" width={200} height={200} viewBox="0 0 100 100">
                            <circle cx={50} cy={50} fill="none" stroke="#141414" strokeWidth={10} r={35} strokeDasharray="164.93361431346415 56.97787143782138">
                                <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50" keyTimes="0;1" />
                            </circle>
                        </svg>
                    </div>
                    <div className="bg-white/10 rounded-xl customShadow overflow-hidden flex flex-col items-center justify-center px-5 py-2  gap-2">
                        <p className="text-white/60 font-bold">Custom Attributes</p>
                        <input
                            onChange={() => {
                                setAttributes(document.getElementById("customAttributes").value);
                            }}
                            type="text"
                            value={attributes}
                            id="customAttributes"
                            className="w-full h-10 rounded-lg bg-white/10 text-white/75 px-3 outline-none border border-white/25"
                            placeholder="Type custom attributes here"
                        />
                    </div>
                </div>
                <div className="bg-white/10 h-full w-full rounded-xl customShadow overflow-hidden">
                    <div className="bg-white/10 shadow w-full py-2 h-fit md:h-14 flex flex-wrap md:flex-nowrap gap-3 items-center justify-start px-5">
                        <div className="flex gap-3 items-center justify-start md:hidden">
                            <p
                                onClick={() => {
                                    swiper2.slideTo(2);
                                    swiperClicker();
                                }}
                                id="CharacterSlide2"
                                className="cursor-pointer px-2 py-1 text-white/75 font-bold"
                            >
                                Character
                            </p>
                            <p
                                onClick={() => {
                                    swiper2.slideTo(3);
                                    swiperClicker();
                                }}
                                id="ClothingSlide2"
                                className="cursor-pointer px-2 py-1 text-white/75 font-bold"
                            >
                                Clothing
                            </p>
                        </div>
                        <p
                            onClick={() => {
                                swiper2.slideTo(0);
                                swiperClicker();
                            }}
                            id="CompositionSlide"
                            className="cursor-pointer text-white font-bold bg-primary-950/50 px-2 py-1 rounded-lg shadow-inner"
                        >
                            Composition
                        </p>
                        <p
                            onClick={() => {
                                swiper2.slideTo(1);
                                swiperClicker();
                            }}
                            id="ActionSlide"
                            className="cursor-pointer px-2 py-1 text-white/75 font-bold"
                        >
                            Action
                        </p>
                    </div>
                    <Swiper
                        onSwiper={(swiper2) => {
                            setSwiper2(swiper2);
                        }}
                        className="h-full"
                        spaceBetween={50}
                        slidesPerView={1}
                        simulateTouch={false}
                        onSlideChange={() => {
                            swiperClicker();
                        }}
                    >
                        <SwiperSlide>
                            <Composition />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Action />
                        </SwiperSlide>
                        <SwiperSlide className="opacity-100 md:!opacity-0 scale-y-100 md:!scale-y-0">
                            <Character />
                        </SwiperSlide>
                        <SwiperSlide className="opacity-100 md:!opacity-0 scale-y-100 md:!scale-y-0">
                            <Clothing />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
}

export default App;
