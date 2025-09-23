
type PropT = {
    value: number
}

const Die = ({ value }: PropT) => {
    return (
        <button
            className={`${(value === 4 || value === 7) ? 'dice dice-highlighted' : 'dice'}`}
        >
            {value}
        </button>
    )
}

export default Die