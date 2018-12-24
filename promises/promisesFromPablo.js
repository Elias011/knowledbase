const promise = (error, result) => {
  return new Promise((resolve, reject) => {
    if(error) reject(error);
    resolve(result);
  });
};

let getPromise = (err, res) => {
  return promise(err, res)
    .then(res => {
      console.log('ooooooooooooooooooooooooook');
      console.log(res)
    })
    .catch(err => {
      console.log('faaaaaaaaaaaaaaaaaaaaaaaaaail');
      console.error(err)
    })
}

// system on errros should write to a dabadase collection 'errors'
let getPromiseAsync = async (err, res) => {
  return await promise(err, res);
}


getPromise("This is an error modafaka", null);
getPromise(false, 'Result. Everything went gezellig');