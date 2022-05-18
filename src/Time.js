import React, { useState, useEffect } from "react";
import { shifts } from "./data";
import "moment-timezone";
import AvailbleTeam from "./availableTeam";
import { useDispatch } from "react-redux";
import {
  deaActivate,
  selectActive,
  setDyads,
  selectDyads,
  unsetDyads,
  activate,
} from "./features/userSlice";
import { useSelector } from "react-redux";

const Time = ({ people }) => {
  const day = (new Date().getDay() + 1).toString(); //this is string
  // const day = "2";
  const hours = new Date().getHours().toString();
  // const hours = "18";
  const minutes = new Date().getMinutes().toString();
  // const minutes = "32";
  const sec = new Date().getSeconds().toString();
  //shift setter
  const [dayShift, setDayShift] = useState(false);
  const [counter, setCounter] = useState(0);

  const active = useSelector(selectActive);
  const dyads = useSelector(selectDyads);
  const dispatch = useDispatch();

  //Days Team
  const FHD = shifts.FHD;
  const preDONUT = shifts.preDonut;
  const weDay = shifts.WednesdayDay;
  const postDONUT = shifts.postDonut;
  const BHD = shifts.BHD;

  //Night Team
  const FHN = shifts.FHN;
  const WedNight = shifts.wednesdayNight;
  const BHN = shifts.BHN;

  //The difference between team and shift is that shift has all the data of the team member

  // Day Front-Half Shift
  const fhdShift = people.filter((person) => {
    return FHD.includes(person.login);
  });
  // Day DONUT Shift
  const predonutShift = people.filter((person) => {
    return preDONUT.includes(person.login);
  });
  // Day Wed Shift
  const wedShift = people.filter((person) => {
    return weDay.includes(person.login);
  });
  // Day DONUT Shift
  const postdonutShift = people.filter((person) => {
    return postDONUT.includes(person.login);
  });
  // Day Back-Half Shift
  const bhdShift = people.filter((person) => {
    return BHD.includes(person.login);
  });

  // Night Front-Half Shift
  const fhnShift = people.filter((person) => {
    return FHN.includes(person.login);
  });
  //Night Wed Shift
  const weNShift = people.filter((person) => {
    return WedNight.includes(person.login);
  });
  // Night Back-Half Shift
  const bhnShift = people.filter((person) => {
    return BHN.includes(person.login);
  });

  const shiftTiming = () => {
    if (parseInt(hours) >= 6 && parseInt(hours) <= 18) {
      setDayShift(true);
    } else {
      setDayShift(false);
    }

    if (dayShift) {
      //the below codes will dispatch only pair members to the TEAM.js
      if (day === "2" || day === "3") {
        dispatch(unsetDyads());
        dispatch(deaActivate());
        dispatch(setDyads(predonutShift));
      } else if (day === "4") {
        dispatch(unsetDyads());
        dispatch(deaActivate());
        dispatch(setDyads(wedShift));
      } else if (day === "5" || day === "6") {
        dispatch(unsetDyads());
        dispatch(deaActivate());
        dispatch(setDyads(postdonutShift));
      } else {
        dispatch(unsetDyads());
      }
    } else {
      //then wednesday night shift should be deployed as available on site Member
      if (day === "4" && parseInt(hours) <= 6) {
        dispatch(deaActivate());
        dispatch(setDyads(fhnShift));
      }

      //for half night shift on wednesday
      else if (day === "4" && parseInt(hours) >= 17) {
        dispatch(unsetDyads());
        dispatch(deaActivate());
        dispatch(setDyads(weNShift));
        // for other half night wednesday
      } else if (day === "5" && parseInt(hours) <= 6) {
        dispatch(unsetDyads());
        dispatch(deaActivate());
        dispatch(setDyads(weNShift));
      } else if (day === "0" || day === "5" || day === "6") {
        dispatch(unsetDyads());
        dispatch(deaActivate());
        dispatch(setDyads(bhnShift));
      } else {
        dispatch(unsetDyads());
      }
    }
  };

  useEffect(() => {
    shiftTiming();
    const interval = setInterval(() => {
      return setCounter((prevCounter) => prevCounter + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [counter]);

  if (dayShift) {
    if (day === "1") {
      return (
        <>
          {fhdShift.map((nfr) => {
            return (
              <>
                <AvailbleTeam
                  key={nfr.id}
                  prsn={nfr}
                  availableMember={weDay}
                  day={day}
                  dayShift={dayShift}
                  hours={hours}
                  minutes={minutes}
                  sec={sec}
                />
              </>
            );
          })}
        </>
      );
    }

    if (day === "2" || day === "3") {
      return (
        <>
          {predonutShift.map((nfr) => {
            return (
              <>
                <AvailbleTeam
                  key={nfr.id}
                  prsn={nfr}
                  day={day}
                  dayShift={dayShift}
                  hours={hours}
                  minutes={minutes}
                  sec={sec}
                />
              </>
            );
          })}
        </>
      );
    } else if (day === "4") {
      return (
        <>
          {wedShift.map((nfr) => {
            return (
              <>
                <AvailbleTeam
                  key={nfr.id}
                  prsn={nfr}
                  day={day}
                  dayShift={dayShift}
                  hours={hours}
                  minutes={minutes}
                  sec={sec}
                />
              </>
            );
          })}
        </>
      );
    } else if (day === "5" || day === "6") {
      return (
        <>
          {postdonutShift.map((nfr) => {
            return (
              <>
                <AvailbleTeam
                  key={nfr.id}
                  prsn={nfr}
                  day={day}
                  dayShift={dayShift}
                  hours={hours}
                  minutes={minutes}
                  sec={sec}
                />
              </>
            );
          })}
        </>
      );
    } else {
      return (
        <>
          {bhdShift.map((nfr) => {
            return (
              <>
                <AvailbleTeam
                  key={nfr.id}
                  prsn={nfr}
                  dayShift={dayShift}
                  hours={hours}
                  minutes={minutes}
                  sec={sec}
                  day={day}
                />
              </>
            );
          })}
        </>
      );
    }
  } else {
    if (day === "1" || day === "2" || day === "3") {
      return (
        <>
          {fhnShift.map((nfr) => {
            return (
              <>
                <AvailbleTeam
                  key={nfr.id}
                  prsn={nfr}
                  dayShift={dayShift}
                  hours={hours}
                  minutes={minutes}
                  sec={sec}
                  day={day}
                />
              </>
            );
          })}
        </>
      );
      // for tuesday night shift
    } else if (day === "4" && parseInt(hours) < 6) {
      return (
        <>
          {fhnShift.map((nfr) => {
            return (
              <>
                <AvailbleTeam
                  key={nfr.id}
                  prsn={nfr}
                  dayShift={dayShift}
                  hours={hours}
                  minutes={minutes}
                  sec={sec}
                  day={day}
                />
              </>
            );
          })}
        </>
      );
    } else if (day === "4") {
      return (
        <>
          {weNShift.map((nfr) => {
            return (
              <>
                <AvailbleTeam
                  key={nfr.id}
                  prsn={nfr}
                  dayShift={dayShift}
                  hours={hours}
                  minutes={minutes}
                  sec={sec}
                  day={day}
                />
              </>
            );
          })}
        </>
      );
      // for wednesday nightshift
    } else if (day === "5" && parseInt(hours) < 6) {
      return (
        <>
          {weNShift.map((nfr) => {
            return (
              <>
                <AvailbleTeam
                  key={nfr.id}
                  prsn={nfr}
                  dayShift={dayShift}
                  hours={hours}
                  minutes={minutes}
                  sec={sec}
                  day={day}
                />
              </>
            );
          })}
        </>
      );
    } else {
      return (
        <>
          {bhnShift.map((nfr) => {
            return (
              <>
                <AvailbleTeam
                  key={nfr.id}
                  prsn={nfr}
                  dayShift={dayShift}
                  hours={hours}
                  minutes={minutes}
                  sec={sec}
                  day={day}
                />
              </>
            );
          })}
        </>
      );
    }
  }
};

export default Time;
