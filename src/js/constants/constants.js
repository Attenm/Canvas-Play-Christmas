
export const modes =  [
    {
        name : "slinky",
        bgImage : "https://media.istockphoto.com/id/1337221165/photo/colourful-slinky-spring-toy-on-a-black-background.jpg?s=612x612&w=0&k=20&c=5yEPL540aFUAciwGXUvdxV0aWxefFfrj_bpLdnGXhN4="
    },
    {
        name : "secondMode",
        bgImage : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmPnG0hZWB5-RFUOvvZqp9zcxy_UuyWamjuw&usqp=CAU"
    },
    {
        name : "thirdMode",
        bgImage : "https://i.vimeocdn.com/video/665321658-770ecc7e16eb218c49ac762ab10d6d3c7ad4b7a87bb00ae7713ac8b141192910-d_640x360.jpg"
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
            min : 0,
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
            max : 30,
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
        {
            name : 'amount',
            title : 'Particle Number',
            type : 'range',
            class : 'range',
            defaultValue : '50',
            min : 1,
            max : 200,
            step : 1
        },
        {
            name : 'opacity',
            title : 'Opacity', 
            type : 'range',
            class : 'range',
            defaultValue : '9',
            min : 0,
            max : 30,
            step : 1
        }
    ]
}