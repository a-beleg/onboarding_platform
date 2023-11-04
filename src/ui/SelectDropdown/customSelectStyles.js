const customSelectStyles = {
    input: (provided) => ({
        ...provided,
        fontFamily: 'Roboto',
        color: '#7927E1',
        fontSize: '16px',
        marginLeft: '12px',
    }),
    container: (provided) => ({
        ...provided,
        width: '100%',
        padding: '0px',
    }),
    valueContainer: (provided) => ({
        ...provided,
        padding: '0px',
        fontFamily: 'Roboto'
    }),
    dropdownIndicator: (provided, state) => ({
        ...provided,
        transition: '0.5s',
        transform: state.selectProps.menuIsOpen && 'rotate(180deg)',
        marginRight: '10px',
        'svg': {
            // fill: state.selectProps.menuIsOpen ? '#b9b6b6' : '#b9b6b6',
            strokeWidth: state.selectProps.menuIsOpen ? '0' : '0'
        }
    }),
    clearIndicator: (provided, state) => ({
        ...provided,
        position: 'absolute',
        right: '40px',
        'svg': {
            // fill: '#b9b6b6',
            strokeWidth: state.selectProps.menuIsOpen ? '0' : '0'
        }
    }),
    indicatorsContainer: (provided) => ({
        ...provided,
        'div': {
            padding: '0px'
        },
    }),
    indicatorSeparator: (provided) => ({
        ...provided,
        backgroundColor: 'transparent',
        cursor: 'pointer',
        padding: '0px'
    }),
    placeholder: (provided) => ({
        ...provided,
        color: '#B5ADC2',
        fontSize: '18px',
        lineHeight: '24px',
        fontWeight: '400',
        fontFamily: 'Roboto',
        marginLeft: '10px'
    }),
    singleValue: (provided) => ({
        ...provided,
        color: '#7927E1',
        fontSize: '18px',
        fontFamily: 'Roboto',
        fontWeight: '400',
        marginLeft: '10px'
    }),
    menu: (provided) => ({
        ...provided,
        padding: '18px 0px 19px',
        borderRadius: '8px',
        background: '#FFFFFF',
        boxShadow: '0px 0px 20px rgba(54, 25, 88, 0.08)',
    }),
    menuList: (provided) => ({
        ...provided,
        padding: '0px',
        '::-webkit-scrollbar': {
            backgroundColor: 'transparent'
        }
    }),
    option: (provided, state) => ({
        ...provided,
        fontFamily: 'Roboto',
        fontSize: '16px',
        lineHeight: '24px',
        paddingTop: '15px',
        paddingBottom: '15px',
        boxSizing: 'border-box',
        color: '#7927E1',
        cursor: 'pointer',
        backgroundColor: state.isSelected && "transparent",
        ':hover:not(active)': {
            backgroundColor: '#A283D8',
            color: '#fff'
        }
    }),
    noOptionsMessage: (provided) => ({
        ...provided,
        fontFamily: 'Roboto',
        '::first-letter': {
            textTransform: 'uppercase'
        }
    }),
    control:(provided, state) => ({
        ...provided,
        borderRadius: '40px'
    }),
    multiValue:(provided, state) => ({
        ...provided,
        display: 'none'
    })
}

export default customSelectStyles;
