import { useCallback, useRef, useState } from 'react'
import Link from 'next/link'

export default function Search() {
    const searchRef = useRef(null)
    const [query, setQuery] = useState('')
    const [active, setActive] = useState(false)
    const [results, setResults] = useState([])

    const searchEndPoint = (query) => `/api/search?q=${query}`

    const onChange = useCallback((event) => {
        const query = event.target.value;
        setQuery(query)
        if (query.length) {
            fetch(searchEndPoint(query))
                .then(res => res.json())
                .then(res => {
                    setResults(res.results)
                })
        } else {
            setResults([])
        }
    }, [])

    const onFocus = useCallback(() => {
        setActive(true)
        window.addEventListener('click', onClick)
    }, [])

    const onClick = useCallback((event) => {
        if (searchRef.current && !searchRef.current.contains(event.target)) {
            setActive(false)
            window.removeEventListener('click', onClick)
        }
    }, [])

    return (
        <form className='relative'>
            <div className="focus-within:text-gray-800" ref={searchRef}>
                <input className="p-2 rounded-lg border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" onChange={onChange} onFocus={onFocus} placeholder='Search Users' type='text' value={query} />
                {active && results.length > 0 && (
                    <ul className='font-semibold absolute z-20 p-1 bg-white mt-1 border-2 rounded-lg'>
                        {results.map(({ id, firstName, lastName, email }) => (
                            <li className="hover:bg-yellow-200" key={id}>
                                <Link href={`/users/edit/${encodeURI(id)}`}>
                                    <a className="m-4">{firstName} {lastName}</a>
                                </Link>
                                <span className='italic text-xs text-red-600'>{email}</span>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </form>
    )
}