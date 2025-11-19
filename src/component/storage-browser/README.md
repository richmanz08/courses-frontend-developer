# Browser Storage Components

This folder contains interactive examples demonstrating the three main browser storage mechanisms: Cookies, LocalStorage, and SessionStorage.

## Components Overview

### 1. Cookie.tsx

**Purpose**: Demonstrates how to work with browser cookies.

**Features**:

- Set cookies with custom name, value, and expiration (in days)
- Read cookies by name
- Delete specific cookies
- View all current cookies
- Built-in utility functions for cookie management

**Key Concepts**:

- Cookies persist across browser sessions
- Can set expiration dates
- Useful for authentication tokens, user preferences
- Typically limited to 4KB per cookie
- Sent with every HTTP request to the same domain

**Usage Example**:

```typescript
// Set a cookie that expires in 7 days
cookieUtils.set("username", "john", 7);

// Read a cookie
const username = cookieUtils.get("username");

// Delete a cookie
cookieUtils.delete("username");
```

---

### 2. LocalStorage.tsx

**Purpose**: Demonstrates localStorage API for persistent client-side storage.

**Features**:

- Set key-value pairs in localStorage
- Read values by key
- Delete specific items
- Clear all localStorage
- Store complex objects using JSON
- Display all items in a data table
- Example: Save and load user profile object

**Key Concepts**:

- Data persists even after closing the browser
- No expiration date (until manually cleared)
- Typically 5-10MB storage limit
- Data is stored as strings only
- Use JSON.stringify() and JSON.parse() for objects
- Synchronous API

**Usage Example**:

```typescript
// Store simple value
localStorage.setItem("theme", "dark");

// Store complex object
const user = { name: "John", email: "john@example.com" };
localStorage.setItem("user", JSON.stringify(user));

// Read value
const theme = localStorage.getItem("theme");

// Read and parse object
const userStr = localStorage.getItem("user");
const user = JSON.parse(userStr);

// Remove item
localStorage.removeItem("theme");

// Clear all
localStorage.clear();
```

---

### 3. Sesstion.tsx (SessionStorage)

**Purpose**: Demonstrates sessionStorage API for temporary session-based storage.

**Features**:

- Set key-value pairs in sessionStorage
- Read values by key
- Delete specific items
- Clear all sessionStorage
- Store complex objects using JSON
- Display all items in a data table
- Example use cases: form data, shopping cart

**Key Concepts**:

- Data persists only for the page session
- Cleared when the tab/window is closed
- Separate storage for each tab
- Same storage limit as localStorage (5-10MB)
- Perfect for temporary data like wizard steps, form drafts
- Synchronous API

**Usage Example**:

```typescript
// Store form data temporarily
const formData = { firstName: "Jane", email: "jane@example.com" };
sessionStorage.setItem("formData", JSON.stringify(formData));

// Read form data
const formDataStr = sessionStorage.getItem("formData");
const formData = JSON.parse(formDataStr);

// Remove item
sessionStorage.removeItem("formData");

// Clear all
sessionStorage.clear();
```

---

## Comparison Table

| Feature              | Cookie                   | LocalStorage                | SessionStorage       |
| -------------------- | ------------------------ | --------------------------- | -------------------- |
| **Capacity**         | ~4KB                     | 5-10MB                      | 5-10MB               |
| **Expiration**       | Manual (set expiry)      | Never                       | On tab close         |
| **Sent to Server**   | Yes (with requests)      | No                          | No                   |
| **Accessibility**    | Client & Server          | Client only                 | Client only          |
| **Storage Location** | Browser & Server         | Browser                     | Browser              |
| **Best For**         | Authentication, tracking | User preferences, app state | Form data, temp data |

---

## Common Use Cases

### Cookies

- Authentication tokens
- Session IDs
- User tracking
- Remembering user preferences (with expiry)
- Shopping cart (server-side validation)

### LocalStorage

- User preferences (theme, language)
- Cached data for offline access
- Application state
- User-generated content drafts (no expiry needed)
- Recently viewed items

### SessionStorage

- Multi-step form data
- Shopping cart (during checkout)
- Wizard step progress
- Temporary filters/search criteria
- Tab-specific data

---

## Security Considerations

1. **Never store sensitive data** (passwords, credit cards) in any browser storage
2. **Cookies**: Set `HttpOnly` and `Secure` flags for sensitive cookies (server-side)
3. **XSS Protection**: Always sanitize data before storing and displaying
4. **HTTPS**: Use HTTPS to prevent man-in-the-middle attacks
5. **Data Validation**: Always validate and parse data carefully

---

## Browser Support

All three storage mechanisms are supported in all modern browsers:

- Chrome/Edge (all versions)
- Firefox (all versions)
- Safari (all versions)
- Opera (all versions)

---

## Testing the Components

1. Navigate to `/browser-storage` in your Next.js app
2. Use the tabs to switch between Cookie, LocalStorage, and SessionStorage examples
3. Try setting, reading, and deleting data in each storage type
4. Open browser DevTools to see the stored data:
   - **Application** tab → **Cookies** (for cookies)
   - **Application** tab → **Local Storage** (for localStorage)
   - **Application** tab → **Session Storage** (for sessionStorage)

---

## Additional Resources

- [MDN: HTTP Cookies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies)
- [MDN: Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API)
- [MDN: Window.localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- [MDN: Window.sessionStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage)
