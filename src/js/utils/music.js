
class Music {
    play() {
        window.onmousedown = function(){
            let audio = new Audio('audio/FrankOcean-Pink_White.mp3');
            console.log(audio.nodeType);
            let initialVolume = 0.1;
            audio.volume = initialVolume;
            console.log(audio)

            let volumeUp = setInterval(()=>{
                audio.volume += 0.1;
                console.log(audio.volume);

                if (audio.volume > 0.8) {
                    clearInterval(volumeUp);
                    console.log(audio.volume);
                }
            },1000)

            audio.autoplay = true;

            window.onmousedown = null;
            window.onblur = function(){
                audio.volume = audio.volume / 2;
                window.onfocus = function(){
                    audio.volume = 0.8;
                }
            }
        }
    }
}

export const music = new Music();

