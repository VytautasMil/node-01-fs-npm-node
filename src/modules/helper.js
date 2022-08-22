// sukurti funkcija kuri paveircia valandas i minutes
// es6 export

// export function hoursToMin(hoursAmmount) {
    function hoursToMin(hoursAmmount) {
        return hoursAmmount * 60;
      }
      
      // parasyti funkcija kuri pavercia metus i dienas 365d metuose
      function yearsToDays(yearsAmmont) {
        return yearsAmmont * 365;
      }
      
      // exportuojam ir panaudojam app.js
      
      const n1 = hoursToMin(10);
      console.log(' n1 ===', n1);
      // exportuot ir panaudot app.js
      
      module.exports = {
        hoursToMin,
        yearsToDays,
      };