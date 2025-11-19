"use client";

import { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Message } from "primereact/message";

// Cookie utility functions
const cookieUtils = {
  set: (name: string, value: string, days: number) => {
    if (typeof window !== "undefined") {
      const expires = new Date();
      expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
      const cookieString = `${name}=${value};expires=${expires.toUTCString()};path=/`;
      const doc = document as Document;
      doc.cookie = cookieString;
    }
  },
  get: (name: string): string | null => {
    if (typeof window === "undefined") return null;
    const nameEQ = name + "=";
    const ca = document.cookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === " ") c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  },
  delete: (name: string) => {
    if (typeof window !== "undefined") {
      const cookieString = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/`;
      const doc = document as Document;
      doc.cookie = cookieString;
    }
  },
  getAll: (): string => {
    if (typeof window === "undefined") return "No cookies set";
    return document.cookie || "No cookies set";
  },
};

export const CookieExample = () => {
  const [cookieName, setCookieName] = useState("userPreference");
  const [cookieValue, setCookieValue] = useState("");
  const [cookieDays, setCookieDays] = useState("7");
  const [currentCookies, setCurrentCookies] = useState<string>("");
  const [readCookieName, setReadCookieName] = useState("userPreference");
  const [readCookieValue, setReadCookieValue] = useState<string | null>(null);

  // Function to refresh and display all cookies
  const refreshCookies = () => {
    setCurrentCookies(cookieUtils.getAll());
  };

  // Handle setting a cookie
  const handleSetCookie = () => {
    if (cookieName && cookieValue) {
      cookieUtils.set(cookieName, cookieValue, parseInt(cookieDays) || 7);
      setCookieValue("");
      refreshCookies();
    }
  };

  // Handle reading a cookie
  const handleReadCookie = () => {
    const value = cookieUtils.get(readCookieName);
    setReadCookieValue(value);
  };

  // Handle deleting a cookie
  const handleDeleteCookie = () => {
    if (readCookieName) {
      cookieUtils.delete(readCookieName);
      setReadCookieValue(null);
      refreshCookies();
    }
  };

  return (
    <div className="space-y-6">
      <Message
        severity="info"
        text="Cookies are small pieces of data stored in the browser. They persist across sessions and can have expiration dates. Commonly used for authentication, user preferences, and tracking."
      />

      {/* Set Cookie Section */}
      <Card title="Set Cookie" className="mb-4">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="cookieName" className="font-semibold">
              Cookie Name
            </label>
            <InputText
              id="cookieName"
              value={cookieName}
              onChange={(e) => setCookieName(e.target.value)}
              placeholder="Enter cookie name"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="cookieValue" className="font-semibold">
              Cookie Value
            </label>
            <InputText
              id="cookieValue"
              value={cookieValue}
              onChange={(e) => setCookieValue(e.target.value)}
              placeholder="Enter cookie value"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="cookieDays" className="font-semibold">
              Expiration (days)
            </label>
            <InputText
              id="cookieDays"
              type="number"
              value={cookieDays}
              onChange={(e) => setCookieDays(e.target.value)}
              placeholder="7"
            />
          </div>

          <Button
            label="Set Cookie"
            icon="pi pi-plus"
            onClick={handleSetCookie}
            className="w-full"
          />
        </div>
      </Card>

      {/* Read Cookie Section */}
      <Card title="Read Cookie" className="mb-4">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="readCookieName" className="font-semibold">
              Cookie Name to Read
            </label>
            <InputText
              id="readCookieName"
              value={readCookieName}
              onChange={(e) => setReadCookieName(e.target.value)}
              placeholder="Enter cookie name"
            />
          </div>

          <Button
            label="Read Cookie"
            icon="pi pi-search"
            onClick={handleReadCookie}
            className="w-full"
          />

          {readCookieValue !== null && (
            <div className="p-4 bg-gray-100 rounded">
              <p className="font-semibold">Cookie Value:</p>
              <p className="text-gray-700">
                {readCookieValue || "Cookie not found"}
              </p>
            </div>
          )}
        </div>
      </Card>

      {/* Delete Cookie Section */}
      <Card title="Delete Cookie" className="mb-4">
        <div className="flex flex-col gap-4">
          <Button
            label="Delete Cookie"
            icon="pi pi-trash"
            severity="danger"
            onClick={handleDeleteCookie}
            className="w-full"
          />
        </div>
      </Card>

      {/* Display All Cookies */}
      <Card title="All Cookies">
        <div className="flex flex-col gap-4">
          <Button
            label="Refresh Cookies"
            icon="pi pi-refresh"
            onClick={refreshCookies}
            className="w-full"
          />
          <div className="p-4 bg-gray-100 rounded break-all">
            <p className="font-semibold mb-2">Current Cookies:</p>
            <code className="text-sm">
              {currentCookies || "Click refresh to view cookies"}
            </code>
          </div>
        </div>
      </Card>
    </div>
  );
};
