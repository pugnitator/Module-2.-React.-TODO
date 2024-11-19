import { React, useRef, useState } from "react";
import { styled } from "styled-components";
import SearchImg from "./SearchImg.svg"

export function SearchBar(props) {
  const {onSearch, onCancelSearch} = props;
  const [isSearch, setIsSearch] = useState(false)
  const input = useRef()

  const onClickSearch = () => {
    setIsSearch(true);
    onSearch(input.current.value)
  };

  const onClickCenceled = () => {
    if(isSearch) onCancelSearch();
    input.current.value = '';
    setIsSearch(false);
  }

  return (
    <div style={
      {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        alignItems: 'center',
        padding: '15px 10px 0px',
      }
    }>
    <SearchBarConteiner>
      <SearchInput ref={input} placeholder="Поиск..."/>
      <Button onClick={onClickSearch}>
        <SearchImage src={SearchImg} alt="search"/>
      </Button>
      <Button onClick={onClickCenceled}>Сбростиь</Button>
    </SearchBarConteiner>
    </div>
  );
}

const SearchBarConteiner = styled.div`
  margin: 0;
  width: 70%;
  min-width: 500px;
  display: flex;
  justify-content: center;
`;

const SearchInput = styled.input`
flex-grow: 1;
  min-width: 500px;
  type="text";
`

const Button = styled.button`
  box-sizing: border-box;
  margin: 0;
  padding: 2px;
`;

const SearchImage = styled.img`
  box-sizing: border-box;
  place-self: center;
  width: 20px;
  height: 20px;
`
