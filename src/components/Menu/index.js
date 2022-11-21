import { Container } from "./style";

const Menu = ({ value }) => {
  return (
    <Container>
      <h4>
        <i>VOCÊ RECEBERÁ:</i>
      </h4>
      <div>
        <p>
          <i>
            Amanhã:{" "}
            <strong>
              {value &&
                value["1"]?.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
            </strong>
          </i>
        </p>
        <p>
          <i>
            Em 15 dias:{" "}
            <strong>
              {value &&
                value["15"]?.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
            </strong>
          </i>
        </p>
        <p>
          <i>
            Em 30 dias:{" "}
            <strong>
              {value &&
                value["30"]?.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
            </strong>
          </i>
        </p>
        <p>
          <i>
            Em 90 dias:{" "}
            <strong>
              {value &&
                value["90"]?.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
            </strong>
          </i>
        </p>
      </div>
    </Container>
  );
};

export default Menu;
