DECKS =
    {   "Black Imp":          {name: "Black Imp", class: "Imp"}
    ,   "Black Sludge":       {name: "Black Sludge", class: "Black Sludge"}
    ,   "Blood Imp":          {name: "Blood Imp", class: "Imp"}
    ,   "Blood Monstrosity":  {name: "Blood Monstrosity", class: "Monstrosity"}
    ,   "Blood Zealot":       {name: "Blood Zealot", class: "Blood Zealot"}
    ,   "Boss":               {name: "Boss", class: "Boss"}
    ,   "Chaos Demon":        {name: "Chaos Demon", class: "Chaos Demon"}
    ,   "Giant Viper":        {name: "Giant Viper", class: "Giant Viper"}
    ,   "Living Corpse":      {name: "Living Corpse", class: "Living Corpse"}
    ,   "Living Spirit":      {name: "Living Spirit", class: "Living Spirit"}
    ,   "Rat Monstrosity":    {name: "Rat Monstrosity", class: "Monstrosity"}
    ,   "Stone Golem":        {name: "Stone Golem", class: "Stone Golem"}
    ,   "Vermling Rider":     {name: "Vermling Rider", class: "Vermling Rider"}
    ,   "Vermling Scout":     {name: "Vermling Scout", class: "Scout"}
};

DECK_DEFINITONS =
[
        { class: "Black Sludge"
        , cards:
            [ [false, "36", "* %move% +1", "* %attack% -1", "** %range% 3"]
            , [false, "57", "* %move% +0","* %attack% +0", "** %range% 2"]
            , [false, "57", "* %attack% +0", "** %range% 2 %target% 2", "** %poison%", "** %earth%%use_element%: +1 %target%"]
            , [false, "66", "* %move% -1", "* %attack% +1", "** %range% 3"]
            , [false, "66", "* %move% +0", "* %loot% 1", "* %heal% 2", "** Self", "** %dark%%use_element%: +1 %heal%"]
            , [false, "85", "* %push% 1 and %poison%", "** Target all adjacent enemies", "* %attack% +1", "** %range% 2"]
            , [true, "85", "* The closest enemy in line-of-signed, regardless of range, suffers 1+L/2 (rounded up) damage.","* %heal% 1", "** Self", "* %dark%"]
            , [true, "85", "* The closest enemy in line-of-signed, regardless of range, suffers 1+L/2 (rounded up) damage.","* %heal% 1", "** Self", "* %earth%"]
            ]
        },
        { class: "Blood Zealot"
        , cards:
            [ [false, "19", "* %move% +1", "** %jump%", "* %attack% -1", "** %curse%", "* %air%"]
            , [true,  "27", "* %move% +0", "* %attack% -1", "** %range% 2", "* %heal% X", "** Self", "** X is damage suffered by target of attack", "* %dark%"]
            , [false, "35", "* %move% +1", "* %attack% -1"]
            , [false, "46", "* %attack% -1", "* %range% 2", "** %target% 2", "** %muddle%", "** %fire%%use_element%: +2 %range%"]
            , [false, "50", "* %move% +0", "* %attack% +0"]
            , [false, "65", "* %move% -1", "* %attack% +1"]
            , [false, "77", "* %move% -1", "* %attack% -1 %aoe-triangle-2-side-with-black%", "** %poison%", "** %air%%use_element%: +1 %attack%"]
            , [true,  "82", "* %attack% +1", "** %range% 3", "* %fire%"]
            ]
        },
        { class: "Boss"
        , cards:
            [ [false, "11", "* Special 2"]
            , [false, "14", "* Special 2"]
            , [true,  "17", "* Special 2"]
            , [true,  "85", "* Special 1"]
            , [false, "79", "* Special 1"]
            , [false, "73", "* Special 1"]
            , [false, "36", "* %move% +0", "* %attack% +0"]
            , [false, "52", "* %move% -1", "* %attack% -1", "** %range% 3", "** %target% 2"]
            ]
        },
        { class: "Chaos Demon"
        , cards:
            [ [false,  "1", "* %move% +1", "* %attack% -1", "** %range% 3", "* %fire%%use_element%: %wound%"]
            , [false, "13", "* %move% -1", "* %attack% +0 %aoe-triangle-2-side-with-black%", "** %ice%%use_element%: Any time a figure attacks the Chaos Demon this round, that figure suffers 2 damage."]
            , [false, "20", "* %move% +0", "* %attack% -1 %aoe-triangle-2-side%", "** %range% 2", "* %air%%use_element%: %shield% 2"]
            , [false, "41", "* %move% +0", "* %attack% +0", "** Advantage", "* %light%%use_element%: %heal% 4 Self"]
            , [false, "52", "* %move% -1", "* %attack% +1", "* %dark%%use_element%: All enemies adjacent to the target suffer 1 damage."]
            , [false, "67", "* %move% -2", "* %attack% +1", "** %push% 2", "* %earth%%use_element%: %aoe-triangle-2-side-with-black%"]
            , [true,  "76", "* %move% +0", "* %attack% +0", "* %fire% %ice% %air% %earth% %light% %dark%"]
            , [true,  "98", "* %move% -1", "* %attack% -1", "* %any%%use_element%: %disarm%"]
            ]
        },
        { class: "Giant Viper"
        , cards:
            [ [true,  "32", "* %move% +0", "* %attack% +0", "** Add +2 Attack if the target is adjacent to any of the Giant Viper's allies."]
            , [true,  "32", "* %move% +0", "* %attack% +0", "** Add +2 Attack if the target is adjacent to any of the Giant Viper's allies."]
            , [false, "11", "* %shield% 1", "* %attack% +0"]
            , [false, "18", "* %move% +1", "** %jump%", "* %attack% -1", "** All attacks targeting Giant Viper this round gain Disadvantage."]
            , [false, "43", "* %move% +1", "** %jump%", "* %attack% -1", "** Target all adjacent enemies."]
            , [false, "58", "* %move% -1", "* %attack% +1"]
            , [false, "33", "* %move% +1", "** %jump%", "* %attack% +0", "** %target% 2"]
            , [false, "23", "* %move% -1", "* %attack% -1", "** %immobilize%", "* %attack% -1"]
            ]
        },
        { class: "Imp"
        , cards:
            [ [false, "05", "* %shield% 5", "* %heal% 1", "** Self","* %any%"]
            , [false, "37", "* %move% +0", "* %attack% +0","** %range% 3"]
            , [false, "37", "* %move% +0", "* %attack% +0","** %range% 3"]
            , [true,  "42", "* %move% +0", "* %attack% -1", "** %range% 3, %target% 2, %poison%"]
            , [true, "42", "* %move% +1", "* %heal% 2", "** %range% 3"]
            , [false, "76", "* %move% -1", "* %attack% +1", "** %range% 3",]
            , [true,  "42", "* %move% +0", "* %attack% -1", "** %range% 3, %target% 2, %curse%"]
            , [false, "24", "* %strengthen%", "** Affect all allies within %range% 2", "* %muddle%", "** Target all enemies within %range% 2"]
            ]
        },
        { class: "Living Corpse"
        , cards:
            [ [false, "21", "* %move% +1", "* %muddle% and %immobilize%", "** Target one adjacent enemy", "** %earth%%use_element%: Target suffers 2 damage"]
            , [false, "47", "* %move% +1", "* %attack% -1"]
            , [true,  "68", "* %move% +0", "* %attack% +0"]
            , [true,  "68", "* %move% +0", "* %attack% +0"]
            , [false, "81", "* %move% -1", "* %attack% +1"]
            , [false, "91", "* %move% +2", "* If this movement is performed, the Living Corpse suffers 1 damage."]
            , [false, "71", "* %move% +0", "* %attack% +1", "* %poison%", "** Target all adjacent enemies", "* %earth%"]
            , [false, "32", "* %attack% +2", "** %push% 1", "* If this attack is performed, the Living Corpse suffers 1 damage."]
            ]
        },
        { class: "Living Spirit"
        , cards:
            [ [true,  "22", "* %move% -1", "* %attack% -1", "** %range% 4", "** %muddle%"]
            , [true,  "33", "* %move% +0", "* %attack% -1", "** Target all enemies within range %range% 2"]
            , [false, "48", "* %move% +0", "* %attack% +0", "** %range% 3"]
            , [false, "48", "* %move% +0", "* %attack% +0", "** %range% 3",]
            , [false, "61", "* %attack% +0", "** %range% 3", "** %target% 2"]
            , [false, "75", "* %move% -1", "* %attack% +1", "** %range% 3", "* %heal% 1", "** Self", "* %ice%"]
            , [false, "55", "* %move% +0", "* %curse%", "** Target all enemies within range %range% 3", "* %ice%"]
            , [false, "67", "* %move% -1", "* %attack% +1", "** %range% 3", "** %ice%%use_element%: %disarm%"]
            ]
        },
        { class: "Monstrosity"
        , cards:
            [ [true,   "9", "* %move% +1", "* Any time a figure attacks the Monstrosity this round,", "* that figure suffers 2 damage"]
            , [false, "21", "* %move% +1", "* %attack% -1", "** Add +1 %attack% if the target is adjacent to any of the Monstrosity's allies."]
            , [false, "21", "* %move% +1", "* %attack% -1", "** Add +1 %attack% if the target is adjacent to any of the Monstrosity's allies."]
            , [false, "34", "* %move% +0", "* %attack% +0", "** %muddle%"]
            , [false, "39", "* %move% +0", "* %attack% +0"]
            , [true,  "52", "* %move% +0", "* %attack% +1", "** If this attack is performed, the ", "** Monstrosity suffers 1 damage."]
            , [false, "60", "* %move% -1", "* %attack% +1"]
            , [false, "74", "* %move% +0", "** Monstrosity suffers 1 damage.", "* %attack% +1", "** Target all adjacent enemies"]
            ]
        },
        { class: "Scout"
        , cards:
            [ [false, "29", "* %move% -1", "* %attack% -1", "** %range% 3"]
            , [false, "40", "* %move% +1", "* %attack% -1"]
            , [false,  "53", "* %move% +0", "* %attack% +0"]
            , [false,  "53", "* %move% -2", "* %attack% +0", "** %range% 3", "** %poison%"]
            , [false, "69", "* %move% -1", "* %attack% +1"]
            , [true, "92", "* %attack% +2", "** %poison% "]
            , [true, "40", "* %move% +1", "** %jump%", "* %loot% 1"]
            , [false, "78",  "* %attack% -1", "** %range% 4", "** %target% 2"]
            ]
        },
        { class: "Stone Golem"
        , cards:
            [ [false, "10", "** Any time a figure attacks the Stone Golem this round, that figure suffers 3 damage."]
            , [false, "28", "* %move% +1", "* %attack% +0", "** If the Move ability was performed, the Stone Golem suffers 1 damage."]
            , [true,  "51", "* %move% +1", "* %attack% -1"]
            , [false, "64", "* %move% +0", "* %attack% +0"]
            , [false, "72", "* %attack% +1", "** %range% 3", "** If this attack is performed, the Stone Golem suffers 2 damage"]
            , [true,  "90", "* %move% -1", "* %attack% +1"]
            , [false, "28", "* %move% +1", "* %attack% -2", "** %range% 3", "** %pull% 2", "** %immobilize%"]
            , [false, "83", "* %move% +0", "* %attack% -1", "** Target all adjacent enemies"]
            ]
        },
        { class: "Vermling Rider"
        , cards:
            [ [false,  "20", "* %attack% +0", "** %range% 4", "** Create one 3-damage trap in an adjacent empty hex closest to an enemy."]
            , [true,  "30", "* %move% +1", "* %heal% 3", "** Self"]
            , [false, "36", "* %move% +0", "* %attack% -1", "** %range% 4"]
            , [false, "50", "* %move% +0", "* %attack% +0"]
            , [false, "59", "* %attack% +0", "** %range% +3", "** %target% 2"]
            , [false, "70", "* %move% +0", "* %attack% -1", "** %disarm%"]
            , [false, "77", "* %move% -1", "* %attack% +0", "** %range% 3", "** %wound%"]
            , [true, "85", "* %push% 1", "** Target all adjacent enemies", "* %attack% +1", "** %range% 2"]
            ]
        }
];
