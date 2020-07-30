import React from "react";

export default function Otp() {
  return (
    <div>
      <div class="container">
        <h1>SMS SENT</h1>
        <input
          className="ibox"
          id="code"
          type="number"
          maxLength="6"
          minLength="6"
          placeholder="123456"
        />
        <button
          onClick="submitPhoneNumberAuthCode()"
          type="submit"
          id="sign-in-button"
        >
          Verify OTP
        </button>
        <div id="recaptcha-container"></div>
      </div>

      <style jsx>{``}</style>
    </div>
  );
}
