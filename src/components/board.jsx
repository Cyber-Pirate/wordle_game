export default function CreateBoard({ isGuessed, guess, word }) {
    const wl = word.length
    return (
    <div className="word_row flex-row">
    {new Array(wl).fill(0).map((_, i) => {
        const bgColor = !isGuessed
        ? 'bg-default'
        : guess[i] === word[i]
        ? 'bg-green'
        : word.includes(guess[i])
        ? 'bg-yellow'
        : 'bg-default';

        const tileContent =
          guess[i] === ' ' || guess[i] === ''
            ? '' // Render an empty div for space or empty string
            : guess[i];

        return (
        <div className={`word_tile flex-row ${bgColor}`} key={i}>
            {tileContent}
        </div>
        );
    })}
    </div>
    )
}