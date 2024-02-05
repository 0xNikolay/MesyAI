import { atom } from "jotai";

export const baseAtom = atom(["Indian Woman", "Asian Woman", "African Woman", "American Woman", "Russian Woman", "Mexican Woman", "Asian Man", "African Man", "American Man"]);
export const baseValueAtom = atom("American Woman");
export const boobsAtom = atom(["flat", "small", "medium", "large", "extra large"]);
export const boobsValueAtom = atom("medium");
export const assAtom = atom(["flat", "small", "medium", "large", "extra large"]);
export const assValueAtom = atom("medium");
export const bodyTypeAtom = atom(["Slim", "Average", "Chubby", "Fat"]);
export const bodyTypeValueAtom = atom("Average");
export const expressionAtom = atom(["Neutral", "Happy", "Sad", "Angry", "Surprised", "Scared", "Disgusted"]);
export const expressionValueAtom = atom("Happy");
export const ageAtom = atom(["Infant", "Child", "Teen", "Young", "Young Adult", "Adult", "Old"]);
export const ageValueAtom = atom("Young");
export const hairStyleAtom = atom(["Long", "ponytail", "Lower ponytail", "high ponytail", "braid ponytail", "twintails", "curly hair", "bob cut", "medium bob", "bowl cut hair", "bun_head", "twin braids", "messy hair", "hair intakes", "Long straight hair", "twin drills", "Princess curls", "French curls"]);
export const hairStyleValueAtom = atom("Long");

export const clothingAtom = atom(["Naked", "Evening dress", "Suit", "Business suit", "Garreg Mach Monastery uniform", "School uniform", "Sailor suit", "JK", "School uniform", "Seifuku", "skirt", "Long skirt", "Pleated skirt", "Miniskirt", "Sweater dress", "Summer dress", "Sailor dress", "Bikini", "School swimsuit", "One-piece swimsuit", "Competition swimsuit", "Sukumizu", "Tops", "Shirt", "Blouse", "Tank top", "Cropped jacket", "Hoodie", "Cardigan", "Sweater jacket", "Special style", "Revealing dress", "Pink lucency full dress", "Cleavage dress", "Off shoulder", "Bare shoulders", "Barefoot", "Bare legs", "Gothic", "Lolita fashion", "Western", "Tartan", "Bra", "Sexy lingerie", "Transparent underwear", "Panties", "Thong", "Socks and warmers", "Black silk stocking", "White silk stocking", "Stockings", "Knee-high socks", "Hat", "Robe", "Cape", "Apron", "Belt"]);
export const clothingValueAtom = atom("Hoodie");
export const clothingTypeAtom = atom(["Top", "Bottom", "Full"]);
export const clothingTypeValueAtom = atom("Full");
export const clothingColorAtom = atom(["Black", "White", "Red", "Orange", "Yellow", "Green", "Blue", "Purple", "Brown", "Gray"]);
export const clothingColorValueAtom = atom("Black");
export const clothingPatternAtom = atom(["Solid", "Striped", "Spotted", "Plaid", "Floral", "Abstract"]);
export const clothingPatternValueAtom = atom("Solid");
export const clothingMaterialAtom = atom(["Cotton", "Denim", "Leather", "Linen", "Silk", "Wool"]);
export const clothingMaterialValueAtom = atom("Cotton");

export const backgroundAtom = atom(["None", "Indoors", "Outdoors", "City", "Forest", "Beach", "Space", "white", "black", "Sunrise", "Starry Sky", "Waterfall Wallpaper", "Autumn Scenery", "City in Rain", "Snow", "Desert", "Beach", "Bamboo Forest", "Wheat Field", "Amusement Park", "Bar House", "Library", "Classroom", "Bedroom Night", "Castle", "Fountain", "Halloween", "Christmas", "Cyberpunk"]);
export const backgroundValueAtom = atom("Indoors");
export const cameraAngleAtom = atom(["Front", "Back", "Side", "Top", "Bottom", "Isometric"]);
export const cameraAngleValueAtom = atom("Front");
export const settingAtom = atom(["Urban", "Rural", "Fantasy", "Sci-Fi", "Historical", "Modern", "Futuristic", "Apocalyptic"]);
export const settingValueAtom = atom("Modern");
export const styleAtom = atom(["3d-model", "analog-film", "anime", "cinematic", "comic-book", "digital-art", "enhance", "fantasy-art", "isometric", "line-art", "low-poly", "neon-punk", "origami", "photographic", "pixel-art", "texture", "craft-clay"]);
export const styleValueAtom = atom("photographic");
export const lightingAtom = atom(["Rim Light", "Hard Light", "Soft Light", "Front Light", "Back Light", "Top Light", "Bottom Light"]);
export const lightingValueAtom = atom("Soft Light");
export const qualityAtom = atom(["low", "medium", "high", "ultra"]);
export const qualityValueAtom = atom("high");

export const actionAtom = atom(["None", "Standing", "Walking", "Running", "Jumping", "Sitting", "Laying", "Dancing", "Fighting", "Eating", "Drinking", "Sleeping", "Talking", "Thinking", "Reading", "Writing", "Drawing", "Cooking", "Cleaning", "Playing", "Exercising", "Working", "Shopping", "Driving", "Riding", "Swimming", "Fishing", "Hunting", "Farming", "Gardening", "Building", "Fixing", "Sewing", "Singing", "Playing Music", "Watching TV", "Playing Video Games", "Using Computer", "Using Phone", "Using Tablet", "Using Camera", "Using Binoculars", "Using Telescope", "Using Microscope", "Using Magnifying Glass", "Using Hammer", "Using Screwdriver", "Using Wrench", "Using Saw", "Using Drill", "Using Shovel", "Using Axe", "Using Pickaxe", "Using Hoe", "Using Rake", "Using Scythe", "Using Sickle", "Using Chainsaw", "Using Blowtorch", "Using Gun", "Using Bow", "Using Crossbow", "Using Slingshot", "Using Knife", "Using Sword", "Using Spear", "Using Shield", "Using Wand", "Using Staff", "Using Magic", "Using Superpowers", "Using Tentacles", "Using Tail", "Using Wings", "Using Claws", "Using Paws", "Using Hooves", "Using Fins", "Using Beak", "Using Trunk", "Using Horns", "Using Antlers", "Using Tusks", "Using Tail"]);
export const actionValueAtom = atom("Standing");

export const attributesAtom = atom("");
export const seedAtom = atom(Math.floor(Math.random() * 999999));
