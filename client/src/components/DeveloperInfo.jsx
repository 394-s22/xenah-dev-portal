import React, { useState } from 'react';
import Chip from "@mui/material/Chip";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Avatar from '@mui/material/Avatar';
import Card from "@mui/material/Card";
import Rating from "@mui/material/Rating";

import AttributeSliderGroup from './AttributeSliderGroup';

const DeveloperInfo = ({ show, onClose, developer }) => {
  const [sampleValue, setSampleValue] = useState(2.5);

  return (
    <Modal open={show} onClose={onClose}>
      <Box 
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '40em',
          bgcolor: 'background.paper',
          border: '2px solid #000',
          boxShadow: 24,
          p: 4,
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '2em' }}>
          <div style={{width: 'auto' }}>
            <Avatar
              alt={developer.name + ' avatar'}
              sx={{ bgcolor: '#263448', height: 80, width: 80 }}
            >
              { developer.name.substr(0, 1) } 
            </Avatar>
          </div>
          <div style={{ marginLeft: '1em' }}>
            <div style={{display: 'flex', alignItems: 'center'}}>
              <h2 style={{ margin: 0}}>{ developer.name }</h2>
              <h2 style={{ margin: '0 0.3em', marginRight: '0.9em', fontWeight: 'normal', letterSpacing: '0.06em'}}>{ developer.level }</h2>
              <Chip label={developer.school}/>
            </div>
            <p style={{ margin: 0}}>{ developer.email }</p>
            <p style={{ margin: 0}}>Available { developer.timeCommitment }hr/wk </p>
          </div>
        </div>

        <div style={{ display: 'flex', width: '100%', justifyContent: 'flex-start'}}>
          <div>
            <h4 style={{ margin: 0, marginBottom: '0.4em' }}>Technologies</h4>
            <AttributeSliderGroup
              attributes={ developer.technologies.map(({ name, rating }) => [name, rating / 7]) }
            />
          </div>
          
          <div style={{ marginLeft: '2em' }}>
            <h4 style={{ margin: 0, marginBottom: '0.4em' }}>Topics</h4>
            <AttributeSliderGroup
              attributes={ developer.preferredTopics.map(({ name, rating }) => [name, rating / 7])}
            />
          </div>
        </div>
        <br/>
        <h4 style={{ margin: 0 }}>Preferred Languages</h4>
        {developer.preferredLanguages.map((language, index) => (
          <Chip key={index} label={language}/>
        ))}

        <div style={{ marginTop: '1em' }}>
          <h4 style={{ margin: 0 }}>Previous Projects</h4>
          <div style={{ display: 'flex', flewFlow: 'wrap'}}>
            {developer.projects.map((project, idx) => (
              <Card key={idx} style={{ width: '11em', padding: '0.5em', margin: '0.5em'}}>
                <h5 style={{ margin: 0 }}>{ project.name }</h5>
                <p style={{ margin: 0 }}>{ project.description }</p>
              </Card>
            ))}
          </div>
        </div>
        
        <h2>Admin Notes</h2>
        <div style={{display: "flex"}}>
          <div style={{display: "flex", flexDirection: "column"}}>
            <h4 style={{ margin: 0 }}>Work Ethtic</h4>
            <Rating
              name="simple-controlled"
              value={sampleValue}
              onChange={(event, newValue) => {
                setSampleValue(newValue);
              }}
              precision={0.5}
            />
          </div>
          <div style={{display: "flex", flexDirection: "column"}}>
            <h4 style={{ margin: 0 }}>Communication Skill</h4>
            <Rating
              name="simple-controlled"
              value={sampleValue}
              onChange={(event, newValue) => {
                setSampleValue(newValue);
              }}
              precision={0.5}
            />
          </div>
        </div>

        <div>
          <Button onClick={onClose}>Close</Button>
        </div>
      </Box>
    </Modal>
  );
}

export default DeveloperInfo;
