import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import api from "../../service/api";
import Menu from "../Menu";
import { Container } from "./syle";

const Form = () => {
  const [value, SetValue] = useState();
  const formSchema = yup.object().shape({
    amount: yup
      .number("Informe o valor da venda")
      .required("Digite o valor da venda")
      .positive(),
    installments: yup
      .number("Em quantas parcelas")
      .required("Quantidade de parcelas")
      .positive()
      .integer(),
    mdr: yup
      .number("Informe o percentual de MDR")
      .required("Digite o percentual de MDR")
      .positive(),
  });

  const { register, handleSubmit, reset } = useForm({
    resolver: yupResolver(formSchema),
  });

  const handleAdd = ({ amount, installments, mdr }) => {
    const data = {
      amount,
      installments,
      mdr,
    };
    api
      .post("", data)
      .then((response) => {
        SetValue(response.data);
      })
      .catch((err) => {
        SetValue(err.response);
      });

    reset();
  };

  return (
    <Container>
      <section>
        <div>
          <form onSubmit={handleSubmit(handleAdd)}>
            <h1>Simule sua Antecipação</h1>
            <div className="form">
              <label>Informe o valor da venda</label>
              <input
                placeholder="Valor superior ou  igual a R$1000,00"
                type="number"
                {...register("amount")}
              />
            </div>
            <div className="form">
              <label>Em quantas parcelas</label>
              <input type="number" {...register("installments")} />
              <span>Máximo de 12 parcelas</span>
            </div>
            <div className="form">
              <label>Informe o percentual de MDR</label>
              <input type="number" {...register("mdr")} />
            </div>
            <button type="submit">Enviar</button>
          </form>
        </div>
      </section>
      <section className="menu">
        <Menu value={value} />
      </section>
    </Container>
  );
};

export default Form;
