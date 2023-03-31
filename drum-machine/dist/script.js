function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}class Kit extends React.Component {
  constructor(props)
  {
    super(props);_defineProperty(this, "playKeySound",





















































    e => {
      var keyPress = e.key;
      if (keyPress == keyPress.toLowerCase())
      {
        keyPress = keyPress.toUpperCase();
        var kId = document.getElementById(keyPress);
      } else
      {
        var kId = document.getElementById(keyPress);
      }

      //console.log(e.key)
      this.setState({
        display: kId.value,
        CurAudio: document.getElementById(kId.id).children[0].src,
        CurId: kId.id });

      console.log(this.state.CurId);
      document.getElementById(kId.id).children[0].volume = this.state.volume;
      document.getElementById(kId.id).children[0].play();
    });_defineProperty(this, "playSound",

    e => {

      this.setState({
        display: e.target.value,
        CurAudio: document.getElementById(e.target.id).children[0].src,
        CurId: e.target.id });

      document.getElementById(e.target.id).children[0].volume = this.state.volume;
      document.getElementById(e.target.id).children[0].play();
      console.log(e.target.id);
    });_defineProperty(this, "onOff",

    (e) =>
    {
      var volume = document.getElementById("volume-slider");
      if (e.target.checked)
      {
        this.setState({
          isOpen: true });


        volume.disabled = false;
      } else

      {
        this.setState({
          isOpen: false,
          display: "" });

        //console.log('fd')
        volume.disabled = true;
      }
    });this.state = { display: "", volume: 0.5, CurAudio: new Audio("http://21273.live.streamtheworld.com/LOS40_DANCE.mp3"), CurId: "", isOpen: false };this.volumeChange = this.volumeChange.bind(this);this.playSound = this.playSound.bind(this);this.playKeySound = this.playKeySound.bind(this);this.onOff = this.onOff.bind(this);}componentDidMount() {document.body.addEventListener('keydown', this.playKeySound); /* var swtt =document.getElementById("swt");
     
     swtt.addEventListener("change",function(){
       if(!this.checked)
       {
         // 
         console.log('f7');
         this.setState({isOpen: true}); 
       }
     else
       {
         
         console.log('fd');
         this.setState({isOpen: false}); 
       }
     }.bind(this));*/}componentWillUnmount() {document.body.removeEventListener('keydown', this.playKeySound);}volumeChange(e) {this.setState({ volume: e.currentTarget.value / 100, display: e.currentTarget.value }); /*var audio = document.getElementById(this.state.CurId).children[0];
    audio.volume = this.state.volume;*/}render() {let stat;if (this.state.isOpen) {stat = /*#__PURE__*/React.createElement(DrumPad, { playSound: this.playSound });} else {stat = /*#__PURE__*/React.createElement(DrumPadDisabled, { playSound: this.playSound });}return /*#__PURE__*/React.createElement("div", { class: "container-fluid back d-flex justify-content-center align-items-center" }, /*#__PURE__*/
    React.createElement("div", { id: "drum-machine" }, /*#__PURE__*/

    React.createElement("div", { class: "row" }, /*#__PURE__*/
    React.createElement("div", { class: "col-xs-6", id: "button-pack" },

    stat), /*#__PURE__*/


    React.createElement("div", { class: "col-xs-6 container-fluid d-flex justify-content-center" }, /*#__PURE__*/
    React.createElement("div", { class: "row" }, /*#__PURE__*/
    React.createElement("div", { class: "col-xs-8" }, /*#__PURE__*/
    React.createElement("label", { class: "switch" }, /*#__PURE__*/
    React.createElement("input", { type: "checkbox", id: "swt", onChange: this.onOff }), /*#__PURE__*/
    React.createElement("span", { class: "slider round" }))), /*#__PURE__*/



    React.createElement("div", { class: "col-xs-8", id: "display" }, /*#__PURE__*/
    React.createElement("p", null, this.state.display)), /*#__PURE__*/


    React.createElement("div", { class: "col-xs-8" }, /*#__PURE__*/
    React.createElement("input", { type: "range", id: "volume-slider", onChange: this.volumeChange, disabled: true })))))));








  }}
;


//const DrumPad=(props)=>{
class DrumPad extends React.Component {

  render() {
    return /*#__PURE__*/(
      React.createElement("div", { class: "container-fluid" }, /*#__PURE__*/
      React.createElement("div", { class: "row" }, /*#__PURE__*/
      React.createElement("div", { class: "col-xs-4" }, /*#__PURE__*/
      React.createElement("button", { type: "button", class: "drum-pad", id: "Q", value: "Heater 1", onClick: this.props.playSound }, "Q", /*#__PURE__*/React.createElement("audio", { src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3", class: "clip" }))), /*#__PURE__*/


      React.createElement("div", { class: "col-xs-4" }, /*#__PURE__*/
      React.createElement("button", { type: "button", class: "drum-pad", id: "W", value: "Heater 2", onClick: this.props.playSound }, "W", /*#__PURE__*/React.createElement("audio", { src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3", class: "clip" }))), /*#__PURE__*/


      React.createElement("div", { class: "col-xs-4" }, /*#__PURE__*/
      React.createElement("button", { type: "button", class: "drum-pad", id: "E", value: "Heater 3", onClick: this.props.playSound }, "E", /*#__PURE__*/React.createElement("audio", { src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3", class: "clip" })))), /*#__PURE__*/



      React.createElement("div", { class: "row" }, /*#__PURE__*/
      React.createElement("div", { class: "col-xs-4" }, /*#__PURE__*/
      React.createElement("button", { type: "button", class: "drum-pad", id: "A", value: "Heater 4", onClick: this.props.playSound }, "A", /*#__PURE__*/React.createElement("audio", { src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3", class: "clip" }))), /*#__PURE__*/


      React.createElement("div", { class: "col-xs-4" }, /*#__PURE__*/
      React.createElement("button", { type: "button", class: "drum-pad", id: "S", value: "Clap", onClick: this.props.playSound }, "S", /*#__PURE__*/React.createElement("audio", { src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3", class: "clip" }))), /*#__PURE__*/


      React.createElement("div", { class: "col-xs-4" }, /*#__PURE__*/
      React.createElement("button", { type: "button", class: "drum-pad", id: "D", value: "Open-HH", onClick: this.props.playSound }, "D", /*#__PURE__*/React.createElement("audio", { src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3", class: "clip" })))), /*#__PURE__*/



      React.createElement("div", { class: "row" }, /*#__PURE__*/
      React.createElement("div", { class: "col-xs-4" }, /*#__PURE__*/
      React.createElement("button", { type: "button", class: "drum-pad", id: "Z", value: "Kick-n'-Hat", onClick: this.props.playSound }, "Z", /*#__PURE__*/React.createElement("audio", { src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3", class: "clip" }))), /*#__PURE__*/


      React.createElement("div", { class: "col-xs-4" }, /*#__PURE__*/
      React.createElement("button", { type: "button", class: "drum-pad", id: "X", value: "Kick", onClick: this.props.playSound }, "X", /*#__PURE__*/React.createElement("audio", { src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3", class: "clip" }))), /*#__PURE__*/


      React.createElement("div", { class: "col-xs-4" }, /*#__PURE__*/
      React.createElement("button", { type: "button", class: "drum-pad", id: "C", value: "Closed-HH", onClick: this.props.playSound }, "C", /*#__PURE__*/React.createElement("audio", { src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3", class: "clip" }))))));





  }}
;


class DrumPadDisabled extends React.Component {

  render() {
    return /*#__PURE__*/(
      React.createElement("div", { class: "container-fluid" }, /*#__PURE__*/
      React.createElement("div", { class: "row" }, /*#__PURE__*/
      React.createElement("div", { class: "col-xs-4" }, /*#__PURE__*/
      React.createElement("button", { type: "button", class: "drum-pad", id: "Q", value: "", onClick: this.props.playSound }, "Q", /*#__PURE__*/React.createElement("audio", { src: "", class: "clip" }))), /*#__PURE__*/


      React.createElement("div", { class: "col-xs-4" }, /*#__PURE__*/
      React.createElement("button", { type: "button", class: "drum-pad", id: "W", value: "", onClick: this.props.playSound }, "W", /*#__PURE__*/React.createElement("audio", { src: "", class: "clip" }))), /*#__PURE__*/


      React.createElement("div", { class: "col-xs-4" }, /*#__PURE__*/
      React.createElement("button", { type: "button", class: "drum-pad", id: "E", value: "", onClick: this.props.playSound }, "E", /*#__PURE__*/React.createElement("audio", { src: "", class: "clip" })))), /*#__PURE__*/



      React.createElement("div", { class: "row" }, /*#__PURE__*/
      React.createElement("div", { class: "col-xs-4" }, /*#__PURE__*/
      React.createElement("button", { type: "button", class: "drum-pad", id: "A", value: "", onClick: this.props.playSound }, "A", /*#__PURE__*/React.createElement("audio", { src: "", class: "clip" }))), /*#__PURE__*/


      React.createElement("div", { class: "col-xs-4" }, /*#__PURE__*/
      React.createElement("button", { type: "button", class: "drum-pad", id: "S", value: "", onClick: this.props.playSound }, "S", /*#__PURE__*/React.createElement("audio", { src: "", class: "clip" }))), /*#__PURE__*/


      React.createElement("div", { class: "col-xs-4" }, /*#__PURE__*/
      React.createElement("button", { type: "button", class: "drum-pad", id: "D", value: "", onClick: this.props.playSound }, "D", /*#__PURE__*/React.createElement("audio", { src: "", class: "clip" })))), /*#__PURE__*/



      React.createElement("div", { class: "row" }, /*#__PURE__*/
      React.createElement("div", { class: "col-xs-4" }, /*#__PURE__*/
      React.createElement("button", { type: "button", class: "drum-pad", id: "Z", value: "", onClick: this.props.playSound }, "Z", /*#__PURE__*/React.createElement("audio", { src: "", class: "clip" }))), /*#__PURE__*/


      React.createElement("div", { class: "col-xs-4" }, /*#__PURE__*/
      React.createElement("button", { type: "button", class: "drum-pad", id: "X", value: "", onClick: this.props.playSound }, "X", /*#__PURE__*/React.createElement("audio", { src: "", class: "clip" }))), /*#__PURE__*/


      React.createElement("div", { class: "col-xs-4" }, /*#__PURE__*/
      React.createElement("button", { type: "button", class: "drum-pad", id: "C", value: "", onClick: this.props.playSound }, "C", /*#__PURE__*/React.createElement("audio", { src: "", class: "clip" }))))));





  }}
;

const TypesOfFruit = () => {
  return /*#__PURE__*/(
    React.createElement("div", null, /*#__PURE__*/
    React.createElement("h2", null, "Fruits:"), /*#__PURE__*/
    React.createElement("ul", null, /*#__PURE__*/
    React.createElement("li", null, "Apples"), /*#__PURE__*/
    React.createElement("li", null, "Blueberries"), /*#__PURE__*/
    React.createElement("li", null, "Strawberries"), /*#__PURE__*/
    React.createElement("li", null, "Bananas"))));



};


ReactDOM.render( /*#__PURE__*/React.createElement(Kit, null), document.getElementById("app"));
//let audio = new Audio("http://21273.live.streamtheworld.com/LOS40_DANCE.mp3");
/*let volume = document.getElementById('volume-slider');
volume.addEventListener("change", function(e) {
    audio.volume = e.currentTarget.value / 100;
})*/