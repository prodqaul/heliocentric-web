'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function SupportOurTeamPage() {
  const [isContributionModalOpen, setIsContributionModalOpen] = useState(false);
  const [selectedAmounts, setSelectedAmounts] = useState<number[]>([]);
  const [customAmount, setCustomAmount] = useState('');
  const [isAmountConfirmed, setIsAmountConfirmed] = useState(false);
  const [isPaymentMethodModalOpen, setIsPaymentMethodModalOpen] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<'bank' | 'momo' | null>(null);

  const presetAmounts = [1, 2, 5, 10, 20, 50, 100, 200, 500, 1000];
  const USD_TO_RWF_RATE = 1500;
  const parsedCustomAmount = Number(customAmount);
  const hasValidCustomAmount = customAmount.trim() !== '' && !Number.isNaN(parsedCustomAmount) && parsedCustomAmount > 0;
  const canConfirmAmount = selectedAmounts.length > 0 || hasValidCustomAmount;
  const presetTotal = selectedAmounts.reduce((sum, amount) => sum + amount, 0);
  const selectedTotal = presetTotal + (hasValidCustomAmount ? parsedCustomAmount : 0);
  const selectedTotalRwf = selectedTotal * USD_TO_RWF_RATE;
  const formatRwf = (amount: number) => `${amount.toLocaleString()} RWF`;

  const openContributionModal = () => {
    setIsContributionModalOpen(true);
    setSelectedAmounts([]);
    setCustomAmount('');
    setIsAmountConfirmed(false);
    setIsPaymentMethodModalOpen(false);
    setSelectedPaymentMethod(null);
  };

  const openPaymentMethodModal = () => {
    setIsPaymentMethodModalOpen(true);
    setSelectedPaymentMethod(null);
  };

  const closePaymentMethodModal = () => {
    setIsPaymentMethodModalOpen(false);
    setSelectedPaymentMethod(null);
  };

  const closeContributionModal = () => {
    setIsContributionModalOpen(false);
    setSelectedAmounts([]);
    setCustomAmount('');
    setIsAmountConfirmed(false);
    setIsPaymentMethodModalOpen(false);
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
                <p className="mt-2 text-sm text-gray-600">
                  Confirmed amount: <span className="font-bold text-green-700">${selectedTotal}</span>
                </p>
                <button
                  type="button"
                  onClick={openPaymentMethodModal}
                  className="mt-4 inline-flex rounded-lg bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-gray-800"
                >
                  Choose Payment Method
                </button>

                <p className="mt-6 text-sm text-gray-500">
                  After contributing, please send your confirmation to our contact section so we can acknowledge your support.
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {isPaymentMethodModalOpen && (
        <div className="fixed inset-0 z-60 overflow-y-auto bg-black/60 px-3 py-4 sm:px-4 sm:py-8">
          <div className="mx-auto w-full max-w-lg rounded-2xl bg-white p-4 shadow-2xl sm:p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-xl font-extrabold text-gray-900 sm:text-2xl">Choose Payment Method</h2>
                <p className="mt-2 text-sm text-gray-600">
                  {selectedPaymentMethod === 'momo' ? (
                    <>
                      Amount: <span className="font-bold text-green-700">{formatRwf(selectedTotalRwf)}</span>
                      <span className="text-gray-500"> (${selectedTotal} USD)</span>
                    </>
                  ) : (
                    <>
                      Amount: <span className="font-bold text-green-700">${selectedTotal}</span>
                      <span className="text-gray-500"> ({formatRwf(selectedTotalRwf)})</span>
                    </>
                  )}
                </p>
              </div>
              <button
                type="button"
                onClick={closePaymentMethodModal}
                className="rounded-lg border border-gray-200 px-3 py-1 text-sm font-semibold text-gray-600 hover:bg-gray-50"
              >
                Close
              </button>
            </div>

            <div className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-3 sm:gap-3">
              <button
                type="button"
                onClick={() => setSelectedPaymentMethod('bank')}
                className={`rounded-lg border px-4 py-2.5 text-sm font-semibold transition-colors ${
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
                className={`rounded-lg border px-4 py-2.5 text-sm font-semibold transition-colors ${
                  selectedPaymentMethod === 'momo'
                    ? 'border-blue-700 bg-blue-700 text-white'
                    : 'border-gray-300 bg-white text-gray-700 hover:border-blue-500 hover:text-blue-700'
                }`}
              >
                MoMo
              </button>
              <button
                type="button"
                disabled
                className="cursor-not-allowed rounded-lg border border-gray-200 bg-gray-100 px-4 py-2.5 text-sm font-semibold text-gray-400"
                title="PayPal is coming soon"
              >
                PayPal
                <span className="mt-0.5 block text-[10px] font-medium uppercase tracking-wide">Coming soon</span>
              </button>
            </div>

            {selectedPaymentMethod === 'bank' && (
              <article className="mt-5 rounded-xl border border-green-100 bg-green-50 p-4">
                <h3 className="text-base font-bold text-gray-900 sm:text-lg">Bank Account Details</h3>
                <p className="mt-3 text-sm text-gray-700">Account Name: Moise IRADUKUNDA</p>
                <p className="mt-1 text-sm text-gray-700">Account Number: 4002112551167</p>
                <p className="mt-4 text-sm font-semibold text-gray-800">How to pay:</p>
                <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm text-gray-700">
                  <li>
                    Transfer{' '}
                    <span className="font-semibold">
                      ${selectedTotal} ({formatRwf(selectedTotalRwf)})
                    </span>{' '}
                    to the account above.
                  </li>
                  <li>Use reference: <span className="font-semibold">Support Our Team</span>.</li>
                  <li>Send your payment confirmation to our contact section.</li>
                </ol>
              </article>
            )}

            {selectedPaymentMethod === 'momo' && (
              <article className="mt-5 rounded-xl border border-blue-100 bg-blue-50 p-4">
                <h3 className="text-base font-bold text-gray-900 sm:text-lg">Mobile Money (MoMo)</h3>
                <p className="mt-3 text-sm text-gray-700">Name: Moise IRADUKUNDA</p>
                <p className="mt-1 text-sm text-gray-700">Number: 0791643311</p>
                <p className="mt-1 text-sm text-gray-700">Network: MTN Mobile Money</p>
                <p className="mt-4 text-sm font-semibold text-gray-800">Quick USSD:</p>
                <p className="mt-2 rounded-lg bg-white px-3 py-2 font-mono text-sm font-semibold text-blue-800">
                  *182*1*1*0791643311*{selectedTotalRwf}#
                </p>
                <p className="mt-4 text-sm font-semibold text-gray-800">Or follow these steps:</p>
                <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm text-gray-700">
                  <li>Dial <span className="font-mono font-semibold">*182#</span> on your phone.</li>
                  <li>Select <span className="font-semibold">1</span> (Send Money).</li>
                  <li>Select <span className="font-semibold">1</span> (To MTN Number).</li>
                  <li>Enter number: <span className="font-semibold">0791643311</span>.</li>
                  <li>Enter amount: <span className="font-semibold">{formatRwf(selectedTotalRwf)}</span>.</li>
                  <li>Confirm with your MoMo PIN.</li>
                </ol>
              </article>
            )}

            <p className="mt-5 text-sm text-gray-500">
              After contributing, please send your confirmation to our contact section so we can acknowledge your support.
            </p>
          </div>
        </div>
      )}
    </main>
  );
}
