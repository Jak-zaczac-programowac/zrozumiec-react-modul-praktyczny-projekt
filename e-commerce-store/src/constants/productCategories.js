const GENDERS = [
    {
        categoryName: "Mężczyzna",
        path: "mezczyzna",
    },
    {
        categoryName: "Kobieta",
        path: "kobieta",
    },
    {
        categoryName: "Dziecko",
        path: "dziecko",
    },
];

const CATEGORIES = [
    {
        categoryName: "Odzież",
        path: "odziez",
        subCategories: [
            {
                categoryName: "Koszulki",
                path: "koszulki",
            },
            {
                categoryName: "Swetry",
                path: "swetry",
            },
            {
                categoryName: "Spodnie",
                path: "spodnie",
            },
        ],
    },
    {
        categoryName: "Obuwie",
        path: "obuwie",
        subCategories: [
            {
                categoryName: "Elegancke",
                path: "eleganckie",
            },
            {
                categoryName: "Sportowe",
                path: "sportowe",
            },
            {
                categoryName: "Sneakersy",
                path: "sneakersy",
            },
        ],
    },
    {
        categoryName: "Akcesoria",
        path: "akcesoria",
        subCategories: [
            {
                categoryName: "Torby",
                path: "torby",
            },
            {
                categoryName: "zegarki",
                path: "zegarki",
            },
        ],
    },
];

export { CATEGORIES, GENDERS };
