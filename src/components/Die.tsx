
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
        >
            {value}
        </button>
    )
}

export default Die