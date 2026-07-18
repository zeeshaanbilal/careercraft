"use client";

import React, { useState } from "react";

const FREQUENCIES = {
  hourly: { label: "Hourly", hours: 1, multiplier: 2080 },
  daily: { label: "Daily", hours: 8, multiplier: 260 },
  weekly: { label: "Weekly", hours: 40, multiplier: 52 },
  biweekly: { label: "Bi-Weekly", hours: 80, multiplier: 26 },
  monthly: { label: "Monthly", hours: 173.33, multiplier: 12 },
  yearly: { label: "Yearly", hours: 2080, multiplier: 1 },
};

export default function SalaryCalculator() {
  const [amount, setAmount] = useState<string>("75000");
  const [frequency, setFrequency] = useState<keyof typeof FREQUENCIES>("yearly");
  const [taxRate, setTaxRate] = useState<string>("20");
  const [deductions, setDeductions] = useState<string>("0");

  // Validation Handlers to strictly allow only positive numbers and decimals
  const handleNumberInput = (
    val: string, 
    setter: React.Dispatch<React.SetStateAction<string>>
  ) => {
    // Regex allows empty string, or digits optionally followed by a decimal and more digits
    if (/^\d*\.?\d*$/.test(val)) {
      setter(val);
    }
  };

  // Validation states
  const amountNum = parseFloat(amount);
  const isAmountValid = amount.trim() !== "" && !isNaN(amountNum) && amountNum >= 0;
  
  const taxRateNum = parseFloat(taxRate);
  const isTaxRateValid = taxRate.trim() !== "" && !isNaN(taxRateNum) && taxRateNum >= 0 && taxRateNum <= 100;
  
  const deductionsNum = parseFloat(deductions);
  const isDeductionsValid = deductions.trim() !== "" && !isNaN(deductionsNum) && deductionsNum >= 0;

  const hasErrors = !isAmountValid || !isTaxRateValid || !isDeductionsValid;

  // Calculations (only execute if no errors to avoid NaN issues)
  const grossAmount = isAmountValid ? amountNum : 0;
  const yearlyGross = grossAmount * FREQUENCIES[frequency].multiplier;
  
  const taxPercentage = isTaxRateValid ? taxRateNum : 0;
  const yearlyTax = yearlyGross * (taxPercentage / 100);

  const deductionsPerPeriod = isDeductionsValid ? deductionsNum : 0;
  const yearlyDeductions = deductionsPerPeriod * FREQUENCIES[frequency].multiplier;

  const yearlyNet = yearlyGross - yearlyTax - yearlyDeductions;

  const formatCurrency = (val: number) => 
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(val);

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-6 border-b border-slate-200 bg-slate-50/50">
            <h1 className="text-2xl font-bold text-slate-800">Salary Calculator</h1>
            <p className="text-slate-500 mt-1">Estimate your net take-home pay after taxes and deductions.</p>
          </div>
          
          <div className="md:flex">
            {/* Input Form */}
            <div className="p-6 md:w-1/2 border-b md:border-b-0 md:border-r border-slate-200">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Salary Amount</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <span className="text-slate-400 font-medium">$</span>
                    </div>
                    <input
                      type="text"
                      inputMode="decimal"
                      value={amount}
                      onChange={(e) => handleNumberInput(e.target.value, setAmount)}
                      className={`w-full pl-8 p-3 border rounded-lg focus:ring-2 focus:border-transparent text-slate-800 font-semibold ${
                        !isAmountValid && amount !== "" 
                          ? "border-red-300 focus:ring-red-500 bg-red-50" 
                          : "border-slate-300 focus:ring-primary bg-white"
                      }`}
                      placeholder="e.g. 75000"
                    />
                  </div>
                  {!isAmountValid && (
                    <p className="text-red-500 text-sm mt-1.5 font-medium">Please enter a valid positive amount.</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Pay Frequency</label>
                  <select
                    value={frequency}
                    onChange={(e) => setFrequency(e.target.value as keyof typeof FREQUENCIES)}
                    className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-slate-800 bg-white"
                  >
                    {Object.entries(FREQUENCIES).map(([key, { label }]) => (
                      <option key={key} value={key}>{label}</option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Custom Tax Rate (%)</label>
                    <div className="relative">
                      <input
                        type="text"
                        inputMode="decimal"
                        value={taxRate}
                        onChange={(e) => handleNumberInput(e.target.value, setTaxRate)}
                        className={`w-full p-3 border rounded-lg focus:ring-2 focus:border-transparent text-slate-800 ${
                          !isTaxRateValid && taxRate !== ""
                            ? "border-red-300 focus:ring-red-500 bg-red-50"
                            : "border-slate-300 focus:ring-primary bg-white"
                        }`}
                        placeholder="e.g. 20"
                      />
                      <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                        <span className="text-slate-400 font-medium">%</span>
                      </div>
                    </div>
                    {!isTaxRateValid && (
                      <p className="text-red-500 text-xs mt-1.5 font-medium">Enter a valid rate (0-100).</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Other Deductions</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="text-slate-400 font-medium">$</span>
                      </div>
                      <input
                        type="text"
                        inputMode="decimal"
                        value={deductions}
                        onChange={(e) => handleNumberInput(e.target.value, setDeductions)}
                        className={`w-full pl-7 p-3 border rounded-lg focus:ring-2 focus:border-transparent text-slate-800 ${
                          !isDeductionsValid && deductions !== ""
                            ? "border-red-300 focus:ring-red-500 bg-red-50"
                            : "border-slate-300 focus:ring-primary bg-white"
                        }`}
                        placeholder="e.g. 100"
                      />
                    </div>
                    {!isDeductionsValid && (
                      <p className="text-red-500 text-xs mt-1.5 font-medium">Valid amount required.</p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="p-6 md:w-1/2 bg-slate-50 relative">
              {hasErrors && (
                <div className="absolute inset-0 z-10 bg-slate-50/80 backdrop-blur-sm flex flex-col items-center justify-center p-6 text-center border-l border-slate-200">
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-red-100 mb-2">
                    <p className="text-red-600 font-bold">Calculation Paused</p>
                    <p className="text-slate-600 text-sm mt-1">Please fix the errors in the input fields to see your breakdown.</p>
                  </div>
                </div>
              )}

              <h2 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Estimated Breakdown</h2>
              
              <div className="bg-white rounded-xl border border-slate-200 p-5 mb-6 shadow-sm">
                <p className="text-sm text-slate-500 font-medium">Take-Home Pay (Net)</p>
                <p className="text-4xl font-display font-bold text-emerald-600 mt-1">{formatCurrency(yearlyNet)} <span className="text-lg text-slate-400 font-normal">/ yr</span></p>
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-slate-400 font-medium">Monthly</p>
                    <p className="text-lg font-bold text-slate-700">{formatCurrency(yearlyNet / 12)}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium">Bi-Weekly</p>
                    <p className="text-lg font-bold text-slate-700">{formatCurrency(yearlyNet / 26)}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-slate-200">
                  <span className="text-slate-600 font-medium">Gross Salary</span>
                  <span className="font-bold text-slate-800">{formatCurrency(yearlyGross)}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-200 text-red-500">
                  <span>Total Tax Amount ({isTaxRateValid ? taxRateNum : 0}%)</span>
                  <span>- {formatCurrency(yearlyTax)}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-200 text-red-500">
                  <span>Total Deductions (yearly)</span>
                  <span>- {formatCurrency(yearlyDeductions)}</span>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-blue-50 text-blue-800 text-xs rounded-lg border border-blue-100 flex gap-3">
                <span className="font-bold text-lg">!</span>
                <p><strong>Disclaimer:</strong> This is an estimate based on your manual inputs. It does not constitute official tax, legal, or accounting advice.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 prose prose-slate max-w-none">
          <h2 className="text-xl font-bold text-slate-800">How to use this calculator</h2>
          <p className="text-slate-600">
            Enter your compensation amount, how often you are paid, your estimated total tax rate, and any other periodic deductions (like health insurance or retirement contributions). The tool immediately calculates your take-home pay.
          </p>
          <h2 className="text-xl font-bold text-slate-800 mt-6">Understanding the breakdown</h2>
          <ul className="list-disc pl-5 text-slate-600 space-y-2">
            <li><strong>Gross Salary:</strong> Your total pay before any taxes or deductions are taken out.</li>
            <li><strong>Total Tax Amount:</strong> The estimated taxes based on the custom percentage you provided.</li>
            <li><strong>Other Deductions:</strong> The manual deductions amount you provided, scaled to a yearly total.</li>
            <li><strong>Net Income:</strong> Your final "take-home" pay that actually hits your bank account.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
