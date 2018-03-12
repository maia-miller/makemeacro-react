import React from 'react'

export default (props) => {
  const {dataTitle, title, selectOption, poses, optionList} = props

  return (
      <div className="field">
        <div className="control">
          <div className="select">
            <select onChange={selectOption}>
              <option defaultValue={title}>{title}</option>

              {optionList && optionList.map(option => <option name={dataTitle} value={option} >{option}</option>)}

            </select>
          </div>
        </div>
      </div>
    )
  }
