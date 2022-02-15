import logo from './logo.svg';
import './App.css';
import Rando from 'js-rando';

function App() {
  let rando = new Rando()
  return (
    <div className="App">
      <h1>JS-Rando Examples</h1>
    <div class="content">
        <div class="section">
            <h2>Random value between 0 & 1</h2>
            <div class="sub-section">
                <h3>Method:&nbsp</h3>
                <h3>rando.Random()</h3>
            </div>
            <div class="sub-section">
                <h3 id="output">Output:&nbsp</h3>
                <h3 id="random">{rando.Random()}</h3>
            </div>
        </div>

        <div class="section">
            <h2>Random Integer between 1 & 10</h2>
            <div class="sub-section">
                <h3>Method:&nbsp</h3>
                <h3>rando.RandomInt(1, 11)</h3>
            </div>
            <div class="sub-section">
                <h3 id="output">Output:</h3>
                <h3 id="random-int">{rando.RandomInt(1, 11)}</h3>
            </div>
        </div>

        <div class="section">
            <h2>Random Float between 10 & 20 with 3 significant digits</h2>
            <div class="sub-section">
                <h3>Method:&nbsp</h3>
                <h3>rando.RandomFloat(10, 21, 3)</h3>
            </div>
            <div class="sub-section">
                <h3 id="output">Output:</h3>
                <h3 id="random-float">{rando.RandomFloat(10, 21, 3)}</h3>
            </div>
        </div>

        <div class="section">
            <h2>Random Array Element</h2>
            <div class="sub-section">
                <h3>Method:&nbsp</h3>
                <h3>rando.RandomElement(["dog", "cat", "fish", "bear"])</h3>
            </div>
            <div class="sub-section">
                <h3 id="output">Output:</h3>
                <h3 id="random-element">{rando.RandomElement(["dog", "cat", "fish", "bear"])}</h3>
            </div>
        </div>

        <div class="section">
            <h2>Random Hex Digit</h2>
            <div class="sub-section">
                <h3>Method:&nbsp</h3>
                <h3>rando.RandomHex()</h3>
            </div>
            <div class="sub-section">
                <h3 id="output">Output:</h3>
                <h3 id="random-hex">Hello World</h3>
            </div>
        </div>

        <div class="section">
            <h2>Random Hex Color</h2>
            <div class="sub-section">
                <h3>Method:&nbsp</h3>
                <h3>rando.RandomHexColor()</h3>
            </div>
            <div class="sub-section">
                <h3 id="output">Output:</h3>
                <h3 id="random-hex-color-text">Random Hex Color</h3>
            </div>
            <div class="sub-section">
                <h3 id="output">JQuery Application:</h3>
                <h4 class="color-block" id="random-hex-color">$('#random-hex-color').css("background-color", `${rando.RandomHexColor()}`)
                </h4>
            </div>
        </div>

        <div class="section">
            <h2>Random RBG Color</h2>
            <div class="sub-section">
                <h3>Method:&nbsp</h3>
                <h3>rando.RandomRBG()</h3>
            </div>
            <div class="sub-section">
                <h3 id="output">Output:</h3>
                <h3 id="random-rbg-color-text">Random Hex Color</h3>
            </div>
            <div class="sub-section">
                <h3 id="output">JQuery Application:</h3>
                <h4 class="color-block" id="random-rbg-color">$('#random-rbg-color').css("background-color", `${rando.RandomRGBColor()}`)
            </h4>
            </div>
        </div>
        
        
        <div class="section">
            <h2>Random RBGA Color</h2>
            <div class="sub-section">
                <h3>Method:&nbsp</h3>
                <h3>rando.RandomRBGA()</h3>
            </div>
            <div class="sub-section">
                <h3 id="output">Output:</h3>
                <h3 id="random-rbga-color-text">Random Hex Color</h3>
            </div>
            <div class=""sub-section>
                <h3 id="output">JQuery Application:</h3>
                <h4 class="color-block" id="random-rbga-color">$('#random-rbga-color').css("background-color", `${rando.RandomRGBAColor()}`)
                </h4>
            </div>
        </div>
    </div>
    </div>
  );
}

export default App;
