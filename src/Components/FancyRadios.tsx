import React, { FC } from 'react';
import styled from 'styled-components';

const StyledFancyRadiosContainer = styled.div`
    border: 2px solid #000;
    border-radius: 8px;
    display: flex;
    flex-flow: row nowrap;
    align-items: stretch;

    input {
        display: none;
    }
`;

const StyledLabel = styled.label<{ checked: boolean }>`
    display: flex;
    flex-grow: 1;
    justify-content: center;
    padding: 20px;
    color: ${({ checked }) => (checked ? '#F00' : '#000')};
`;

type PropsType = {
    name: string;
    options: Array<{
        value: string;
        label: string;
    }>;
    selected: string;
    onChange(selectedValue: string): void;
};

const FancyRadios: FC<PropsType> = props => (
    <StyledFancyRadiosContainer>
        {props.options.map(option => (
            <StyledLabel checked={props.selected === option.value}>
                <input
                    type="radio"
                    name={props.name}
                    value={option.value}
                    checked={props.selected === option.value}
                    onChange={({ target }) => {
                        props.onChange(target.value);
                    }}
                />
                {option.label}
            </StyledLabel>
        ))}
    </StyledFancyRadiosContainer>
);

export default FancyRadios;
