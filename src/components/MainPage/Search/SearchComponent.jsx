import { React, useRef } from "react";
import { styled } from "styled-components";
import SearchImg from "./SearchImg.svg";
import SortArrowImg from "./SortArrowImg.svg";
import { useDispatch, useSelector } from "react-redux";
import { taskSliceActions } from "../../../reduxTK/taskSlice";

export function SearchBar() {
  const dispatch = useDispatch();
  const isSorted = useSelector(state => state.task.isSorted)
  const input = useRef();

  const onClickCenceled = () => {
    console.log("Отмена");
    dispatch(taskSliceActions.setSearchQuery(''));
    dispatch(taskSliceActions.setIsSorted(false));
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        alignItems: "center",
        padding: "15px 10px 0px",
      }}
    >
      <SearchBarConteiner>
        <Button id="sort" onClick={() => dispatch(taskSliceActions.setIsSorted(!isSorted))}>
          А-Я
          <SortImg src={SortArrowImg} alt="sorting" isSorted={isSorted} />
        </Button>
        <SearchInput ref={input} placeholder="Поиск..." />
        <Button onClick={() => dispatch(taskSliceActions.setSearchQuery(input.current.value))}>
          <SearchImage src={SearchImg} alt="search" />
        </Button>
        <Button onClick={onClickCenceled}>Сбросить</Button>
      </SearchBarConteiner>
    </div>
  );
}

const SearchBarConteiner = styled.div`
  margin: 0;
  width: 70%;
  min-width: 500px;
  display: flex;
  justify-content: space-between;
  gap: 2px;
`;

const SearchInput = styled.input`
  flex-grow: 1;
  type="text";
`;

const Button = styled.button`
  box-sizing: content-box;
  display: flex;
  align-items: center;
  margin: 0;
  padding: 3px 10px;
  height: 25px;
  border: none;
  border-radius: 2px;
  background-color: #d2c3ff;
  &:hover {
    outline: none;
    background-color: #9f86db;
  }
`;

const SearchImage = styled.img`
  box-sizing: border-box;
  width: 18px;
  height: 18px;
`;

const SortImg = styled.img`
  box-sizing: border-box;
  width: 10px;
  height: 5px;
  rotate: ${(props) => (props.isSorted === true ? "180deg" : "0deg")};
`;
