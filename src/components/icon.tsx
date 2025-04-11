const Icon = ({viewbox, d}:{viewbox: string, d: string}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox={viewbox} className="w-16 h-16" fill="currentColor" width={64} height={64}>
            <path d={d}/>
        </svg>
    )
}

export default Icon;