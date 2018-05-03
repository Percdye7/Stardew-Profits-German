/*
 * All data gathered from a modified version of polarstoat/stardew-crop-data
 */

// Crop List
var crops = {
  "amaranth": {
    "name": "Amaranth",
    "url": "http://stardewvalleywiki.com/Amaranth",
    "img": "amaranth.png",
    "seeds": {
      "pierre": 70,
      "joja": 87,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 7,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "rawN": 150,
      "rawS": 187,
      "rawG": 225,
      "jar": 350,
      "keg": 337,
      "jarType": "Eingelegt",
      "kegType": "Saft"
    }
  },
  "grape": {
    "name": "Traube",
    "url": "http://stardewvalleywiki.com/Grape",
    "img": "grape.png",
    "seeds": {
      "pierre": 60,
      "joja": 75,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 10,
      "regrow": 3
    },
    "produce": {
      "extra": 1,
      "extraPerc": 0,
      "rawN": 80,
      "rawS": 100,
      "rawG": 120,
      "jar": 210,
      "keg": 240,
      "jarType": "Marmelade",
      "kegType": "Wein"
    }
  },
  "hops": {
    "name": "Hopfen",
    "url": "http://stardewvalleywiki.com/Hops",
    "img": "hops.png",
    "seeds": {
      "pierre": 60,
      "joja": 75,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 11,
      "regrow": 1
    },
    "produce": {
      "extra": 1,
      "extraPerc": 0,
      "rawN": 25,
      "rawS": 31,
      "rawG": 37,
      "jar": 100,
      "keg": 300,
      "jarType": "Eingelegt",
      "kegType": "Helles Bier"
    }
  },
  "sweetgemberry": {
    "name": "Süße Edel Beere",
    "url": "http://stardewvalleywiki.com/Sweet_Gem_Berry",
    "img": "sweetgemberry.png",
    "seeds": {
      "pierre": 0,
      "joja": 0,
      "special": 1000,
      "specialLoc": "Reise Karre",
      "specialUrl": "http://stardewvalleywiki.com/Travelling_Cart"
    },
    "growth": {
      "initial": 24,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "rawN": 3000,
      "rawS": 3750,
      "rawG": 4500,
      "jar": 0,
      "keg": 0,
      "jarType": "",
      "kegType": ""
    }
  },
  "fairyrose": {
    "name": "Feen Rose",
    "url": "http://stardewvalleywiki.com/Fairy_Rose",
    "img": "fairyrose.png",
    "seeds": {
      "pierre": 200,
      "joja": 250,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 12,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "rawN": 290,
      "rawS": 362,
      "rawG": 435,
      "jar": 0,
      "keg": 0,
      "jarType": "",
      "kegType": ""
    }
  },
  "tulip": {
    "name": "Tulpe",
    "url": "http://stardewvalleywiki.com/Tulip",
    "img": "tulip.png",
    "seeds": {
      "pierre": 20,
      "joja": 25,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 6,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "rawN": 30,
      "rawS": 37,
      "rawG": 45,
      "jar": 0,
      "keg": 0,
      "jarType": "",
      "kegType": ""
    }
  },
  "bluejazz": {
    "name": "Blauer Jazz",
    "url": "http://stardewvalleywiki.com/Blue_Jazz",
    "img": "bluejazz.png",
    "seeds": {
      "pierre": 30,
      "joja": 37,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 7,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "rawN": 50,
      "rawS": 62,
      "rawG": 75,
      "jar": 0,
      "keg": 0,
      "jarType": "",
      "kegType": ""
    }
  },
  "sunflower": {
    "name": "Sonnenblume",
    "url": "http://stardewvalleywiki.com/Sunflower",
    "img": "sunflower.png",
    "seeds": {
      "pierre": 200,
      "joja": 125,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 8,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "rawN": 80,
      "rawS": 100,
      "rawG": 120,
      "jar": 0,
      "keg": 0,
      "jarType": "",
      "kegType": ""
    }
  },
  "coffeebean": {
    "name": "Kafee Bohne",
    "url": "http://stardewvalleywiki.com/Coffee_Bean",
    "img": "coffeebean.png",
    "seeds": {
      "pierre": 0,
      "joja": 0,
      "special": 2500,
      "specialLoc": "Reise Karre",
      "specialUrl": "http://stardewvalleywiki.com/Travelling_Cart"
    },
    "growth": {
      "initial": 10,
      "regrow": 2
    },
    "produce": {
      "extra": 3,
      "extraPerc": 1,
      "rawN": 15,
      "rawS": 18,
      "rawG": 22,
      "jar": 0,
      "keg": 30,
      "jarType": "",
      "kegType": "Kaffee"
    }
  },
  "poppy": {
    "name": "Mohn",
    "url": "http://stardewvalleywiki.com/Poppy",
    "img": "poppy.png",
    "seeds": {
      "pierre": 100,
      "joja": 125,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 7,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "rawN": 140,
      "rawS": 175,
      "rawG": 210,
      "jar": 0,
      "keg": 0,
      "jarType": "",
      "kegType": ""
    }
  },
  "summerspangle": {
    "name": "Sommer Spangle",
    "url": "http://stardewvalleywiki.com/Summer_Spangle",
    "img": "summerspangle.png",
    "seeds": {
      "pierre": 50,
      "joja": 62,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 8,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "rawN": 90,
      "rawS": 112,
      "rawG": 135,
      "jar": 0,
      "keg": 0,
      "jarType": "",
      "kegType": ""
    }
  },
  "parsnip": {
    "name": "Pastinake",
    "url": "http://stardewvalleywiki.com/Parsnip",
    "img": "parsnip.png",
    "seeds": {
      "pierre": 20,
      "joja": 25,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 4,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "rawN": 35,
      "rawS": 43,
      "rawG": 52,
      "jar": 120,
      "keg": 78,
      "jarType": "Eingelegt",
      "kegType": "Saft"
    }
  },
  "greenbean": {
    "name": "Grüne Bohne",
    "url": "http://stardewvalleywiki.com/Green_Bean",
    "img": "greenbean.png",
    "seeds": {
      "pierre": 60,
      "joja": 75,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 10,
      "regrow": 3
    },
    "produce": {
      "extra": 1,
      "extraPerc": 0,
      "rawN": 40,
      "rawS": 50,
      "rawG": 60,
      "jar": 130,
      "keg": 90,
      "jarType": "Eingelegt",
      "kegType": "Saft"
    }
  },
  "cauliflower": {
    "name": "Blumenkohl",
    "url": "http://stardewvalleywiki.com/Cauliflower",
    "img": "cauliflower.png",
    "seeds": {
      "pierre": 80,
      "joja": 100,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 12,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "rawN": 175,
      "rawS": 218,
      "rawG": 262,
      "jar": 400,
      "keg": 393,
      "jarType": "Eingelegt",
      "kegType": "Saft"
    }
  },
  "potato": {
    "name": "Kartoffel",
    "url": "http://stardewvalleywiki.com/Potato",
    "img": "potato.png",
    "seeds": {
      "pierre": 50,
      "joja": 62,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 6,
      "regrow": 0
    },
    "produce": {
      "extra": 1,
      "extraPerc": 0.2,
      "rawN": 80,
      "rawS": 100,
      "rawG": 120,
      "jar": 210,
      "keg": 180,
      "jarType": "Eingelegt",
      "kegType": "Saft"
    }
  },
  "garlic": {
    "name": "Knoblauch",
    "url": "http://stardewvalleywiki.com/Garlic",
    "img": "garlic.png",
    "seeds": {
      "pierre": 40,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 4,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "rawN": 60,
      "rawS": 75,
      "rawG": 90,
      "jar": 170,
      "keg": 135,
      "jarType": "Eingelegt",
      "kegType": "Saft"
    }
  },
  "kale": {
    "name": "Grünkohl",
    "url": "http://stardewvalleywiki.com/Kale",
    "img": "kale.png",
    "seeds": {
      "pierre": 70,
      "joja": 87,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 6,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "rawN": 110,
      "rawS": 137,
      "rawG": 165,
      "jar": 270,
      "keg": 247,
      "jarType": "Eingelegt",
      "kegType": "Saft"
    }
  },
  "rhubarb": {
    "name": "Rhabarber",
    "url": "http://stardewvalleywiki.com/Rhubarb",
    "img": "rhubarb.png",
    "seeds": {
      "pierre": 0,
      "joja": 0,
      "special": 100,
      "specialLoc": "Oase",
      "specialUrl": "http://stardewvalleywiki.com/Oasis"
    },
    "growth": {
      "initial": 13,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "rawN": 220,
      "rawS": 275,
      "rawG": 330,
      "jar": 490,
      "keg": 660,
      "jarType": "Marmelade",
      "kegType": "Wein"
    }
  },
  "melon": {
    "name": "Melone",
    "url": "http://stardewvalleywiki.com/Melon",
    "img": "melon.png",
    "seeds": {
      "pierre": 80,
      "joja": 100,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 12,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "rawN": 250,
      "rawS": 312,
      "rawG": 375,
      "jar": 550,
      "keg": 750,
      "jarType": "Marmelade",
      "kegType": "Wein"
    }
  },
  "tomato": {
    "name": "Tomate",
    "url": "http://stardewvalleywiki.com/Tomato",
    "img": "tomato.png",
    "seeds": {
      "pierre": 50,
      "joja": 62,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 11,
      "regrow": 4
    },
    "produce": {
      "extra": 1,
      "extraPerc": 0.05,
      "rawN": 60,
      "rawS": 75,
      "rawG": 90,
      "jar": 170,
      "keg": 135,
      "jarType": "Eingelegt",
      "kegType": "Saft"
    }
  },
  "blueberry": {
    "name": "Blaubeere",
    "url": "http://stardewvalleywiki.com/Blueberry",
    "img": "blueberry.png",
    "seeds": {
      "pierre": 80,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 13,
      "regrow": 4
    },
    "produce": {
      "extra": 2,
      "extraPerc": 1,
      "rawN": 50,
      "rawS": 62,
      "rawG": 75,
      "jar": 150,
      "keg": 150,
      "jarType": "Marmelade",
      "kegType": "Wein"
    }
  },
  "hotpepper": {
    "name": "Peperoni",
    "url": "http://stardewvalleywiki.com/Hot_Pepper",
    "img": "hotpepper.png",
    "seeds": {
      "pierre": 40,
      "joja": 50,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 5,
      "regrow": 3
    },
    "produce": {
      "extra": 1,
      "extraPerc": 0.03,
      "rawN": 40,
      "rawS": 50,
      "rawG": 60,
      "jar": 130,
      "keg": 120,
      "jarType": "Marmelade",
      "kegType": "Wein"
    }
  },
  "wheat": {
    "name": "Weizen",
    "url": "http://stardewvalleywiki.com/Wheat",
    "img": "wheat.png",
    "seeds": {
      "pierre": 10,
      "joja": 12,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 4,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "rawN": 25,
      "rawS": 31,
      "rawG": 37,
      "jar": 100,
      "keg": 200,
      "jarType": "Eingelegt",
      "kegType": "Bier"
    }
  },
  "radish": {
    "name": "Radieschen",
    "url": "http://stardewvalleywiki.com/Radish",
    "img": "radish.png",
    "seeds": {
      "pierre": 40,
      "joja": 50,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 6,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "rawN": 90,
      "rawS": 112,
      "rawG": 135,
      "jar": 230,
      "keg": 202,
      "jarType": "Eingelegt",
      "kegType": "Saft"
    }
  },
  "redcabbage": {
    "name": "Rotkohl",
    "url": "http://stardewvalleywiki.com/Red_Cabbage",
    "img": "redcabbage.png",
    "seeds": {
      "pierre": 100,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 9,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "rawN": 260,
      "rawS": 325,
      "rawG": 390,
      "jar": 570,
      "keg": 585,
      "jarType": "Eingelegt",
      "kegType": "Saft"
    }
  },
  "starfruit": {
    "name": "Sternenfrucht",
    "url": "http://stardewvalleywiki.com/Starfruit",
    "img": "starfruit.png",
    "seeds": {
      "pierre": 0,
      "joja": 0,
      "special": 400,
      "specialLoc": "Oase",
      "specialUrl": "http://stardewvalleywiki.com/Oasis"
    },
    "growth": {
      "initial": 13,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "rawN": 750,
      "rawS": 937,
      "rawG": 1125,
      "jar": 1550,
      "keg": 2250,
      "jarType": "Marmelade",
      "kegType": "Wein"
    }
  },
  "corn": {
    "name": "Mais",
    "url": "http://stardewvalleywiki.com/Corn",
    "img": "corn.png",
    "seeds": {
      "pierre": 150,
      "joja": 187,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 14,
      "regrow": 4
    },
    "produce": {
      "extra": 1,
      "extraPerc": 0,
      "rawN": 50,
      "rawS": 62,
      "rawG": 75,
      "jar": 150,
      "keg": 112,
      "jarType": "Eingelegt",
      "kegType": "Saft"
    }
  },
  "eggplant": {
    "name": "Aubergine",
    "url": "http://stardewvalleywiki.com/Eggplant",
    "img": "eggplant.png",
    "seeds": {
      "pierre": 20,
      "joja": 25,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 5,
      "regrow": 5
    },
    "produce": {
      "extra": 1,
      "extraPerc": 0.002,
      "rawN": 60,
      "rawS": 75,
      "rawG": 90,
      "jar": 170,
      "keg": 135,
      "jarType": "Eingelegt",
      "kegType": "Saft"
    }
  },
  "artichoke": {
    "name": "Artischocke",
    "url": "http://stardewvalleywiki.com/Artichoke",
    "img": "artichoke.png",
    "seeds": {
      "pierre": 30,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 8,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "rawN": 160,
      "rawS": 200,
      "rawG": 240,
      "jar": 370,
      "keg": 360,
      "jarType": "Eingelegt",
      "kegType": "Saft"
    }
  },
  "pumpkin": {
    "name": "Kürbis",
    "url": "http://stardewvalleywiki.com/Pumpkin",
    "img": "pumpkin.png",
    "seeds": {
      "pierre": 100,
      "joja": 125,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 13,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "rawN": 320,
      "rawS": 400,
      "rawG": 480,
      "jar": 690,
      "keg": 720,
      "jarType": "Eingelegt",
      "kegType": "Saft"
    }
  },
  "bokchoy": {
    "name": "Senfkohl",
    "url": "http://stardewvalleywiki.com/Bok_Choy",
    "img": "bokchoy.png",
    "seeds": {
      "pierre": 50,
      "joja": 62,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 4,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "rawN": 80,
      "rawS": 100,
      "rawG": 120,
      "jar": 210,
      "keg": 180,
      "jarType": "Eingelegt",
      "kegType": "Saft"
    }
  },
  "yam": {
    "name": "Süßkartoffel",
    "url": "http://stardewvalleywiki.com/Yam",
    "img": "yam.png",
    "seeds": {
      "pierre": 60,
      "joja": 75,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 10,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "rawN": 160,
      "rawS": 200,
      "rawG": 240,
      "jar": 370,
      "keg": 360,
      "jarType": "Eingelegt",
      "kegType": "Saft"
    }
  },
  "cranberries": {
    "name": "Preißelbeeren",
    "url": "http://stardewvalleywiki.com/Cranberries",
    "img": "cranberries.png",
    "seeds": {
      "pierre": 240,
      "joja": 300,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 7,
      "regrow": 5
    },
    "produce": {
      "extra": 1,
      "extraPerc": 1,
      "rawN": 75,
      "rawS": 93,
      "rawG": 112,
      "jar": 200,
      "keg": 225,
      "jarType": "Marmelade",
      "kegType": "Wein"
    }
  },
  "beet": {
    "name": "Rote Bete",
    "url": "http://stardewvalleywiki.com/Beet",
    "img": "beet.png",
    "seeds": {
      "pierre": 0,
      "joja": 0,
      "special": 20,
      "specialLoc": "Oase",
      "specialUrl": "http://stardewvalleywiki.com/Oasis"
    },
    "growth": {
      "initial": 6,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "rawN": 100,
      "rawS": 125,
      "rawG": 150,
      "jar": 250,
      "keg": 225,
      "jarType": "Eingelegt",
      "kegType": "Saft"
    }
  },
  "ancientfruit": {
    "name": "Steinalte Frucht",
    "url": "http://stardewvalleywiki.com/Ancient_Fruit",
    "img": "ancientfruit.png",
    "seeds": {
      "pierre": 0,
      "joja": 0,
      "special": 450,
      "specialLoc": "Reise Karre",
      "specialUrl": "http://stardewvalleywiki.com/Travelling_Cart"
    },
    "growth": {
      "initial": 28,
      "regrow": 7
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "rawN": 550,
      "rawS": 687,
      "rawG": 825,
      "jar": 1150,
      "keg": 1650,
      "jarType": "Marmelade",
      "kegType": "Saft"
    }
  },
  "strawberry": {
    "name": "Erdbeere",
    "url": "http://stardewvalleywiki.com/Strawberry",
    "img": "strawberry.png",
    "seeds": {
      "pierre": 0,
      "joja": 0,
      "special": 100,
      "specialLoc": "Eier Fest",
      "specialUrl": "http://stardewvalleywiki.com/Egg_Festival"
    },
    "growth": {
      "initial": 8,
      "regrow": 4
    },
    "produce": {
      "extra": 1,
      "extraPerc": 0.02,
      "rawN": 120,
      "rawS": 150,
      "rawG": 180,
      "jar": 290,
      "keg": 360,
      "jarType": "Marmelade",
      "kegType": "Wein"
    }
  }
};
