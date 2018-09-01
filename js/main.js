!function() {
    var duration = 50
    function writeCode(prefix, code, fn) {
        let container = document.querySelector('#code')
        let styleTag = document.querySelector('#styleTag')
        let n = 0
        let id
        id = setTimeout(function runCode() {
            n += 1
            container.innerHTML = Prism.highlight(
                prefix + code.substring(0, n),
                Prism.languages.css
            )
            styleTag.innerHTML = code.substring(0, n)
            container.scrollTop = container.scrollHeight
            if (n < code.length) {
                id = setTimeout(runCode, duration)
            } else {
                fn && fn.call()
            }
        }, duration)
    }
    $('.actions').on('click', 'button', function(e) {
        let $button = $(e.currentTarget) // button
        let speed = $button.attr('data-speed')
        console.log(speed)
        $button
            .addClass('active')
            .siblings('.active')
            .removeClass('active')
        switch (speed) {
            case 'slow':
                duration = 100
                break
            case 'normal':
                duration = 50
                break
            case 'fast':
                duration = 10
                break
        }
    })
    let code = `
/*我需要一点代码高亮*/
#code{
    background: rgb(30,30,30);
    padding: 16px;
    font-family: Arial, Helvetica, sans-serif;
}
.token.selector{
    color: #690;
}
.token.property{
    color: #906;
}
.token.function{
    color: #DD4A68;
}
#code{
    color: #727298;
}
/*
* 首先，需要准备皮卡丘的皮
*/
.container {
  height: 70vh;
  width: 400px;
  position: relative;
  background: #02546A;
  margin: auto;
}


.batman {
  z-index: 2;
}

.head {
  background: #171514;
  height: 30%;
  width: 40%;
  position: absolute;
  left: 29.5%;
  top: 19%;
}

.top-left {
  clip-path: polygon(0 0, 0% 100%, 50% 100%);
  height: 25%;
  width: 27%;
  background: #171514;
  position: relative;
  top: -24.75%;
}

.top-right {
  clip-path: polygon(100% 0, 50% 100%, 100% 100%);
  height: 25%;
  width: 27%;
  background: #171514;
  position: relative;
  top: -49.75%;
  left: 73%;
}

.top-middle {
  background: #171514;
  position: relative;
  height: 40%;
  width: 81%;
  border-radius: 50%;
  top: -65%;
  left: 9.5%;
}

.left-eye {
  clip-path: polygon(0 33%, 50% 100%, 100% 66%);
  background: #DDD197;
  height: 30%;
  width: 30%;
  z-index: 3;
  position: relative;
  top: -50%;
  left: 10%;
}

.right-eye {
  clip-path: polygon(0 66%, 50% 100%, 100% 33%);
  background: #DDD197;
  height: 30%;
  width: 30%;
  z-index: 3;
  position: relative;
  top: -80%;
  left: 60%;
}

.mouth {
  clip-path: polygon(
    50% 25%,
    100% 10%,
    90% 75%,
    65% 100%,
    35% 100%,
    10% 75%,
    0 10%
  );
  background: #B88B48;
  height: 19%;
  width: 35%;
  position: absolute;
  left: 32%;
  top: 40%;
  z-index: 3;
}

.cape {
  background: #171514;
  position: absolute;
  height: 37%;
  width: 100%;
  top: 63%;
}

.cape-left {
  clip-path: polygon(100% 50%, 0% 100%, 100% 100%);
  background: #171514;
  position: absolute;
  height: 50%;
  width: 50%;
  top: 13.5%;
}

.cape-right {
  clip-path: polygon(0 50%, 0% 100%, 100% 100%);
  background: #171514;
  position: absolute;
  height: 50%;
  width: 50%;
  top: 13.5%;
  left: 49%;
}

.shirt {
  clip-path: polygon(50% 50%, 0% 100%, 100% 100%);
  position: absolute;
  z-index: 3;
  background: #302f2c;
  height: 50%;
  width: 85%;
  top: 50%;
  left: 7.5%;
}

.logo-oval {
  position: relative;
  height: 38%;
  width: 55%;
  background: #A97927;
  border-radius: 50%;
  top: 61.5%;
  left: 22.5%;
}

.black-bat {
  position: relative;
  height: 95%;
  width: 95%;
  background: #171514;
  border-radius: 50%;
  top: 2.5%;
  left: 2.5%;
}

.to1 {
  position: absolute;
  background: #A97927;
  height: 34%;
  width: 18%;
  z-index: 4;
  top: 0%;
  left: 24.5%;
  border-radius: 50% 0 50% 50%;
}

.to2 {
  position: absolute;
  background: #A97927;
  height: 35%;
  width: 18%;
  z-index: 4;
  top: 0.1%;
  left: 55%;
  border-radius: 0 50% 50% 50%;
}

.ho1 {
  position: absolute;
  background: #A97927;
  height: 8%;
  width: 11%;
  z-index: 4;
  top: 0;
  left: 43%;
  border-radius: 0 0 40px 40px;
}

.bo1 {
  position: absolute;
  background: #A97927;
  height: 47%;
  width: 16%;
  z-index: 4;
  top: 56%;
  left: 20%;
  border-radius: 50%;
  transform: rotate(-40deg);
}

.bo2 {
  position: absolute;
  background: #A97927;
  height: 41%;
  width: 11%;
  z-index: 4;
  top: 61%;
  left: 36%;
  border-radius: 50% 50% 0 50%;
  transform: rotate(-22deg);
}

.bo3 {
  position: absolute;
  background: #A97927;
  height: 41%;
  width: 11%;
  z-index: 4;
  top: 61%;
  left: 53%;
  border-radius: 50% 50% 50% 10%;
  transform: rotate(22deg);
}

.bo4 {
  position: absolute;
  background: #A97927;
  height: 47%;
  width: 16%;
  z-index: 4;
  top: 56%;
  left: 63%;
  border-radius: 50%;
  transform: rotate(40deg);
}

.bottom {
  background: #A97927;
  width: 30%;
  height: 8%;
  position: absolute;
  top: 92%;
  left: 35%;
}

.credits {
  font-family: sans-serif;
  color: #DDD197;
  font-size: 2em;
  text-align: center;
  text-shadow: 1px 1px 3px #000;
  margin: 2% auto;
  font-family: 'Poppins', sans-serif;
}

/*
* 好了，这只皮卡丘送给你
*/`
    writeCode('', code)
}.call()
