'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function SupportOurTeamPage() {
  const [isContributionModalOpen, setIsContributionModalOpen] = useState(false);
  const [selectedAmounts, setSelectedAmounts] = useState<number[]>([]);
  const [customAmount, setCustomAmount] = useState('');
  const [isAmountConfirmed, setIsAmountConfirmed] = useState(false);
  const [showPaymentMethodPicker, setShowPaymentMethodPicker] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<'bank' | 'momo' | 'paypal' | null>(null);

  const presetAmounts = [1, 2, 5, 10, 20, 50, 100, 200, 500, 1000];
  const parsedCustomAmount = Number(customAmount);
  const hasValidCustomAmount = customAmount.trim() !== '' && !Number.isNaN(parsedCustomAmount) && parsedCustomAmount > 0;
  const canConfirmAmount = selectedAmounts.length > 0 || hasValidCustomAmount;
  const presetTotal = selectedAmounts.reduce((sum, amount) => sum + amount, 0);
  const selectedTotal = presetTotal + (hasValidCustomAmount ? parsedCustomAmount : 0);

  const openContributionModal = () => {
    setIsContributionModalOpen(true);
    setSelectedAmounts([]);
    setCustomAmount('');
    setIsAmountConfirmed(false);
    setShowPaymentMethodPicker(false);
    setSelectedPaymentMethod(null);
  };

  const closeContributionModal = () => {
    setIsContributionModalOpen(false);
    setSelectedAmounts([]);
    setCustomAmount('');
    setIsAmountConfirmed(false);
    setShowPaymentMethodPicker(false);
    setSelectedPaymentMethod(null);
  };

  const togglePresetAmount = (amount: number) => {
    setSelectedAmounts((previousAmounts) =>
      previousAmounts.includes(amount)
        ? previousAmounts.filter((value) => value !== amount)
        : [...previousAmounts, amount]
    );
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="relative overflow-hidden bg-green-900 text-white">
        <div className="absolute inset-0">
          <Image
            src="/home.png"
            alt="Farm landscape"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-green-950/75" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <p className="mb-4 inline-flex rounded-full border border-white/30 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] sm:px-4 sm:text-xs">
            Support Our Team
          </p>
          <h1 className="max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Help us equip farmers with AI tools and protect forests at scale
          </h1>
          <p className="mt-5 max-w-3xl text-base text-green-100 sm:mt-6 sm:text-lg">
            Your contribution accelerates technology development, field pilots, farmer onboarding, and community resilience across Rwanda and beyond.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <button
              type="button"
              onClick={openContributionModal}
              className="inline-flex w-full items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-green-800 shadow-lg transition-colors hover:bg-green-50 sm:w-auto sm:px-8 sm:text-base"
            >
              Support Our Team
            </button>
            <Link
              href="/"
              className="inline-flex w-full items-center justify-center rounded-lg border border-white/60 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-green-900 sm:w-auto sm:px-8 sm:text-base"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          <article className="rounded-2xl border border-green-100 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold text-gray-900">Technology Buildout</h2>
            <p className="mt-3 text-gray-600">
              Fund AI model improvements, diagnostics accuracy, and multilingual mobile features.
            </p>
          </article>
          <article className="rounded-2xl border border-green-100 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold text-gray-900">Field Pilots</h2>
            <p className="mt-3 text-gray-600">
              Support on-ground testing with farmers, agronomists, and cooperatives in remote areas.
            </p>
          </article>
          <article className="rounded-2xl border border-green-100 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold text-gray-900">Farmer Onboarding</h2>
            <p className="mt-3 text-gray-600">
              Help us train users, deploy hardware, and provide local support for lasting impact.
            </p>
          </article>
        </div>

        <div className="mt-10 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-8">
          <h3 className="text-xl font-extrabold text-gray-900 sm:text-2xl">Why your support matters now</h3>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Climate shocks, crop disease, and land degradation continue to threaten livelihoods. We already have validated solutions, and your support helps us scale quickly where it matters most.
          </p>
          <div className="mt-6">
            <button
              type="button"
              onClick={openContributionModal}
              className="inline-flex min-w-[220px] items-center justify-center rounded-lg bg-green-700 px-8 py-3 font-semibold text-white transition-colors hover:bg-green-800"
            >
              Make a Contribution
            </button>
          </div>
        </div>
      </section>

      {isContributionModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 px-3 py-4 sm:px-4 sm:py-8">
          <div className="mx-auto w-full max-w-3xl rounded-2xl bg-white p-4 shadow-2xl sm:p-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
              <div>
                <h2 className="text-xl font-extrabold text-gray-900 sm:text-2xl">Fund Our Mission</h2>
                <p className="mt-2 text-sm text-gray-600 sm:text-base">
                  First choose your contribution amount, then confirm to see payment methods.
                </p>
              </div>
              <button
                type="button"
                onClick={closeContributionModal}
                className="self-start rounded-lg border border-gray-200 px-3 py-1 text-sm font-semibold text-gray-600 hover:bg-gray-50"
              >
                Close
              </button>
            </div>

            <div className="mt-5 rounded-xl border border-gray-200 bg-gray-50 p-4 sm:mt-6 sm:p-5">
              <h3 className="text-base font-bold text-gray-900 sm:text-lg">1) Select amount</h3>
              <p className="mt-1 text-sm text-gray-600">
                Choose one or multiple preset amounts, or enter a custom amount.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {presetAmounts.map((amount) => {
                  const isSelected = selectedAmounts.includes(amount);
                  return (
                    <button
                      key={amount}
                      type="button"
                      onClick={() => togglePresetAmount(amount)}
                      className={`rounded-lg border px-3 py-2 text-xs font-semibold transition-colors sm:text-sm ${
                        isSelected
                          ? 'border-green-700 bg-green-700 text-white'
                          : 'border-gray-300 bg-white text-gray-700 hover:border-green-500 hover:text-green-700'
                      }`}
                    >
                      ${amount}
                    </button>
                  );
                })}
              </div>

              <div className="mt-4">
                <label htmlFor="customAmount" className="block text-sm font-semibold text-gray-700">
                  Custom amount (USD)
                </label>
                <input
                  id="customAmount"
                  type="number"
                  min="1"
                  step="1"
                  value={customAmount}
                  onChange={(event) => setCustomAmount(event.target.value)}
                  className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 outline-none transition-colors focus:border-green-600"
                  placeholder="Enter amount"
                />
              </div>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="button"
                  onClick={() => {
                    setIsAmountConfirmed(true);
                    setShowPaymentMethodPicker(false);
                    setSelectedPaymentMethod(null);
                  }}
                  disabled={!canConfirmAmount}
                  className="inline-flex w-full items-center justify-center rounded-lg bg-green-700 px-5 py-2.5 text-sm font-semibold text-white transition-colors enabled:hover:bg-green-800 disabled:cursor-not-allowed disabled:bg-gray-300 sm:min-w-[150px] sm:w-auto"
                >
                  Confirm
                </button>
              </div>
              {canConfirmAmount && (
                <p className="mt-2 text-sm font-bold text-green-700">Total: ${selectedTotal}</p>
              )}
            </div>

            {isAmountConfirmed && (
              <div className="mt-6">
                <h3 className="text-base font-bold text-gray-900 sm:text-lg">2) Choose payment method and proceed</h3>
                <button
                  type="button"
                  onClick={() => setShowPaymentMethodPicker(true)}
                  className="mt-4 inline-flex rounded-lg bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-gray-800"
                >
                  Choose Payment Method
                </button>

                {showPaymentMethodPicker && (
                  <div className="mt-4 grid grid-cols-1 gap-2 sm:flex sm:flex-wrap sm:gap-3">
                    <button
                      type="button"
                      onClick={() => setSelectedPaymentMethod('bank')}
                      className={`rounded-lg border px-4 py-2 text-sm font-semibold transition-colors ${
                        selectedPaymentMethod === 'bank'
                          ? 'border-green-700 bg-green-700 text-white'
                          : 'border-gray-300 bg-white text-gray-700 hover:border-green-500 hover:text-green-700'
                      }`}
                    >
                      Bank Account
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedPaymentMethod('momo')}
                      className={`rounded-lg border px-4 py-2 text-sm font-semibold transition-colors ${
                        selectedPaymentMethod === 'momo'
                          ? 'border-blue-700 bg-blue-700 text-white'
                          : 'border-gray-300 bg-white text-gray-700 hover:border-blue-500 hover:text-blue-700'
                      }`}
                    >
                      MoMo
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedPaymentMethod('paypal')}
                      className={`rounded-lg border px-4 py-2 text-sm font-semibold transition-colors ${
                        selectedPaymentMethod === 'paypal'
                          ? 'border-amber-600 bg-amber-600 text-white'
                          : 'border-gray-300 bg-white text-gray-700 hover:border-amber-500 hover:text-amber-700'
                      }`}
                    >
                      PayPal
                    </button>
                  </div>
                )}

                {selectedPaymentMethod === 'bank' && (
                  <article className="mt-4 rounded-xl border border-green-100 bg-green-50 p-4">
                    <h4 className="text-base font-bold text-gray-900 sm:text-lg">Bank Account</h4>
                    <p className="mt-2 text-sm text-gray-700">Account Name: Heliocentric System Group</p>
                    <p className="mt-1 text-sm text-gray-700">Bank: [Your Bank Name]</p>
                    <p className="mt-1 text-sm text-gray-700">Account Number: [Your Account Number]</p>
                    <button
                      type="button"
                      className="mt-4 w-full rounded-lg bg-green-700 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-green-800"
                    >
                      Proceed with Bank Account
                    </button>
                  </article>
                )}

                {selectedPaymentMethod === 'momo' && (
                  <article className="mt-4 rounded-xl border border-blue-100 bg-blue-50 p-4">
                    <h4 className="text-base font-bold text-gray-900 sm:text-lg">MoMo</h4>
                    <p className="mt-2 text-sm text-gray-700">Name: Heliocentric System Group</p>
                    <p className="mt-1 text-sm text-gray-700">Number: [Your MoMo Number]</p>
                    <p className="mt-1 text-sm text-gray-700">Network: MTN / Airtel</p>
                    <button
                      type="button"
                      className="mt-4 w-full rounded-lg bg-blue-700 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-800"
                    >
                      Proceed with MoMo
                    </button>
                  </article>
                )}

                {selectedPaymentMethod === 'paypal' && (
                  <article className="mt-4 rounded-xl border border-amber-100 bg-amber-50 p-4">
                    <h4 className="text-base font-bold text-gray-900 sm:text-lg">PayPal</h4>
                    <p className="mt-2 text-sm text-gray-700">PayPal Email: [your-paypal@email.com]</p>
                    <p className="mt-1 text-sm text-gray-700">Reference: Support Our Team</p>
                    <p className="mt-1 text-sm text-gray-700">Currency: USD / EUR</p>
                    <button
                      type="button"
                      className="mt-4 w-full rounded-lg bg-amber-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-amber-700"
                    >
                      Proceed with PayPal
                    </button>
                  </article>
                )}

                <p className="mt-6 text-sm text-gray-500">
                  After contributing, please send your confirmation to our contact section so we can acknowledge your support.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
