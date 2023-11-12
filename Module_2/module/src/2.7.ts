{
  //
  // Promise
  type Todo = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  };
  const dataFromAPI = async (): Promise<Todo> => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const data = await response.json();
    console.log(data);
    return data;
  };
  dataFromAPI();

  const createPromise = (): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
      const data: string = "Some data";
      if (data) {
        resolve(data);
      } else {
        reject("Failed to load data");
      }
    });
  };

  // Calling createPromise
  const callingPromise = async (): Promise<string> => {
    const data: string = await createPromise();
    // console.log(data);
    return data;
  };
  callingPromise();
  //
}
