class Kit extends React.Component{
  constructor(props)
  {
    super(props);
    this.state={
      display:"",
      volume:0.5,  
      CurAudio:new Audio("http://21273.live.streamtheworld.com/LOS40_DANCE.mp3"),
      CurId:"",
      isOpen:false,
      
    }
    
    this.volumeChange=this.volumeChange.bind(this);
    this.playSound=this.playSound.bind(this);
    this.playKeySound=this.playKeySound.bind(this);
    this.onOff=this.onOff.bind(this);
  }
  
  componentDidMount() {
    document.body.addEventListener('keydown', this.playKeySound);
   /* var swtt =document.getElementById("swt");
    
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
    }.bind(this));*/
    
    
  }

  componentWillUnmount() {
    document.body.removeEventListener('keydown', this.playKeySound);
  }
  
  volumeChange(e) {
    this.setState({
      volume:e.currentTarget.value / 100,
      display:e.currentTarget.value,
    });
    
    /*var audio = document.getElementById(this.state.CurId).children[0];
    audio.volume = this.state.volume;*/
    
}
  
  
 playKeySound=(e)=>{
    var keyPress=e.key;
    if(keyPress==keyPress.toLowerCase())
    {
      keyPress=keyPress.toUpperCase();
      var kId=document.getElementById(keyPress);
    }
   else{
    var kId=document.getElementById(keyPress);
   }
   
    //console.log(e.key)
    this.setState({
    display:kId.value,
    CurAudio:document.getElementById(kId.id).children[0].src,
    CurId:kId.id
  });
   console.log(this.state.CurId);
   document.getElementById(kId.id).children[0].volume=this.state.volume;
   document.getElementById(kId.id).children[0].play();
 }    
 
playSound=(e)=>{
  
  this.setState({
    display:e.target.value,
    CurAudio:document.getElementById(e.target.id).children[0].src,
    CurId:e.target.id
  });
  document.getElementById(e.target.id).children[0].volume=this.state.volume;
  document.getElementById(e.target.id).children[0].play();
  console.log(e.target.id);
 }
  
 onOff=(e)=>
 { 
     var volume=document.getElementById("volume-slider") ;
      if(e.target.checked)
      {
          this.setState({
            isOpen:true,
      
          });
          volume.disabled=false;
      }
    else
      {
        this.setState({
            isOpen:false,
             display:""
          });
        //console.log('fd')
        volume.disabled=true;
      }
 }
  
  
  render()
  {
    let stat
    if(this.state.isOpen)
    {
      stat=<DrumPad playSound={this.playSound}/>
    }
    else
      {
        stat=<DrumPadDisabled playSound={this.playSound}/>
      }
    
    return(
     <div class="container-fluid back d-flex justify-content-center align-items-center" >
      <div id="drum-machine">

          <div class="row">
            <div class="col-xs-6" id="button-pack">
              
              {stat}
            </div>
            
            <div class="col-xs-6 container-fluid d-flex justify-content-center">
                <div class="row">
                  <div class="col-xs-8">
                    <label class="switch" >
                      <input type="checkbox" id="swt" onChange={this.onOff}/>
                      <span class="slider round"></span>
                    </label>
                  </div>
              
                <div class="col-xs-8" id="display">
                  <p>{this.state.display}</p>
                </div>
                  
                <div class="col-xs-8">
                  <input type="range" id="volume-slider" onChange={this.volumeChange} disabled/>  
                </div>

            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
};
          
          
//const DrumPad=(props)=>{
class DrumPad extends React.Component{  
  
  render(){
  return(
     <div class="container-fluid">
       <div class="row">
         <div class="col-xs-4" >
           <button type="button" class="drum-pad" id='Q' value="Heater 1" onClick={this.props.playSound} >Q<audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" class="clip"></audio></button>
         </div>
       
         <div class="col-xs-4">
           <button type="button" class="drum-pad" id="W" value="Heater 2" onClick={this.props.playSound}>W<audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"  class="clip"></audio></button>
         </div>
       
         <div class="col-xs-4">
           <button type="button" class="drum-pad" id="E" value="Heater 3" onClick={this.props.playSound}>E<audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" class="clip"></audio></button>
         </div>
       </div>
       
       <div class="row">
         <div class="col-xs-4">
            <button type="button" class="drum-pad" id="A" value="Heater 4" onClick={this.props.playSound}>A<audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" class="clip"></audio></button>
         </div>
       
         <div class="col-xs-4">
            <button type="button" class="drum-pad" id="S" value="Clap" onClick={this.props.playSound}>S<audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" class="clip"></audio></button>
         </div>
       
         <div class="col-xs-4">
            <button type="button" class="drum-pad" id="D" value="Open-HH" onClick={this.props.playSound}>D<audio src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" class="clip"></audio></button>
         </div>
       </div>
       
       <div class="row">
         <div class="col-xs-4" >
            <button type="button" class="drum-pad" id="Z" value="Kick-n'-Hat" onClick={this.props.playSound}>Z<audio src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" class="clip"></audio></button>
         </div>
       
         <div class="col-xs-4" >
            <button type="button" class="drum-pad" id="X" value="Kick" onClick={this.props.playSound}>X<audio src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" class="clip"></audio></button>
         </div>
       
         <div class="col-xs-4" >
            <button type="button" class="drum-pad" id="C" value="Closed-HH" onClick={this.props.playSound}>C<audio src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" class="clip"></audio></button>
         </div>
       </div>
       
     </div>
      );
    }
};      


class DrumPadDisabled extends React.Component{  
  
  render(){
  return(
     <div class="container-fluid">
       <div class="row">
         <div class="col-xs-4" >
           <button type="button" class="drum-pad" id='Q' value="" onClick={this.props.playSound} >Q<audio src="" class="clip"></audio></button>
         </div>
       
         <div class="col-xs-4">
           <button type="button" class="drum-pad" id="W" value="" onClick={this.props.playSound}>W<audio src=""  class="clip"></audio></button>
         </div>
       
         <div class="col-xs-4">
           <button type="button" class="drum-pad" id="E" value="" onClick={this.props.playSound}>E<audio src="" class="clip"></audio></button>
         </div>
       </div>
       
       <div class="row">
         <div class="col-xs-4">
            <button type="button" class="drum-pad" id="A" value="" onClick={this.props.playSound}>A<audio src="" class="clip"></audio></button>
         </div>
       
         <div class="col-xs-4">
            <button type="button" class="drum-pad" id="S" value="" onClick={this.props.playSound}>S<audio src="" class="clip"></audio></button>
         </div>
       
         <div class="col-xs-4">
            <button type="button" class="drum-pad" id="D" value="" onClick={this.props.playSound}>D<audio src="" class="clip"></audio></button>
         </div>
       </div>
       
       <div class="row">
         <div class="col-xs-4" >
            <button type="button" class="drum-pad" id="Z" value="" onClick={this.props.playSound}>Z<audio src="" class="clip"></audio></button>
         </div>
       
         <div class="col-xs-4" >
            <button type="button" class="drum-pad" id="X" value="" onClick={this.props.playSound}>X<audio src="" class="clip"></audio></button>
         </div>
       
         <div class="col-xs-4" >
            <button type="button" class="drum-pad" id="C" value="" onClick={this.props.playSound}>C<audio src="" class="clip"></audio></button>
         </div>
       </div>
       
     </div>
      );
    }
};      

const TypesOfFruit = () => {
  return (
    <div>
      <h2>Fruits:</h2>
      <ul>
        <li>Apples</li>
        <li>Blueberries</li>
        <li>Strawberries</li>
        <li>Bananas</li>
      </ul>
    </div>
  );
};                  


ReactDOM.render(<Kit/>,document.getElementById("app"))
//let audio = new Audio("http://21273.live.streamtheworld.com/LOS40_DANCE.mp3");
/*let volume = document.getElementById('volume-slider');
volume.addEventListener("change", function(e) {
    audio.volume = e.currentTarget.value / 100;
})*/


  