import React from 'react'
import { colors } from '@diebraga/tokens'

const ColorsGrid = () => {
  return Object.entries(colors).map(([key, color]) => {
    return (
      <div key={key} style={{ background: color, padding: '2rem' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontFamily: 'monospace',
            color: key === 'white' || key === 'gray100' ? '#000' : '#fff',
          }}
        >
          <strong>${key}</strong>
          <span>{color}</span>
        </div>
      </div>
    )
  })
}

export { ColorsGrid }
