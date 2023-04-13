class employee
{
  constructor(name)
  {
    console.log("constructor : employee" +""+ name );
  }
}
class manager extends employee
{
 constructor()                              
 {
    super();                                  // use super fun^ for call super class or base class
    console.log("constructor : manager");  //must call super constructor in drive class before accessing 'this' returning from drive cont.
 }
}
let a = new manager("Hello Indore");
