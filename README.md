# Amazon IT Active Team Members Board

We used four reducers with two initial states

### active: 
It is an empty array or initial state of a single available member.
- wed: active/available members only on wednesday, beacuse wednesday is a day of the week where a group of members work together.

  - activate: dispatch an action for an active member.
  - deActive: dispatch an action for an active member to be removed.
  - setWed: dispatch an action for group of available members.
  - unsetWed: dispatch an action for group of available members to be removed.

### App: 
a component where all other components locate.
### AvailableTeam: 
This a component of available team members to be shown in a separate component where Badge/s will be shown in a floated manner. In this component only available techs will be activated using dispatch(activate(prsn.login)) and that happens everyday except wednesday.
### CountDownTimer: 
Here, the most important thing is using counter. We are using Date(), the second, minute and hours will not get updated unless you update the component, you can't update the component if you dont use your own data. So, to constantly update our component based on second, we are using counter. counter will use setInterval which will update our component every second.
### Mgr: 
In this component the onsite and offiste time of the manager will be set. as you can see we also used counter here because counter is the only variable that keep changing every second and that will aslo update our component based on the conditions of hours or minutes.
### Time: 
This is the most important component among all. Here we have shift hours, days and etc. We used counter useState hook here as well. Because we want to update this hook based on the counter and time hours and it wont work if we dont use counter. Inside useEffect, we used Morning shift and night shift. Morning shift starts from (7 to 17), if it is wednesday, we will dispatch the wednesday shift techs, where this is used in the Team component where it will be shown "onsite". and if it is night shift and the day is wednesday the wednesday night shfit techs will be dispatched. That reducers will also be used in the Team component.
We used another useEffect to deactive the online techs based on the window where shifts change.

[https://uidesigndaily.com/](https://uidesigndaily.com/posts/sketch-birthdays-list-card-widget-day-1042)
