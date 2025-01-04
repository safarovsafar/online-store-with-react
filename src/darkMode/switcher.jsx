import useDarkSide from './useDarkSide'
import { useState } from 'react'
import { DarkModeSwitch } from 'react-toggle-dark-mode'

export default function Switcher() {
  const [colorTheme, setTheme] = useDarkSide()
  const [darkSide, setDarkSide] = useState(
    colorTheme === 'light' ? true : false
  )

  const toggleDarkMode = checked => {
    setTheme(colorTheme)
    setDarkSide(checked)
  }

  return (
    <>
      <div>
        <DarkModeSwitch
          size={50}
          checked={darkSide}
          onChange={toggleDarkMode}
        />
      </div>
    </>
  )
}