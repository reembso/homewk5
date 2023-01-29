import React, { useState } from "react";
import Button from "../UI/button/Button";
import FormInput from "../UI/formInput/FormInput";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContainerInput = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const ContainerInputDate = styled.div`
  margin-left: 9.625rem;
`;

const ContainerButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: -20px;
  margin-right: 120px;
`;

const ExpenseForm = ({ onShowForm, onNewExpenseadd }) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");

  const cancelHanler = (event) => {
    event.preventDefault();
    onShowForm();
  };
  const titleInputChangeHandler = (event) => {
    setTitle(event.target.value);
  };
  const priceInputChangeHandler = (event) => {
    const value = event.target.value;
    if (value.charAt(0) !== "-") {
      setPrice(event.target.value);
    }
  };
  const dateInputChangeHandler = (event) => {
    setDate(event.target.value);
  };

  const saveHandler = (event) => {
    event.preventDefault();

    const expense = {
      title,
      date,
      price,
    };
    setTitle("");
    setDate("");
    setPrice("");

    onNewExpenseadd(expense);
  };

  return (
    <form>
      <Container>
        <ContainerInput>
          <FormInput
            labelName={"Название"}
            inputType={"text"}
            placeholder={"..."}
            id={"name"}
            value={title}
            onChange={titleInputChangeHandler}
          />
          <FormInput
            labelName={"Количество"}
            inputType={"numder"}
            id={"price"}
            value={price}
            onChange={priceInputChangeHandler}
          />
        </ContainerInput>
        <ContainerInputDate>
          <FormInput
            labelName={"Дата"}
            inputType={"date"}
            placeholder={"ДД.ММ.ГГГГ"}
            id={"date"}
            value={date}
            onChange={dateInputChangeHandler}
          />
        </ContainerInputDate>
      </Container>

      <ContainerButton>
        <Button style={"btnСancel"} onClick={cancelHanler}>
          Отмена
        </Button>
        <Button onClick={saveHandler} style={"btnСheck"}>
          Сохранить
        </Button>
      </ContainerButton>
    </form>
  );
};

export default ExpenseForm;
