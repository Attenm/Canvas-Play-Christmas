export const modeListElem = document.querySelector('.modes__list');

export const modes =  [
    {
        name : "Silly Spring",
        bgImage : "https://i.pinimg.com/564x/16/d3/71/16d371ddf4f4db8ca0e0c5ce5c9ff4ce.jpg"
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
    sillySpring : {
        radius : {
            name : 'Radius', 
            type : 'range',
            defaultValue : 50,
        },
        lineWidth : {
            name : 'Line Width',
            type : 'range',
            defaultValue : 2,
        },
        color : {
            type : 'select',
            defaultValue : 'Random',
            options : ['Random']
        }
    }
}