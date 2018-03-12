import React from 'react'

export default function FilterOptions ({option, targetOption, setTarget}) {
  return (
        <option onClick={() => setTarget(option)}>>
          {option.option}
        </option>
  )
}
