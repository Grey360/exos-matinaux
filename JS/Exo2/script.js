class Calculatrice{
  constructor(){
    this.chiffre1;
    this.chiffre2;
    this.res;
    this.history=[];
  }
  reset(){
    this.res=0;
  }
  displayRes(){
    switch (this.history[this.history.length-1][1]) {
      case "+":
      document.body.innerHTML=this.chiffre1+"  + "+this.chiffre2+" = "+this.res;
      break;
      case "-":
      document.body.innerHTML=this.chiffre1+" - "+this.chiffre2+" = "+this.res;
      break;
      case "/":
      document.body.innerHTML=this.chiffre1+" / "+this.chiffre2+" = "+this.res;
      break;
      case "*":
      document.body.innerHTML=this.chiffre1+" * "+this.chiffre2+" = "+this.res;
      break;
      default: ":/";
    }
  }
  somme(chiffre1,chiffre2){
    this.chiffre1=chiffre1; this.chiffre2=chiffre2;this.res= this.chiffre1+this.chiffre2;
    this.history.push([`${this.chiffre1+this.chiffre2}`,"+"]);
    this.displayRes();
    return res;
  }
  soustraction(chiffre1,chiffre2){
    this.chiffre1=chiffre1; this.chiffre2=chiffre2;this.res=this.chiffre1-this.chiffre2;
    this.history.push([this.chiffre1-this.chiffre2,"-"]);
    this.displayRes();
    return this.res;
  }
  multiplication(chiffre1,chiffre2){
    this.chiffre1=chiffre1;this.chiffre2=chiffre2;this.res=this.chiffre1*this.chiffre2;
    this.history.push([this.chiffre1*this.chiffre2,"*"]);
    this.displayRes();
    return this.res;
  }
  division(chiffre1,chiffre2){
    this.chiffre1=chiffre1;this.chiffre2=chiffre2;this.res=this.chiffre1/this.chiffre2;
    this.history.push([this.chiffre1/this.chiffre2,"/"]);
    this.displayRes();
    return this.res;
  }
};
bla= new Calculatrice();
bla.division(9,2);
console.log(bla.history);
