import { useEffect, useState, useRef } from 'react'

export function useLazyDisplay() {
    const element = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(function () {
        const observer = new window.IntersectionObserver(function (entries) {
            const { isIntersecting } = entries[0]

            if (isIntersecting) {
                setVisible(true)
                observer.disconnect()
            }
        })

        observer.observe(element.current)
    }, [element])

    return [visible, element]
}