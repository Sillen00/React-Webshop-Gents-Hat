import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'

export function RadioButton() {
  return (
    <FormControl>
      <FormLabel id='demo-radio-buttons-group-label'>In stock</FormLabel>
      <RadioGroup
        row
        aria-labelledby='demo-radio-buttons-group-label'
        defaultValue='yes'
        name='radio-buttons-group'
      >
        <FormControlLabel value='female' control={<Radio />} label='Yes' />
        <FormControlLabel value='male' control={<Radio />} label='No' />
      </RadioGroup>
    </FormControl>
  )
}
