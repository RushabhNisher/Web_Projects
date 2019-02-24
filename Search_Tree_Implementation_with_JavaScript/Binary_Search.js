function binary_Search(SortedArray, value){                           //Declare the Function with parameters as Sorted Array and Value to be Searched 
  let StartIndex  = 0;                                                //Declaring and Initializing Start Index
  let StopIndex   = SortedArray.length - 1;                           //Declaring and Initializing Stop Index
  let MiddleIndex = Math.floor((StopIndex + StartIndex)/2);           //Declaring and Initializing Middle Index as the average of start and stop
  while(SortedArray[MiddleIndex] != value && StartIndex < StopIndex)  //Entering while loop, if the value is found before entering the loop then it's index is returned else loop is called
  {
     if (value < SortedArray[MiddleIndex])                            //Checking if the value is lesser than the middle index 
      {
          StopIndex = MiddleIndex - 1;                                //If it is lesser than middle index, then we discard the array left from the middle index
      } 
    else if (value > SortedArray[MiddleIndex])                        //Checking if the value is greater than the middle index 
      {
          StartIndex = MiddleIndex + 1;                               //If it is greater than middle index, then we discard the array right from the middle index
      }
      MiddleIndex = Math.floor((StopIndex + StartIndex)/2);           //Setting the Middle Index as the average of new start and  new stop(Depending on which if loop is entered)
  }
  console.log('The Item Searched for is at index');                   //            
  return (SortedArray[MiddleIndex] != value) ? "Not Found!" : MiddleIndex;//Ternary Operator to recheck and return if the value is found else return an Error message  
}
let SortedArray = [1, 2, 3, 4, 5, 7, 8, 9, 13, 19, 21, 23];           //Declaring the Array
console.log(binary_Search(SortedArray, 3));                           //calling the function and the value to be searched
