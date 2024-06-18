export const modes =  [
    {
        name : "slinky",
        bgImage : "https://media.istockphoto.com/id/1337221165/photo/colourful-slinky-spring-toy-on-a-black-background.jpg?s=612x612&w=0&k=20&c=5yEPL540aFUAciwGXUvdxV0aWxefFfrj_bpLdnGXhN4="
    },
    {
        name : "molecular",
        bgImage : "https://png.pngtree.com/background/20230625/original/pngtree-illustrated-background-of-molecular-structure-in-3d-picture-image_4041157.jpg"
    },
    {
        name : "snow",
        bgImage : "https://img.goodfon.ru/wallpaper/big/d/5b/zima-sneg-snezhinki-fon-goluboi-christmas-blue-winter-back-6.jpg"
    }
];

export const settings = {
    slinky : [
        {
            name: 'radius',
            title : 'Radius', 
            type : 'range',
            class : 'range',
            defaultValue : 50,
            min : 1,
            max : 250,
            step : 1
        },
        {
            name: 'line-width',
            title : 'Line Width',
            class : 'range',
            type : 'range',
            defaultValue : 2,
            min : 0.2,
            max : 50,
            step : 0.2
        },
        {
            name: 'color',
            title : 'Color',
            type : 'select',
            class : 'select',
            defaultValue : 'Random',
            options : ['random', 'red', 'lawngreen', 'cyan', 'magenta']
        },
    ],
    molecular : [
        {
            name: 'radius',
            title : 'Radius', 
            type : 'range',
            class : 'range',
            defaultValue : 15,
            min : 1,
            max : 250,
            step : 1
        },
        {
            name: 'line-width',
            title : 'Line Width', 
            type : 'range',
            class : 'range',
            defaultValue : 1,
            min : 0,
            max : 5,
            step : 0.25,
        },
        {
            name: 'speed',
            title : 'Speed', 
            type : 'range',
            class : 'range',
            defaultValue : 3,
            min : 0,
            max : 15,
            step : 1,
        },
        {
            name: 'max-length',
            title : 'Max Length', 
            type : 'range',
            class : 'range',
            defaultValue : 10,
            min : 0,
            max : 100,
            step : 1,
        },
    ],
    snow : [
        {
            name: 'radius',
            title : 'Radius', 
            type : 'range',
            class : 'range',
            defaultValue : 50,
            min : 1,
            max : 250,
            step : 1
        },
    ],
}