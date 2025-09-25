
type PropT = {
    value: number
    isHeld?: boolean
    id: number
    hold: (id: number) => void
}

const Die = ({ value, isHeld, id, hold }: PropT) => {
    return (
        <button
            onClick={() => hold(id)}
            className={`${isHeld ? 'dice dice-highlighted' : 'dice'}`}
            aria-pressed={isHeld}
            aria-label={`Die with value ${value}, ${isHeld ? 'held' : 'not held'}`}
        >
            {value}
        </button>
    )
}

export default Die