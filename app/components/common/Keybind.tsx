import { useEffect, useState } from "react"
import { detectDevice } from "~/lib/utils"

type KeyboardInput = {
  name: string
  windows: string
  mac: string
  type: 'keyboard'
}

type MouseInput = {
  name: string
  action: 'left' | 'right' | 'middle' | 'double'
  type: 'mouse'
}

export type KBInput = KeyboardInput | MouseInput

export const Keybind = ({ input }: { input: KBInput}) => {
  const [isMac, setIsMac] = useState(false)

  useEffect(() => {
    setIsMac(detectDevice() === 'MacOS')
  }, [])

  if (input.type === 'keyboard') {
    const shortcut = isMac ? input.mac : input.windows
    return (
      <kbd className="inline-flex items-center justify-center rounded px-0.5 py-0 text-[10px] font-sans font-semibold bg-muted text-muted-foreground">
        {shortcut.split(' + ').map((key, keyIndex, array) => (
          <span key={keyIndex} className="flex items-center">
            <span className="px-1">{key}</span>
            {keyIndex < array.length - 1 && <span className="text-muted-foreground/50 px-0.5">+</span>}
          </span>
        ))}
      </kbd>
    )
  } else {
    return (
      <kbd className="inline-flex items-center justify-center rounded px-0.5 py-0 text-[10px] font-sans font-semibold bg-muted text-muted-foreground">
        <span className="flex items-center">
          {input.action.charAt(0).toUpperCase() + input.action.slice(1)} Click
        </span>
      </kbd>
    )
  }
}