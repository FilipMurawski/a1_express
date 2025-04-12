const Header = ({size, children, classt}: {size: "small" | "big"; children: string | React.ReactNode, classt?: string }) => {
    if(size === "big")
    return (
    <h2 className={` text-xl sm:text-2xl md-text-3xl lg:text-4xl text-[var(--primary-header-color)] max-w-2xl font-bold ${classt}`}>
    {children}
    </h2>
    ) 
    else {
        return (
        <h3 className={` text-base sm:text-lg md:text-xl lg:text-2xl text-[var(--secondary-header-color)] max-w-3xl leading-relaxed ${classt}`}>
        {children}
        </h3>
        )
    }
}

export { Header }