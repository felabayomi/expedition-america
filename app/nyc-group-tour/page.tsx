"use client";
import { useState } from "react";

const PARTICIPANT_OPTIONS = Array.from({ length: 10 }, (_, i) => i + 1);

const REFERRAL_OPTIONS = [
  "Instagram",
  "Facebook",
  "Google",
  "Friend / Referral",
  "Email Campaign",
  "Other",
];

export default function NYCGroupTourForm() {
  // No state or JS handlers needed for plain HTML form

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white flex items-center justify-center p-6">
      <div className="max-w-5xl w-full bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl grid md:grid-cols-2 overflow-hidden">

        {/* LEFT SIDE */}
        <div className="p-8 bg-gradient-to-br from-blue-600 to-purple-700">
          <h1 className="text-3xl font-bold mb-4">🗽 NYC Group Tour</h1>
          <p className="text-sm opacity-90 mb-6">
            September 18–21, 2026
          </p>

          <ul className="space-y-3 text-sm">
            <li>✔ Central Park guided walk</li>
            <li>✔ Statue of Liberty & Ellis Island</li>
            <li>✔ Brooklyn Bridge skyline views</li>
            <li>✔ Top of the Rock</li>
            <li>✔ Chelsea Market & High Line</li>
            <li>✔ Optional Broadway night</li>
          </ul>

          <div className="mt-8 text-sm">
            <p><strong>👥 Spots Left:</strong> 24 / 30</p>
          </div>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="p-8 space-y-4">

          <h2 className="text-2xl font-semibold mb-2">Reserve Your Spot</h2>

          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            value={form.name}
            onChange={handleChange}
            className="w-full p-3 rounded-xl bg-white/20 border border-white/20"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 rounded-xl bg-white/20 border border-white/20"
          />

          {/* Phone */}
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            minLength={10}
            value={form.phone}
            onChange={handleChange}
            className="w-full p-3 rounded-xl bg-white/20 border border-white/20"
          />

          {/* ✅ FIXED Participants */}
          <select
            name="participants"
            value={form.participants}
            onChange={handleChange}
            className="w-full p-3 rounded-xl bg-white/20 border border-white/20 text-white"
          >
            {PARTICIPANT_OPTIONS.map((num) => (
              <option key={num} value={num} className="text-black bg-white">
                {num} Participant{num > 1 ? "s" : ""}
              </option>
            ))}
          </select>

          {/* Emergency */}
          <div className="grid grid-cols-2 gap-2">
            <input
              type="text"
              name="emergencyName"
              placeholder="Emergency Contact"
              value={form.emergencyName}
              onChange={handleChange}
              className="p-3 rounded-xl bg-white/20 border border-white/20"
            />
            <input
              type="tel"
              name="emergencyPhone"
              placeholder="Emergency Phone"
              value={form.emergencyPhone}
              onChange={handleChange}
              className="p-3 rounded-xl bg-white/20 border border-white/20"
            />
          </div>

          {/* Requests */}
          <textarea
            name="requests"
            placeholder="Special Requests / Accessibility Needs"
            value={form.requests}
            onChange={handleChange}
            className="w-full p-3 rounded-xl bg-white/20 border border-white/20"
          />

          {/* ✅ FIXED Referral */}
          <select
            name="referral"
            value={form.referral}
            onChange={handleChange}
            className="w-full p-3 rounded-xl bg-white/20 border border-white/20 text-white"
          >
            <option value="" className="text-black bg-white">
              How did you hear about us?
            </option>
            {REFERRAL_OPTIONS.map((option) => (
              <option key={option} value={option} className="text-black bg-white">
                {option}
              </option>
            ))}
          </select>

          {/* Checkbox */}
          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              name="updates"
              checked={form.updates}
              onChange={handleChange}
            />
            Receive updates about future tours
          </label>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:scale-105 transition-transform p-3 rounded-xl font-semibold"
          >
            🚀 Book My Spot
          </button>

        </form>
      </div>
    </div>
  );
}
