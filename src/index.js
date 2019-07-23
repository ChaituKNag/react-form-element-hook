import React, { useState, useEffect, useRef } from 'react';

const useReactFormElement = () => {
    const ref = useRef();
    const [isValid, setIsValid] = useState();
    const [value, setValue] = useState();

    const handleChange = (e) => {
        setValue(e.target.value);
        if(ref.current.checkValidity()) {
            setIsValid(true)
        } else {
            setIsValid(false);
        }
    }

    useEffect(() => {

        if(ref.current) {
            ref.current.addEventListener('change', handleChange);
            if(ref.current.checkValidity()) {
                setIsValid(true);
            } else {
                setIsValid(false);
            }
        }

        return () => {
            ref.current.removeEventListener('change', handleChange);
        }

    }, [ref.current]);

    useEffect(() => {
        if(ref.current) {
            setValue(ref.current.value);
        }
    }, [ref.current]);



    return [ref, value, isValid];
}

export {useReactFormElement};