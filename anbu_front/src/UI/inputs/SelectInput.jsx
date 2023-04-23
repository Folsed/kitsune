import { useState } from 'react'
import styles from './input.module.css'
import './input.module.css'
import Select from "react-select"


const SelectInput = ({ options, placeholder, setValue, value, error, isLoading }) => {
    const [loading, setLoading] = useState(false)

    const labels = options.map((item) => ({
        value: item.id,
        label: item.name
    }));

    return (
        <Select
            options={labels}
            isLoading={isLoading}
            isMulti
            name="colors"
            className={styles.multiSelect}
            closeMenuOnSelect={false}
            placeholder={placeholder}
            value={value}
            onChange={(val) => setValue(val)}
            styles={{
                control: (baseStyles, state) => ({
                    ...baseStyles,
                    borderRadius: 0,
                    backgroundColor: 'transparent',
                    border: 0,
                    borderBottom: error ? '1px solid red' : '1px solid #dadada29',
                    borderColor: 0,
                    boxShadow: 'none',
                    '&:hover': {
                        borderColor: 0,
                    },
                }),
                valueContainer: (baseStyles) => ({
                    ...baseStyles,
                    padding: 0,
                }),
                indicatorSeparator: (baseStyles) => ({
                    ...baseStyles,
                    backgroundColor: '#dadada29',
                }),
                menu: (baseStyles) => ({
                    ...baseStyles,
                    borderRadius: 0,
                    backgroundColor: '#000',

                }),
                input: (baseStyles) => ({
                    ...baseStyles,
                    color: '#dadada',
                }),
                option: (baseStyles) => ({
                    ...baseStyles,
                    backgroundColor: 'transparent',
                    '&:hover': {
                        backgroundColor: '#dadada29',
                    },
                    '&:active': {
                        backgroundColor: '#181818',
                    },
                }),
                multiValue: (baseStyles) => ({
                    ...baseStyles,
                    backgroundColor: '#dadada29',
                    borderRadius: 0,
                }),
                multiValueLabel: (baseStyles) => ({
                    ...baseStyles,
                    color: '#dadada',
                }),
                multiValueRemove: (baseStyles) => ({
                    ...baseStyles,
                    transition: '.2s',
                    '&:hover': {
                        color: '#dadada29',
                        backgroundColor: 'transparent',
                    },
                }),
                clearIndicator: (baseStyles) => ({
                    ...baseStyles,
                    '&:hover': {
                        color: '#dadada29',
                    },
                }),
                dropdownIndicator: (baseStyles) => ({
                    ...baseStyles,
                    '&:hover': {
                        color: '#dadada29',
                    },
                }),

            }}
        />
    )
}

export default SelectInput