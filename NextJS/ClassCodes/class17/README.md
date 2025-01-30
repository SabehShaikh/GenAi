# Class 17 - Authentication and Authorization in Next.js  
**Date:** 25 January 2025 (Saturday)

## Topics Covered

### 1. **Authentication and Authorization in Next.js**

#### **Login and Signup API**
- Handled login/signup using an API endpoint.
- Extracted request parameters using destructuring: `{ email, password }`.
- Used `await` to convert request data to JSON since JSON parsing returns a promise.
- Checked API request using **Postman**:
  ```plaintext
  POST http://localhost:3000/api/auth/login
  ```

#### **Cookies & Local Storage**
- **Local Storage**: Used for storing key-value pairs.
- **Cookies**: Used for session management.
- `import { cookies } from "next/headers";`
- **Clerk Next.js Auth & NextAuth.js** for authentication.


#### **Saving Data in Cookies**
- **Middleware** for request handling.
  - Filename must be `middleware.ts`.
  - Placed inside `src/` (root directory), not inside `app/`.
  - Runs on every request by default.
  - Can restrict to specific routes using `matcher`:
    ```ts
    export const config = {
      matcher: ['/', '/login'],
    };
    ```
- Used `cookieStore.get` to retrieve stored cookies.

All source code can be found in this repo.

