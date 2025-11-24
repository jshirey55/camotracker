export default function Count() {
        const [count, setCount] = useState(0)

        const increment = () => {
            setCount(prevCount => prevCount + 1)
        }

    return(
        <>
        <button onClick={increment}></button>
        <div>{count}</div>
        </>
    )
}