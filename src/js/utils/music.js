
class Music {
    play() {
        window.onmousedown = function(){
            let audio = new Audio('audio/FrankOcean-Pink_White.mp3');
            let initialVolume = 0.1;
            audio.volume = initialVolume;
            audio.autoplay = true;

            let volumeUp = setInterval(()=>{
                audio.volume += 0.1;
                if (audio.volume > 0.8) {
                    clearInterval(volumeUp);
                }
            }, 1500);

            window.onblur = function(){
                audio.volume = audio.volume / 2;
                window.onfocus = function(){
                    audio.volume = 0.8;
                }
            }
        }
        
        window.onmouseup = function() {
            window.onmousedown = null;
        }

    }
}

export const music = new Music();

