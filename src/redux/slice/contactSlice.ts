import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the user type
interface Customer {
    id: number;
    name: string;
    email: string;
    role: string;
    password: string;
  }
  
  // Define the initial state type
  interface UserState {
    Customers: Customer[];
  }
  
  // Initial state
  const initialState: UserState = {
     Customers: [],
  };


  const  contactSlice =  createSlice({
    name:'contact',
    initialState,
    reducers: {
       addCustomer: (state, action ) => {
        const updatedId = state.Customers.length > 0 
        ? state.Customers[state.Customers.length - 1].id + 1 
        : 1;
        const newCustomer = {id: updatedId , ...action.payload};
        console.log(newCustomer)
        state.Customers.push(newCustomer)
    //    state.users.push(action.payload) 
       },
       removeCustomer: (state, action: PayloadAction<number>) => {
        // Remove customer by id
        state.Customers = state.Customers.filter((customer) => customer.id !== action.payload);
      },
    }
  })

 export const {addCustomer ,removeCustomer}  = contactSlice.actions;
  export default contactSlice.reducer;