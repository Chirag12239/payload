'use client'

import * as React from 'react'

import { useField } from '@payloadcms/ui'
import './styles.css'

export const ColorPicker: React.FC<{ path: string; label?: string; field: { label?: string } }> = ({ path, label, field }) => {
  const { value, setValue } = useField<string>({ path })
  
  // Resolve label from prop or field config
  const labelToRender = label || field?.label || path
  
  // Default to white or transparent if unused, but keep input clean if undefined.
  // value might be undefined initially.
  
  const [color, setColor] = React.useState(value || '')

  // Sync internal state with payload value
  React.useEffect(() => {
    setColor(value || '')
  }, [value])

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVal = e.target.value
    setColor(newVal)
    setValue(newVal)
  }

  // Basic validation to see if it's a valid hex for the color input preview
  const isHex = /^#[0-9A-F]{6}$/i.test(color)

  return (
    <div className="color-picker-field">
      <label className="field-label">
        {typeof labelToRender === 'string' ? labelToRender : 'Color'}
      </label>
      <div className="color-picker-input-group">
        <input
          type="color"
          value={isHex ? color : '#000000'}
          onChange={handleColorChange}
          className="color-picker-swatch"
          disabled={!isHex && color !== '' && !/^#[0-9A-F]{3}$/i.test(color)} // Disable picker if it's strictly not hex-like? Or just let it overwrite?
          // If user typed rgba(...), the color picker input is useless as a preview usually, 
          // but clicking it would replace the value with a hex. That's a feature.
        />
        <input
          type="text"
          value={color}
          onChange={handleColorChange}
          placeholder="#000000 or rgba(0,0,0,1)"
          className="color-picker-text"
        />
      </div>
    </div>
  )
}
