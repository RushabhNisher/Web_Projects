const Pre_Order = (root) => {                      //Declare and Initialize the Pre Order Function(Follows NLR)        
  console.log(root.value);                         //Print Root(Current Node)            
  if(root.left)  Pre_Order(root.left)              //Check Left Node  
  if(root.right) Pre_Order(root.right)             //Check Right Node   
}   
const In_Order = (root) => {                       //Declare and Initialize the In Order Function(Follows LNR)     
  if(root.left) In_Order(root.left)                //Check Left Node 
  console.log(root.value);                         //Print Root(Current Node)           
  if(root.right) In_Order(root.right)              //Check Right Node   
}      
const Post_Order = (root) => {                     //Declare and Initialize the Post Order Function(Follows LRN)   
  if(root.left) Post_Order(root.left)              //Check Left Node  
  if(root.right) Post_Order(root.right)            //Check Right Node
  console.log(root.value)                          //Print Root(Current Node)            
}
let BST = { value: 4,   
          left: { value: 2, right: {value: 3, right: null, left: null}, left: { value: 1, right: null, left: null}},
          right: { value: 7, right: { value: 8, right: null, left: null}}
        }
//    4        Root Node
//   / \
//  2   7      Child Nodes(Level 1)
// / \   \
//1   3   8    Child Nodes(Level 2)
console.log('-------');
console.log('Pre Order(NLR)');                      //Print Pre Order list
Pre_Order(BST)                                      //Call the Pre Order Function, pass the tree 
console.log('-------');               
console.log('In Order(LNR)');                       //Print In Order list
In_Order(BST)                                       //Call the In Order Function, pass the tree    
console.log('-------');
console.log('Post Order(LRN');                      //Print Post Order list
Post_Order(BST)                                     //Call the Post Order Function, pass the tree  
console.log('-------');