import React, { useState } from "react";
import BasicSelectForm from "./form_components/BasicSelectForm";
import MultipleSelectForm from "./form_components/MultipleSelectForm";
import Button from '@mui/material/Button';
import { levelOptions, technologyOptions, timeOptions, topicOptions, universityOptions } from '../utils/devInfoOptions'

const ModifyDeveloperForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [projects, setProjects] = useState('');
  const [resume, setResume] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');
  // technologies need name AND rating
  const [selectedTechnologies, setSelectedTechnologies] = useState(new Array(5).fill(null));
  const [preferredLanguages, setPreferredLanguages] = useState([]);
  // translate into boolean
  const [isAvailable, setIsAvailable] = useState('');
  const [selectedTime, setSelectedTime] = useState('')
  // topics needs name AND rating
  const [selectedTopics, setSelectedTopics] = useState([]);
  const [university, setUniversity] = useState('');

  const TechSelect=({index}) => {
    const setStateHelper=() => {
      tempTechnologies = [...selectedTechnologies] 
      technology = []
    }
    return (
      <div style={{display: 'flex', flexDirection: 'column', width: '20%'}}>
        <BasicSelectForm options={technologyOptions} state={selectedTechnologies[index]} setState={setSelectedTechnologies} label='Technologies'/>
      </div>
    )
  }

  const handleUpdateDeveloper = () => {
    const updated_developer = {}
  }

  return(
    <div style={{display: 'flex', flexDirection: 'column', width: '95%', overflowY: 'auto', margin: 'auto'}}>
      <BasicSelectForm options={levelOptions} state={selectedLevel} setState={setSelectedLevel} label='Level'/>
      <MultipleSelectForm options={technologyOptions} state={selectedTechnologies} setState={setSelectedTechnologies} label='Technologies'/>
      <div style={{display: 'flex', flexDirection: 'row', width: '98%'}}>

      </div>
      <MultipleSelectForm options={technologyOptions} state={preferredLanguages} setState={setPreferredLanguages} label='Preferred Language'/>
      <BasicSelectForm options={['Yes', 'No']} state={isAvailable} setState={setIsAvailable} label='Available'/>
      <BasicSelectForm options={timeOptions} state={selectedTime} setState={setSelectedTime} label='Hours per Week'/>
      <MultipleSelectForm options={topicOptions} state={selectedTopics} setState={setSelectedTopics} label='Interested Topics'/>
      <BasicSelectForm options={universityOptions} state={university} setState={setUniversity} label='University'/>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1em'}}>
        <Button style={{ marginRight: '1.5em', backgroundColor: 'green', color: 'white', width: '10em'}}>Update</Button>
      </div>
    </div>
  )
}

export default ModifyDeveloperForm;