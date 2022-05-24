import React, {  useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { activate } from "./features/userSlice";

const AvailbleTeam = ({ prsn, day, dayShift, sec }) => {
  const dispatch = useDispatch();
  const [availablePerson, setAvailablePerson] = useState(prsn);

  useEffect(() => {
    setAvailablePerson(prsn);
    // check if it is those days that only one member is onsite or it is night shift.
    if (day === "1" || day === "0" || dayShift === false) {
      dispatch(activate(prsn.login));
    }
    //else {
    //   dispatch(setDyads(prsn.login));
    // }
  }, [sec, availablePerson, dayShift]);
  //We will only assign a single member that is working on site to activate reducer. which happens every day except wednesday

  const { id, name, badge } = availablePerson;
  return (
    <div>
      <article className="parentShiftContainer">
        <div key={id} className="availableShift">
          <img src={badge} alt={name} />
        </div>
      </article>
    </div>
  );
};

export default AvailbleTeam;

