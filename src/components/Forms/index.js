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
    amount: yup.number().required("Informe o valor da venda").positive(),
    installments: yup
      .number()
      .required("Quantidade de parcelas")
      .positive()
      .integer(),
    mdr: yup.number().required("Percentual de MDR").positive(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const Add = ({ amount, installments, mdr }) => {
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
  };

  return (
    <Container>
      <section>
        <div>
          <form onSubmit={handleSubmit(Add)}>
            <h1>Simule sua Antecipação</h1>
            <div className="form">
              <label>Informe o valor da venda</label>
              <input
                placeholder="Valor superior ou  igual a R$1000,00"
                type="number"
                {...register("amount")}
              />
              {errors.amount?.message}
            </div>
            <div className="form">
              <label>Em quantas parcelas</label>
              <input type="number" {...register("installments")} />
              {errors.installments?.message}
              <span>Máximo de 12 parcelas</span>
            </div>
            <div className="form">
              <label>Informe o percentual de MDR</label>
              <input type="number" {...register("mdr")} />
              {errors.mdr?.message}
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
