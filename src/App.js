import React from 'react';
import logo from './img/logo.png';
import './js/animals';
import animals from './js/animals';
import names from './js/names';

class App extends React.Component {
  constructor({ img, animal, names, fullname, btnTxt }) {
    super(img, animal, names, fullname, btnTxt);
    this.state = { 
      img,
      animal,
      names,
      fullname,
      btnTxt
    }
  }

  buttonText = [
    'OWN! WANNA +',
    'SO CUTE! NEXT!',
    'LOVE IT! -->',
    'NEEEEEXT <3',
    'OWN! S2 -> NEXT!',
    'WANNA THIS AND +',
    'OOOOOOWNN! >>>>'
  ];

  btnTxt() {
    return this.buttonText[Math.floor(Math.random() * (this.buttonText.length - 0) + 0)];
  }

  getNextAnimal = () => {
    this.setState({
      fullname: `${this.state.names[0][Math.floor(Math.random() * (this.state.names[0].length - 0) + 0)]} ${this.state.names[1][Math.floor(Math.random() * (this.state.names[1].length - 0) + 0)]}`,  
      img: this.state.animal[Math.floor(Math.random() * (this.state.animal.length - 0) + 0)],
      btnTxt: this.btnTxt()
    });
  }

  componentDidMount(){
    this.setState({
      btnTxt: this.btnTxt(),
      animal: animals(),
      img: animals()[Math.floor(Math.random() * (animals().length - 0) + 0)],      
      names: names(),
      fullname: `${names()[0][Math.floor(Math.random() * (names()[0].length - 0) + 0)]} ${names()[1][Math.floor(Math.random() * (names()[1].length - 0) + 0)]}`  
    });
  }

  render() {
    return(
      <div className="App">
        <div className="central">
          <img src={logo} className="logo" alt="just a random pet..." />

          <div className="border-container-image">
            <div className="container-image row" style={
                { 
                  backgroundImage: `url(${this.state.img})`,
                  backgroundPosition: 'center center',
                  backgroundSize: 'cover'
                }
            }></div>
          </div>

          <div className="container-name">
            {this.state.fullname}
          </div>

          <div className="container-buttons">
            <button type="button" className="btn-next" onClick={this.getNextAnimal}>{this.state.btnTxt}</button>
          </div>
        </div>
      </div>
    )
  };
}

export default App;