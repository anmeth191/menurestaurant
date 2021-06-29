const initialValue = {

      appetizers:[ 
          { id:1,name: 'Bruschetta', description:'Tousted bread eith dice Tomatoes, garlic, olive oil & basil' , price: 5.99 },
          { id:2,name: 'Skin of Potatoes', description:'potatoes stuffed with delicious Bacon and Cheese' , price: 3.99 },
          { id:3,name: 'Fried Shrimps', description:' dressed with marinara Sauce' , price: 8.99 },
          { id:4,name: 'Stuffed Chiles Verdes', description:'Breaded Jalapenos stuffed with chicken & cream cheese' , price: 4.99 },
          { id:5,name: 'EggPlant Rollatini', description:'breaded eggplant stuffed with mozarella in marinara' , price: 6.99 },
          { id:6,name: 'SeaFood party', description:' shrimps, mussels, clams in marinara sauce or garlic butter sauce' , price: 5.99 },
          { id:7,name: 'Chicken Nuggets', description:'12 pieces ' , price: 6.99 },
          { id:8,name: 'Chicken Wings', description:'Hot, mild or BBQ with side of bleu cheese or ranch dressing | 12 pieces ' , price:10.99 },
          { id:9,name: 'Pop Corn Chicken ', description:'Served with fries' , price: 10.99 },
          { id:10,name: 'French fries with Mozarella', description:'french fries topped with melted mozarella cheese ' , price: 5.99 }
          
              ],

         sides:[ 
            { id:1,name: 'BreadSticks', quantity:6 , price: 3.99 },
            { id:2,name: 'Mozzarela Sticks', quantity:6 , price: 5.99 },
            { id:3,name: 'Pizza Fries', quantity:6 , price: 5.99 },
            { id:4,name: 'Onion Rings', quantity:12 , price: 5.99 },
            { id:5,name: 'Breaded Zucchini', quantity:12 , price: 5.99 },
            { id:6,name: 'Curly Fries', quantity:'medium / large' , price: 4.99 },
            { id:7,name: 'Perogies', quantity:4 , price: 3.99 }

   
         ]     

}


const menuReducer = (state = initialValue , dispatch)=>{
return state
}

export default menuReducer;