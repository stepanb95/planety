import './App.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { useState } from 'react';

function PlanetList() {
  const [showText, setShowText, setShowText1] = useState(false);

  const handleButtonClickM = () => {
    setShowText(true);
  };


  
  const handleButtonClickV = () => {
    setShowText(true);
  };
  
  
  return (
    


    <>
    <div class = "Seznam"><Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://cdn.administrace.tv/2022/04/23/medium_169/872bd4ca83b789bcac80dc2dd55e5806.jpg" />
      <Card.Body>
        <Card.Title>Mercury</Card.Title>
        <div>
      <button onClick={handleButtonClickM}>Zobraz text</button>
      {showText && <p>Merkur je první planeta sluneční soustavy.</p>}
    </div>
        
        
      </Card.Body>
    </Card><Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://fontech.startitup.sk/wp-content/uploads/2020/10/new-project-2-1200x675.png?x94873" />
        <Card.Body>
          <Card.Title>Venus</Card.Title>
          <button onClick={handleButtonClickV}>Zobraz text</button>
      {showText && <p>Venuše je druhá planeta sluneční soustavy.</p>}
        </Card.Body>
      </Card>
      
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.volty.cz/files/uploads/2021/06/earth-5550591_1920-1200x675.jpg" />
      <Card.Body>
        <Card.Title>Earth</Card.Title>
        <button onClick={handleButtonClickM}>Zobraz text</button>
      {showText && <p>Země je třetí planeta sluneční soustavy.</p>}
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://bleedingcool.com/wp-content/uploads/2018/07/marsvianasa-1200x675.jpg" />
      <Card.Body>
        <Card.Title>Mars</Card.Title>
        <button onClick={handleButtonClickM}>Zobraz text</button>
      {showText && <p>Mars je čtvrtá planeta sluneční soustavy.</p>}
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://cdn.vox-cdn.com/thumbor/J85lBLditBHKUEguiZh8rPEmWqg=/0x0:3805x1288/1200x675/filters:focal(1599x340:2207x948)/cdn.vox-cdn.com/uploads/chorus_image/image/59799667/pia21974.0.jpg" />
      <Card.Body>
        <Card.Title>Jupyter</Card.Title>
        <button onClick={handleButtonClickM}>Zobraz text</button>
      {showText && <p>Jupyter je pátá planeta sluneční soustavy.</p>}
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://cdn.forumcomm.com/dims4/default/9ae8a2b/2147483647/strip/false/crop/432x243+0+17/resize/1200x675!/quality/90/?url=https%3A%2F%2Fforum-communications-production-web.s3.us-west-2.amazonaws.com%2Fbrightspot%2Fcb%2F81%2F1e792d88436e838fc8215fdb8e09%2Fsaturn-2021-hst-nasa-esa-amy-simon-nasa-gsfc-michael-h.%20Wong%20UC%20Berkeley.jpg" />
      <Card.Body>
        <Card.Title>Saturn</Card.Title>
        <button onClick={handleButtonClickM}>Zobraz text</button>
      {showText && <p>Saturn je šestá planeta sluneční soustavy.</p>}
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.mustak.bg/wp-content/uploads/2020/03/uran-1200x675.jpg" />
      <Card.Body>
        <Card.Title>Uran</Card.Title>
        <button onClick={handleButtonClickM}>Zobraz text</button>
      {showText && <p>Uran je sedmá planeta sluneční soustavy.</p>}
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://imageresizer.static9.net.au/mRMYujj0I4VR9d37JrkoGlwGJ14=/1200x675/https%3A%2F%2Fprod.static9.net.au%2Ffs%2Fb0259f57-e892-4615-afbe-8457aa6d1d2d" />
      <Card.Body>
        <Card.Title>Neptun</Card.Title>
        <button onClick={handleButtonClickM}>Zobraz text</button>
      {showText && <p>Neptun je osmá planeta sluneční soustavy.</p>}
      </Card.Body>
    </Card>
    
      
    </div> </>

    
  );
}



export default PlanetList;
