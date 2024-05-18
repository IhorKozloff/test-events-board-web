import {
    SelectWrapper,
    SelectBtn,
    SelectOptionsList,
    SelectOptionsItem,
    IconSVG
} from './CustomSelect.styled';
import { useState, useEffect, useRef } from 'react';
import React from 'react';

const defaultSelectDataSet = {
    title: 'Example title',
    data: [
        { text: 'example text 1', value: 'example value 1'},
        { text: 'example text 2', value: 'example value 2'},
        { text: 'example text 3', value: 'example value 3'},
        { text: 'example text 4', value: 'example value 4'},
    ]
};

interface IProps {
  items: {
    title: string;
    data: {
        text: string;
        value: string;
    }[]
  };
  changeValue: (value: string) => void
}

export const CustomSelect = ({ items = defaultSelectDataSet, changeValue }: IProps) => {
    const [selectedText, setSelectedTex] = useState(items.title);
    const [openStatus, setOpenStatus] = useState(false);
    const refToggleDropDown = useRef<HTMLButtonElement>(null);

    function onSelectClick() {
        setOpenStatus(!openStatus);
    }
  
    function onSelectChange(event: React.MouseEvent<HTMLUListElement, MouseEvent>) {
        const target = event.target as HTMLUListElement;

        if (target.nodeName !== 'LI') {
            return;
        }
  
        const itemName = target.textContent!;
        const itemValue = target.dataset.itemvalue!;
  
        setSelectedTex(itemName);
        changeValue(itemValue);
        setOpenStatus(!openStatus);
    }
    function handleOutsideDropDown(event: MouseEvent) {
        if (openStatus === true) {
            if (refToggleDropDown.current) {
                if (!refToggleDropDown.current.contains(event.target as HTMLElement)) {
                    setOpenStatus(false);
                }
            }
        }
    }
  
    useEffect(() => {
        window.addEventListener('click', handleOutsideDropDown);
        return () => {
            window.removeEventListener('click', handleOutsideDropDown);
        };
    });
    return (
        <SelectWrapper className="select__wrapper">
            <SelectBtn
                className="select__button"
                ref={refToggleDropDown}
                onClick={onSelectClick}
            >
                <span className="select__button__active-text">
                    {selectedText}
                </span>
                {openStatus === false && 
                <IconSVG id="icon-diagram-tab-arrow-down" viewBox="0 0 58 32" width="18" height="9">
                    <path d="M3.938 1.881l-2.057 2.057 27.21 27.21 27.21-27.21-2.057-2.057-25.153 25.153z"/>
                </IconSVG>}
                {openStatus === true && (
                    <IconSVG id="icon-diagram-tab-arrow-down" className="rotated-svg" viewBox="0 0 58 32" width="18" height="9">
                        <path d="M3.938 1.881l-2.057 2.057 27.21 27.21 27.21-27.21-2.057-2.057-25.153 25.153z"/>
                    </IconSVG>
                )}
  
            </SelectBtn>
  
            {openStatus === true && (
                <SelectOptionsList
                    className="select__options-wrapper options"
                    onClick={event => {
                        onSelectChange(event);
                    }}
                >
                    {items &&
              items.data.map(({ text, value }) => {
                  return (
                      <SelectOptionsItem
                          key={text}
                          className="options__item"
                          data-itemvalue={value}
                      >
                          {text}
                      </SelectOptionsItem>
                  );
              })}
                </SelectOptionsList>
            )}
        </SelectWrapper>
    );
};