"use client";

import { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Message } from "primereact/message";
import { TerminalUI } from "../ui/TerminalUI";
import { getCookie, setCookie, deleteCookie, getCookies } from "cookies-next";

export const CookieExample = () => {
  const [cookieName, setCookieName] = useState("userPreference");
  const [cookieValue, setCookieValue] = useState("");
  const [cookieDays, setCookieDays] = useState("7");
  const [currentCookies, setCurrentCookies] = useState<string>("");
  const [readCookieName, setReadCookieName] = useState("userPreference");
  const [readCookieValue, setReadCookieValue] = useState<string | null>(null);

  // Function to refresh and display all cookies
  const refreshCookies = () => {
    const allCookies = getCookies();
    if (
      allCookies &&
      typeof allCookies === "object" &&
      !("then" in allCookies)
    ) {
      const cookieString = Object.entries(allCookies)
        .map(([key, value]) => `${key}=${value}`)
        .join("; ");
      setCurrentCookies(cookieString || "No cookies set");
    } else {
      setCurrentCookies("No cookies set");
    }
  };

  // Handle setting a cookie
  const handleSetCookie = () => {
    if (cookieName && cookieValue) {
      const days = parseInt(cookieDays) || 7;
      setCookie(cookieName, cookieValue, {
        maxAge: days * 24 * 60 * 60, // Convert days to seconds
      });
      setCookieValue("");
      refreshCookies();
    }
  };

  // Handle reading a cookie
  const handleReadCookie = () => {
    const value = getCookie(readCookieName);
    setReadCookieValue(value ? String(value) : null);
  };

  // Handle deleting a cookie
  const handleDeleteCookie = () => {
    if (readCookieName) {
      deleteCookie(readCookieName);
      setReadCookieValue(null);
      refreshCookies();
    }
  };

  return (
    <div className="space-y-6">
      <Message
        className="mb-4"
        severity="info"
        text="Cookies are small pieces of data stored in the browser. They persist across sessions and can have expiration dates. Commonly used for authentication, user preferences, and tracking."
      />

      <TerminalUI name="Cookie with cookies-next" fileName="Cookie.tsx">
        <pre className="text-sm leading-relaxed">
          <code>
            <span className="text-gray-500">
              {"// Import from cookies-next"}
            </span>
            {"\n"}
            <span className="text-pink-400">import</span> {"{ "}
            <span className="text-yellow-300">getCookie</span>,{" "}
            <span className="text-yellow-300">setCookie</span>,{" "}
            <span className="text-yellow-300">deleteCookie</span>,{" "}
            <span className="text-yellow-300">getCookies</span>
            {" } "}
            <span className="text-pink-400">from</span>{" "}
            <span className="text-green-400">&quot;cookies-next&quot;</span>;
            {"\n\n"}
            <span className="text-gray-500">
              {"// Set a cookie with options"}
            </span>
            {"\n"}
            <span className="text-yellow-300">setCookie</span>(
            <span className="text-green-400">&quot;userPreference&quot;</span>,{" "}
            <span className="text-green-400">&quot;dark&quot;</span>, {"{\n"}
            {"  "}
            <span className="text-blue-300">maxAge</span>:{" "}
            <span className="text-orange-400">7</span> *{" "}
            <span className="text-orange-400">24</span> *{" "}
            <span className="text-orange-400">60</span> *{" "}
            <span className="text-orange-400">60</span>,{" "}
            <span className="text-gray-500">{"// 7 days in seconds"}</span>
            {"\n  "}
            <span className="text-blue-300">path</span>:{" "}
            <span className="text-green-400">&quot;/&quot;</span>,{"\n"}
            {"});"}
            {"\n\n"}
            <span className="text-gray-500">{"// Get a cookie"}</span>
            {"\n"}
            <span className="text-pink-400">const</span>{" "}
            <span className="text-blue-300">preference</span> ={" "}
            <span className="text-yellow-300">getCookie</span>(
            <span className="text-green-400">&quot;userPreference&quot;</span>);
            {"\n\n"}
            <span className="text-gray-500">{"// Get all cookies"}</span>
            {"\n"}
            <span className="text-pink-400">const</span>{" "}
            <span className="text-blue-300">allCookies</span> ={" "}
            <span className="text-yellow-300">getCookies</span>();
            {"\n"}
            <span className="text-blue-300">console</span>.
            <span className="text-yellow-300">log</span>(
            <span className="text-blue-300">allCookies</span>);{" "}
            <span className="text-gray-500">
              {"// { userPreference: 'dark', ... }"}
            </span>
            {"\n\n"}
            <span className="text-gray-500">{"// Delete a cookie"}</span>
            {"\n"}
            <span className="text-yellow-300">deleteCookie</span>(
            <span className="text-green-400">&quot;userPreference&quot;</span>);
            {"\n\n"}
            <span className="text-gray-500">{"// Set with more options"}</span>
            {"\n"}
            <span className="text-yellow-300">setCookie</span>(
            <span className="text-green-400">&quot;token&quot;</span>,{" "}
            <span className="text-green-400">&quot;abc123&quot;</span>, {"{\n"}
            {"  "}
            <span className="text-blue-300">maxAge</span>:{" "}
            <span className="text-orange-400">3600</span>,{" "}
            <span className="text-gray-500">{"// 1 hour"}</span>
            {"\n  "}
            <span className="text-blue-300">path</span>:{" "}
            <span className="text-green-400">&quot;/&quot;</span>,{"\n  "}
            <span className="text-blue-300">secure</span>:{" "}
            <span className="text-orange-400">true</span>,{" "}
            <span className="text-gray-500">{"// HTTPS only"}</span>
            {"\n  "}
            <span className="text-blue-300">sameSite</span>:{" "}
            <span className="text-green-400">&quot;strict&quot;</span>,{"\n"}
            {"});"}
          </code>
        </pre>
      </TerminalUI>

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
