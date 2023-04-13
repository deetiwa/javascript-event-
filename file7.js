try
{
  let json = '{"name":"Sachin" , "age": 30}';
  let user = (JSON.parse(json));

if(!user.name)
{
    throw new Error ("Incomplete Data");
}

  console.log(user.name);
  console.log(user.age);
}
catch(error)
{
  console.log(error);
}
finally 
{
    console.log('finally');
}