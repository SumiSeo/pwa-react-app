import React, { useState } from "react";
import { ADD_EXPENSE, ADD_INCOME } from "../queries/queries";
import { useMutation } from "@apollo/client";

interface ChildProps {
  purpose: string;
}

interface Expense {
  amount: number;
  description: string;
  id: number;
  title: string;
}

interface NewExpense {
  amount: number;
  description: string;
  title: string;
}

let parsedAmount: number;
const AddLedger: React.FC<ChildProps> = ({ purpose }) => {
  const [amount, setAmount] = useState<number>(0);
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const [AddExpense, { error, data, loading }] = useMutation(ADD_EXPENSE);
  const [AddIncome] = useMutation(ADD_INCOME);
  if (loading) {
    console.log(loading);
  }
  if (!loading) {
    console.log("data", data);
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (purpose === "Expense") {
      AddExpense({
        variables: {
          amount: amount,
          description: description,
          title: title,
        },
      });
    }
    AddIncome({
      variables: {
        amount: amount,
        description: description,
        title: title,
      },
    });
  };

  return (
    <div className="ledger">
      <div className="ledger__container">
        <h2 className="ledger__name">{purpose}</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="ledger__box ledger__title">
            <label htmlFor="ledger__title">Title</label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              name="ledger__title"
              id="ledger__title"
              type="text"
            />
          </div>
          <div className="ledger__box ledger__amount">
            <label htmlFor="ledger__amount">Amount</label>
            <input
              onChange={(e) => {
                parsedAmount = parseInt(e.target.value);
                setAmount(parsedAmount);
              }}
              value={parsedAmount}
              name="ledger__amount"
              id="ledger__amount"
              type="number"
            />
          </div>
          <div className="ledger__box ledger__desc">
            <label htmlFor="ledger__desc">Description</label>
            <textarea
              className="ledger__textarea"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              name="ledger__desc"
              id="ledger__desc"
              cols={30}
              rows={2}
            />
          </div>
          <input value="Add" className="ledger__submit" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default AddLedger;
