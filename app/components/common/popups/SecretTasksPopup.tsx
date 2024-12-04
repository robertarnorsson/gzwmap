import { Link } from "@remix-run/react";
import { X } from "lucide-react";
import { useLocalStorage } from "~/context/LocalStorageContext"

export const SecretTaskPopup = () => {
  const { actions } = useLocalStorage();

  return (
    <div className="absolute bottom-4 right-4 max-w-80 z-[99980]">
      <button
        className="absolute top-4 right-4"
        onClick={() => {
          actions.popup.toggleSecretTask()
        }}
      >
        <X className="w-4 h-4" />
      </button>
      <div className="grid-bg border p-4">
        <h3 className="text-lg font-semibold">See the secret tasks</h3>
        <p className="text-sm text-muted-foreground">The map now has some of the secret tasks and more is added when we find out. To enable the secret tasks you can open the sidebar and go to the <Link to='/settings' className="underline">settings</Link>. There you will find the switch to turn on the secret tasks. Now on the map the secret tasks will be marked purple.</p>
      </div>
    </div>
  )
}