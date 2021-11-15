import React from "react";
interface ChildProps {
  title: string;
}

const AddLedger: React.FC<ChildProps> = ({ title }) => {
  return (
    <div className="ledger">
      <div className="ledger__container">
        <h2 className="ledger__name">{title}</h2>
        <form>
          <div className="ledger__box ledger__title">
            <label htmlFor="ledger__title">Title</label>
            <input name="ledger__title" id="ledger__title" type="text" />
          </div>
          <div className="ledger__box ledger__amount">
            <label htmlFor="ledger__amount">Amount</label>
            <input name="ledger__amount" id="ledger__amount" type="text" />
          </div>
          <div className="ledger__box ledger__desc">
            <label htmlFor="ledger__desc">Description</label>
            {/* <textarea name="ledger__desc" id="ledger__desc">
              text
            </textarea> */}
          </div>
          <input value="Add" className="ledger__submit" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default AddLedger;
