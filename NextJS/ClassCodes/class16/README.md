# Class 16 - Summary and Code Overview  
**Date:** 18 January 2025 (Saturday)  

## Topics Covered  
### 1. **Props Drilling**  
- **Definition:** Passing data from a parent component to deeply nested child components.  
- **Problem:** Leads to excessive prop passing, making the code harder to manage.  
- **Solution:** Use the `useContext` hook.  

#### Steps to Use `useContext`:  
1. **Create Context:** Define a context using `createContext`.  
2. **Provider:** Wrap the parent component with the provider and pass data via the `value` prop.  
3. **Consumer:** Use `useContext` in child components to access the shared data.  

#### Example:  
- **Provider:**  
  ```jsx
  <Data.Provider value={{ firstName: "Sabeh" }}>
    <ChildOne />
  </Data.Provider>

- **Consumer:**
```jsx
const user = useContext(Data);
return <h1>{user.firstName}</h1>;
```

### 2. **API Development**

**Route Handling**
-API route files are named route.ts and placed under the app/api directory.
-Example Directory Structure:
app/api/tasks/route.ts


**HTTP Methods and Their Purpose:**
-GET: Retrieve data.
-POST: Add or create data.
-PUT: Update an entire document.
-PATCH: Update specific fields in a document.
-DELETE: Remove data.

**CRUD Operations:**
-Create: Add new data (POST).
-Read: Retrieve existing data (GET).
-Update: Modify existing data (PUT/PATCH).
-Delete: Remove data (DELETE).

**Status Codes:**
-200: Success.
-404: Not Found.
-500: Server Error, etc.

All source code can be found in this repo.
